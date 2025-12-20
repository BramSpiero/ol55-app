-- Ol' 55 Piano App - Pace Tracking Migration
-- Run this in Supabase SQL Editor after the initial schema

-- Add pace tracking fields to progress table
ALTER TABLE progress 
ADD COLUMN IF NOT EXISTS days_completed INT NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS pace_status TEXT DEFAULT 'on_track' CHECK (pace_status IN ('ahead', 'on_track', 'behind', 'at_risk'));

-- Add target_end_date to profiles (start_date already exists)
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS target_end_date DATE;

-- Update existing profiles to set target_end_date = start_date + 365 days
UPDATE profiles 
SET target_end_date = start_date + INTERVAL '365 days'
WHERE target_end_date IS NULL;

-- Make target_end_date NOT NULL with default after backfill
ALTER TABLE profiles
ALTER COLUMN target_end_date SET DEFAULT (CURRENT_DATE + INTERVAL '365 days');

-- Function to calculate pace status
CREATE OR REPLACE FUNCTION calculate_pace_status(
  p_start_date DATE,
  p_target_end_date DATE,
  p_days_completed INT
) RETURNS TEXT AS $$
DECLARE
  total_days INT := 336; -- 48 weeks * 7 days
  days_elapsed INT;
  total_duration INT;
  expected_days INT;
  buffer_days INT;
BEGIN
  days_elapsed := CURRENT_DATE - p_start_date;
  total_duration := p_target_end_date - p_start_date;
  
  -- Calculate expected progress
  IF total_duration > 0 THEN
    expected_days := LEAST(ROUND((days_elapsed::FLOAT / total_duration) * total_days), total_days);
  ELSE
    expected_days := total_days;
  END IF;
  
  buffer_days := p_days_completed - expected_days;
  
  -- Determine status
  IF buffer_days >= 14 THEN
    RETURN 'ahead';
  ELSIF buffer_days >= -7 THEN
    RETURN 'on_track';
  ELSIF buffer_days >= -21 THEN
    RETURN 'behind';
  ELSE
    RETURN 'at_risk';
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Function to update pace status (call after practice completion)
CREATE OR REPLACE FUNCTION update_pace_status()
RETURNS TRIGGER AS $$
DECLARE
  v_start_date DATE;
  v_target_end_date DATE;
  v_new_status TEXT;
BEGIN
  -- Get dates from profile
  SELECT start_date, target_end_date 
  INTO v_start_date, v_target_end_date
  FROM profiles 
  WHERE id = NEW.user_id;
  
  -- Calculate new status
  v_new_status := calculate_pace_status(v_start_date, v_target_end_date, NEW.days_completed);
  
  -- Update the status
  NEW.pace_status := v_new_status;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update pace status
DROP TRIGGER IF EXISTS update_pace_status_trigger ON progress;
CREATE TRIGGER update_pace_status_trigger
  BEFORE UPDATE ON progress
  FOR EACH ROW
  EXECUTE FUNCTION update_pace_status();

-- View for easy pace calculation in queries
CREATE OR REPLACE VIEW pace_overview AS
SELECT 
  p.id as user_id,
  pr.display_name,
  pr.start_date,
  pr.target_end_date,
  p.current_week,
  p.current_day,
  p.days_completed,
  p.pace_status,
  (CURRENT_DATE - pr.start_date) as days_elapsed,
  (pr.target_end_date - pr.start_date) as total_duration,
  ROUND(((CURRENT_DATE - pr.start_date)::FLOAT / NULLIF((pr.target_end_date - pr.start_date), 0)) * 336) as expected_days,
  p.days_completed - ROUND(((CURRENT_DATE - pr.start_date)::FLOAT / NULLIF((pr.target_end_date - pr.start_date), 0)) * 336) as buffer_days,
  CASE 
    WHEN p.days_completed >= 336 THEN pr.target_end_date
    ELSE CURRENT_DATE + ((336 - p.days_completed) * (CURRENT_DATE - pr.start_date) / NULLIF(p.days_completed, 0))::INT
  END as projected_completion
FROM progress p
JOIN profiles pr ON p.user_id = pr.id;
