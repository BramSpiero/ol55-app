-- Ol' 55 Piano Learning App - Database Schema
-- Run this in Supabase SQL Editor (https://supabase.com/dashboard/project/gjhybdjrsbqjshhfdpxa/sql/new)

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  email TEXT,
  musical_background TEXT CHECK (musical_background IN ('none', 'some', 'significant')),
  equipment TEXT CHECK (equipment IN ('acoustic', 'weighted_digital', 'unweighted')),
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  practice_time_preference TEXT CHECK (practice_time_preference IN ('morning', 'afternoon', 'evening')),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress tracking
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  current_week INT NOT NULL DEFAULT 1 CHECK (current_week >= 1 AND current_week <= 48),
  current_day INT NOT NULL DEFAULT 1 CHECK (current_day >= 1 AND current_day <= 7),
  phase INT NOT NULL DEFAULT 1 CHECK (phase >= 1 AND phase <= 6),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Daily practice log
CREATE TABLE practice_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  practice_date DATE NOT NULL,
  week_number INT NOT NULL,
  day_number INT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  difficulty_rating INT CHECK (difficulty_rating >= 1 AND difficulty_rating <= 5),
  notes TEXT,
  duration_minutes INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, practice_date)
);

-- AI conversation history
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  week_number INT NOT NULL,
  day_number INT NOT NULL,
  role TEXT CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reported struggles
CREATE TABLE struggles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  week_number INT NOT NULL,
  day_number INT NOT NULL,
  struggle_description TEXT NOT NULL,
  ai_response TEXT,
  generated_exercise TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE struggles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON profiles 
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles 
  FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles 
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for progress
CREATE POLICY "Users can view own progress" ON progress 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON progress 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON progress 
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for practice_logs
CREATE POLICY "Users can view own practice logs" ON practice_logs 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own practice logs" ON practice_logs 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own practice logs" ON practice_logs 
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for ai_conversations
CREATE POLICY "Users can view own conversations" ON ai_conversations 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own conversations" ON ai_conversations 
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for struggles
CREATE POLICY "Users can view own struggles" ON struggles 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own struggles" ON struggles 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own struggles" ON struggles 
  FOR UPDATE USING (auth.uid() = user_id);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, email)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', 'Student'), NEW.email);
  
  INSERT INTO public.progress (user_id, current_week, current_day, phase)
  VALUES (NEW.id, 1, 1, 1);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_updated_at
  BEFORE UPDATE ON progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
