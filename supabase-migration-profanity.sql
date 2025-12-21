-- Add profanity setting to profiles table
-- Run this in Supabase SQL Editor

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS allow_profanity BOOLEAN DEFAULT true;

-- Update the comment on the table to document the new column
COMMENT ON COLUMN profiles.allow_profanity IS 'When true, AI teacher can use casual language including mild profanity';
