-- IELTS Computer Practice Platform
-- Supabase PostgreSQL Schema
-- Run this in your Supabase SQL Editor

-- ============================================================
-- OPTIONAL CLEAN RESET (Uncomment if you want to wipe and recreate everything fresh):
-- ============================================================
-- DROP TABLE IF EXISTS search_index, user_coursework, coursework, recommendations, progress, test_results, writing_evaluations, writing_responses, answers, attempts, user_vocabulary, vocabulary_items, writing_tasks, answer_keys, questions, question_groups, passages, sections, audio_files, tests, books, profiles CASCADE;
-- DROP TYPE IF EXISTS content_status, question_type, section_type, practice_mode, attempt_status, user_role CASCADE;

-- ============================================================
-- ENABLE EXTENSIONS
-- ============================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pg_trgm; -- for text search

-- ============================================================
-- ENUMS (Idempotent creation)
-- ============================================================
DO $$ BEGIN
  CREATE TYPE content_status AS ENUM (
    'discovered', 'imported', 'needs_review', 'verified', 'published', 'archived'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE question_type AS ENUM (
    'multiple_choice',
    'multiple_answer',
    'matching',
    'sentence_completion',
    'note_completion',
    'table_completion',
    'flowchart_completion',
    'summary_completion',
    'form_completion',
    'short_answer',
    'diagram_labeling',
    'map_labeling',
    'heading_matching',
    'information_matching',
    'classification',
    'true_false_ng',
    'yes_no_ng'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE section_type AS ENUM (
    'listening', 'reading', 'writing', 'speaking'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE practice_mode AS ENUM (
    'practice', 'timed_practice', 'exam'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE attempt_status AS ENUM (
    'in_progress', 'completed', 'abandoned', 'expired'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('user', 'admin');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================
-- PROFILES (extends auth.users)
-- ============================================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  role user_role NOT NULL DEFAULT 'user',
  target_band NUMERIC(3,1) DEFAULT 7.0,
  target_listening NUMERIC(3,1) DEFAULT 7.0,
  target_reading NUMERIC(3,1) DEFAULT 7.0,
  target_writing NUMERIC(3,1) DEFAULT 6.5,
  gemini_api_key TEXT, -- encrypted client-side before storing
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- BOOKS
-- ============================================================
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL, -- e.g. 'cambridge-ielts-15'
  title TEXT NOT NULL,       -- e.g. 'Cambridge IELTS 15 Academic'
  series_number INTEGER,     -- e.g. 15
  folder_path TEXT NOT NULL, -- relative path from content root
  pdf_filename TEXT,
  status content_status NOT NULL DEFAULT 'discovered',
  extraction_warnings JSONB DEFAULT '[]',
  total_tests INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- TESTS
-- ============================================================
CREATE TABLE IF NOT EXISTS tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  test_number INTEGER NOT NULL,
  title TEXT NOT NULL, -- e.g. 'Test 1'
  status content_status NOT NULL DEFAULT 'discovered',
  has_listening BOOLEAN DEFAULT FALSE,
  has_reading BOOLEAN DEFAULT FALSE,
  has_writing BOOLEAN DEFAULT FALSE,
  validation_errors JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(book_id, test_number)
);

-- ============================================================
-- AUDIO FILES
-- ============================================================
CREATE TABLE IF NOT EXISTS audio_files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  test_id UUID REFERENCES tests(id) ON DELETE SET NULL,
  filename TEXT NOT NULL,
  storage_path TEXT NOT NULL, -- path in Supabase Storage
  duration_seconds INTEGER,   -- total duration
  file_size_bytes BIGINT,
  -- Section timestamps within the audio file (set manually in admin)
  section1_start INTEGER DEFAULT 0,   -- seconds
  section2_start INTEGER,
  section3_start INTEGER,
  section4_start INTEGER,
  section_end INTEGER, -- when listening ends
  -- Mapping confidence
  mapping_status TEXT DEFAULT 'unverified', -- unverified | verified | mismatch
  mapping_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- SECTIONS (Listening S1-S4, Reading P1-P3, Writing T1-T2)
-- ============================================================
CREATE TABLE IF NOT EXISTS sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  test_id UUID NOT NULL REFERENCES tests(id) ON DELETE CASCADE,
  section_type section_type NOT NULL,
  section_number INTEGER NOT NULL, -- 1,2,3,4 for Listening; 1,2,3 for Reading; 1,2 for Writing
  title TEXT,
  instructions TEXT,
  time_limit_seconds INTEGER, -- null = use default
  question_count INTEGER DEFAULT 0,
  status content_status NOT NULL DEFAULT 'imported',
  source_page_start INTEGER,
  source_page_end INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(test_id, section_type, section_number)
);

-- ============================================================
-- PASSAGES (Reading passages)
-- ============================================================
CREATE TABLE IF NOT EXISTS passages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  title TEXT,
  content TEXT NOT NULL,
  source_page INTEGER,
  word_count INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- QUESTION GROUPS (shared instructions/context)
-- ============================================================
CREATE TABLE IF NOT EXISTS question_groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  question_type question_type NOT NULL,
  instructions TEXT,
  context TEXT,         -- e.g. matching bank options
  display_order INTEGER NOT NULL DEFAULT 0,
  source_page INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- QUESTIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  group_id UUID REFERENCES question_groups(id) ON DELETE SET NULL,
  question_number INTEGER NOT NULL,
  question_text TEXT,
  question_type question_type NOT NULL,
  options JSONB DEFAULT '[]', -- [{label:"A", text:"..."}, ...]
  option_bank JSONB DEFAULT '[]',
  display_order INTEGER NOT NULL DEFAULT 0,
  source_page INTEGER,
  source_book TEXT,
  source_test INTEGER,
  source_section INTEGER,
  status content_status NOT NULL DEFAULT 'imported',
  extraction_confidence NUMERIC(3,2) DEFAULT 1.0, -- 0.0-1.0
  needs_review BOOLEAN DEFAULT FALSE,
  review_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(section_id, question_number)
);

-- ============================================================
-- ANSWER KEYS
-- ============================================================
CREATE TABLE IF NOT EXISTS answer_keys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  correct_answer TEXT,           -- primary answer (lowercase, trimmed)
  correct_answers JSONB DEFAULT '[]', -- for multiple-answer questions
  alternate_answers JSONB DEFAULT '[]', -- acceptable spelling variants
  answer_explanation TEXT,
  source_page INTEGER,
  status content_status NOT NULL DEFAULT 'imported',
  verified_by UUID REFERENCES profiles(id),
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(question_id)
);

-- ============================================================
-- WRITING TASKS
-- ============================================================
CREATE TABLE IF NOT EXISTS writing_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  task_number INTEGER NOT NULL, -- 1 or 2
  task_type TEXT NOT NULL,      -- 'task1' | 'task2'
  prompt TEXT NOT NULL,
  prompt_image_url TEXT,        -- for Task 1 graphs/charts
  prompt_image_description TEXT,
  min_words INTEGER NOT NULL DEFAULT 150, -- 150 for T1, 250 for T2
  time_limit_seconds INTEGER,
  band_descriptors JSONB,       -- official band descriptors reference
  sample_answer TEXT,
  status content_status NOT NULL DEFAULT 'imported',
  source_page INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(section_id, task_number)
);

-- ============================================================
-- VOCABULARY ITEMS
-- ============================================================
CREATE TABLE IF NOT EXISTS vocabulary_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  word TEXT NOT NULL,
  definition TEXT,
  example_sentence TEXT,
  part_of_speech TEXT,
  category TEXT,
  source_file TEXT,
  source_page INTEGER,
  status content_status NOT NULL DEFAULT 'imported',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_vocabulary_word ON vocabulary_items USING gin (word gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_vocabulary_definition ON vocabulary_items USING gin (definition gin_trgm_ops);

-- ============================================================
-- USER VOCABULARY PROGRESS
-- ============================================================
CREATE TABLE IF NOT EXISTS user_vocabulary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  vocabulary_id UUID NOT NULL REFERENCES vocabulary_items(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'unknown', -- unknown | learning | known
  difficulty INTEGER DEFAULT 3, -- 1 (easy) to 5 (hard)
  last_reviewed_at TIMESTAMPTZ,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, vocabulary_id)
);

-- ============================================================
-- ATTEMPTS
-- ============================================================
CREATE TABLE IF NOT EXISTS attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  test_id UUID NOT NULL REFERENCES tests(id),
  mode practice_mode NOT NULL DEFAULT 'practice',
  status attempt_status NOT NULL DEFAULT 'in_progress',
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,     -- for exam mode
  last_active_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  section_started_at JSONB DEFAULT '{}', -- {"listening": "...", "reading": "...", "writing": "..."}
  section_completed_at JSONB DEFAULT '{}',
  integrity_events JSONB DEFAULT '[]',
  recovered BOOLEAN DEFAULT FALSE,
  recovery_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_attempts_user ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_test ON attempts(test_id);
CREATE INDEX IF NOT EXISTS idx_attempts_status ON attempts(status);

-- ============================================================
-- ANSWERS
-- ============================================================
CREATE TABLE IF NOT EXISTS answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES questions(id),
  user_answer TEXT,            -- text for fill-in, option label for MC
  user_answers JSONB DEFAULT '[]', -- for multiple-answer
  is_correct BOOLEAN,          -- null until evaluated
  time_spent_seconds INTEGER,
  flagged BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(attempt_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_answers_attempt ON answers(attempt_id);

-- ============================================================
-- WRITING RESPONSES
-- ============================================================
CREATE TABLE IF NOT EXISTS writing_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
  writing_task_id UUID NOT NULL REFERENCES writing_tasks(id),
  response_text TEXT NOT NULL DEFAULT '',
  word_count INTEGER DEFAULT 0,
  autosave_history JSONB DEFAULT '[]',
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(attempt_id, writing_task_id)
);

-- ============================================================
-- WRITING EVALUATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS writing_evaluations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  writing_response_id UUID NOT NULL REFERENCES writing_responses(id) ON DELETE CASCADE,
  evaluation_source TEXT NOT NULL DEFAULT 'rule_based', -- 'rule_based' | 'gemini'
  task_achievement NUMERIC(3,1),
  coherence_cohesion NUMERIC(3,1),
  lexical_resource NUMERIC(3,1),
  grammatical_accuracy NUMERIC(3,1),
  estimated_band_low NUMERIC(3,1),
  estimated_band_high NUMERIC(3,1),
  feedback JSONB NOT NULL DEFAULT '{}', -- {strengths:[], weaknesses:[], suggestions:[]}
  word_count INTEGER,
  ai_disclaimer TEXT DEFAULT 'AI ESTIMATE — NOT AN OFFICIAL IELTS SCORE',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(writing_response_id, evaluation_source)
);

-- ============================================================
-- TEST RESULTS
-- ============================================================
CREATE TABLE IF NOT EXISTS test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  listening_raw INTEGER,
  listening_max INTEGER DEFAULT 40,
  listening_band NUMERIC(3,1),
  listening_section_scores JSONB DEFAULT '{}', -- {1: {correct:8, total:10}, ...}
  listening_type_scores JSONB DEFAULT '{}',    -- {multiple_choice: {correct:5, total:8}, ...}
  reading_raw INTEGER,
  reading_max INTEGER DEFAULT 40,
  reading_band NUMERIC(3,1),
  reading_passage_scores JSONB DEFAULT '{}',
  reading_type_scores JSONB DEFAULT '{}',
  writing_estimated_band_low NUMERIC(3,1),
  writing_estimated_band_high NUMERIC(3,1),
  overall_band NUMERIC(3,1),
  total_time_seconds INTEGER,
  score_conversion_version TEXT DEFAULT 'cambridge_2024',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_results_user ON test_results(user_id);
CREATE INDEX IF NOT EXISTS idx_results_created ON test_results(created_at DESC);

-- ============================================================
-- PROGRESS
-- ============================================================
CREATE TABLE IF NOT EXISTS progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  total_attempts INTEGER DEFAULT 0,
  listening_attempts INTEGER DEFAULT 0,
  reading_attempts INTEGER DEFAULT 0,
  writing_attempts INTEGER DEFAULT 0,
  avg_listening_band NUMERIC(3,1),
  avg_reading_band NUMERIC(3,1),
  avg_writing_band NUMERIC(3,1),
  best_listening_band NUMERIC(3,1),
  best_reading_band NUMERIC(3,1),
  question_type_performance JSONB DEFAULT '{}',
  listening_section_performance JSONB DEFAULT '{}',
  calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ============================================================
-- RECOMMENDATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  recommendation_type TEXT NOT NULL, -- 'practice_session' | 'vocabulary' | 'focus_area'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  reason TEXT NOT NULL, -- explainable reason
  priority INTEGER DEFAULT 5, -- 1 (highest) to 10
  action_type TEXT, -- 'start_section' | 'start_test' | 'vocabulary'
  action_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  dismissed_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_recommendations_user ON recommendations(user_id, dismissed_at);

-- ============================================================
-- COURSEWORK
-- ============================================================
CREATE TABLE IF NOT EXISTS coursework (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  phase INTEGER NOT NULL,
  phase_title TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  required_section_type section_type,
  required_test_id UUID REFERENCES tests(id),
  required_section_id UUID REFERENCES sections(id),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_coursework (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  coursework_id UUID NOT NULL REFERENCES coursework(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  attempts INTEGER DEFAULT 0,
  best_score NUMERIC(5,2),
  last_attempt_id UUID REFERENCES attempts(id),
  UNIQUE(user_id, coursework_id)
);

-- ============================================================
-- SEARCH INDEX (materialized view for full-text search)
-- ============================================================
CREATE TABLE IF NOT EXISTS search_index (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type TEXT NOT NULL, -- 'book' | 'test' | 'question' | 'passage' | 'vocabulary'
  entity_id UUID NOT NULL,
  title TEXT,
  content TEXT,
  search_vector TSVECTOR,
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_search_vector ON search_index USING gin(search_vector);

-- ============================================================
-- TRIGGERS: auto-update updated_at
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_profiles_updated ON profiles;
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_books_updated ON books;
CREATE TRIGGER trg_books_updated BEFORE UPDATE ON books FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_tests_updated ON tests;
CREATE TRIGGER trg_tests_updated BEFORE UPDATE ON tests FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_questions_updated ON questions;
CREATE TRIGGER trg_questions_updated BEFORE UPDATE ON questions FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_answers_updated ON answers;
CREATE TRIGGER trg_answers_updated BEFORE UPDATE ON answers FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_writing_responses_updated ON writing_responses;
CREATE TRIGGER trg_writing_responses_updated BEFORE UPDATE ON writing_responses FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE writing_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE writing_evaluations ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_coursework ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_vocabulary ENABLE ROW LEVEL SECURITY;

-- Profiles: users can only see/edit their own
DROP POLICY IF EXISTS "profiles_own" ON profiles;
CREATE POLICY "profiles_own" ON profiles FOR ALL USING (auth.uid() = id);

-- Attempts: users see only their own
DROP POLICY IF EXISTS "attempts_own" ON attempts;
CREATE POLICY "attempts_own" ON attempts FOR ALL USING (auth.uid() = user_id);

-- Answers: users see only their own
DROP POLICY IF EXISTS "answers_own" ON answers;
CREATE POLICY "answers_own" ON answers FOR ALL USING (
  attempt_id IN (SELECT id FROM attempts WHERE user_id = auth.uid())
);

-- Writing responses: users see only their own
DROP POLICY IF EXISTS "writing_responses_own" ON writing_responses;
CREATE POLICY "writing_responses_own" ON writing_responses FOR ALL USING (
  attempt_id IN (SELECT id FROM attempts WHERE user_id = auth.uid())
);

-- Writing evaluations: users see their own
DROP POLICY IF EXISTS "writing_evaluations_own" ON writing_evaluations;
CREATE POLICY "writing_evaluations_own" ON writing_evaluations FOR ALL USING (
  writing_response_id IN (
    SELECT wr.id FROM writing_responses wr
    JOIN attempts a ON wr.attempt_id = a.id
    WHERE a.user_id = auth.uid()
  )
);

-- Test results: users see only their own
DROP POLICY IF EXISTS "test_results_own" ON test_results;
CREATE POLICY "test_results_own" ON test_results FOR ALL USING (auth.uid() = user_id);

-- Progress: users see only their own
DROP POLICY IF EXISTS "progress_own" ON progress;
CREATE POLICY "progress_own" ON progress FOR ALL USING (auth.uid() = user_id);

-- Recommendations: users see only their own
DROP POLICY IF EXISTS "recommendations_own" ON recommendations;
CREATE POLICY "recommendations_own" ON recommendations FOR ALL USING (auth.uid() = user_id);

-- User coursework: users see only their own
DROP POLICY IF EXISTS "user_coursework_own" ON user_coursework;
CREATE POLICY "user_coursework_own" ON user_coursework FOR ALL USING (auth.uid() = user_id);

-- User vocabulary: users see only their own
DROP POLICY IF EXISTS "user_vocabulary_own" ON user_vocabulary;
CREATE POLICY "user_vocabulary_own" ON user_vocabulary FOR ALL USING (auth.uid() = user_id);

-- Public content readable by authenticated users (published only)
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE writing_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE audio_files ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "books_public_read" ON books;
CREATE POLICY "books_public_read" ON books FOR SELECT USING (
  status = 'published' OR (
    auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
  )
);

DROP POLICY IF EXISTS "books_admin_write" ON books;
CREATE POLICY "books_admin_write" ON books FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "tests_public_read" ON tests;
CREATE POLICY "tests_public_read" ON tests FOR SELECT USING (
  status = 'published' OR (
    auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
  )
);

DROP POLICY IF EXISTS "tests_admin_write" ON tests;
CREATE POLICY "tests_admin_write" ON tests FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "sections_read" ON sections;
CREATE POLICY "sections_read" ON sections FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "sections_admin_write" ON sections;
CREATE POLICY "sections_admin_write" ON sections FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "questions_read" ON questions;
CREATE POLICY "questions_read" ON questions FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "questions_admin_write" ON questions;
CREATE POLICY "questions_admin_write" ON questions FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

-- Answer keys: NEVER exposed directly to users during active exam
ALTER TABLE answer_keys ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "answer_keys_admin_only" ON answer_keys;
CREATE POLICY "answer_keys_admin_only" ON answer_keys FOR SELECT USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "answer_keys_admin_write" ON answer_keys;
CREATE POLICY "answer_keys_admin_write" ON answer_keys FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "passages_read" ON passages;
CREATE POLICY "passages_read" ON passages FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "qgroups_read" ON question_groups;
CREATE POLICY "qgroups_read" ON question_groups FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "writing_tasks_read" ON writing_tasks;
CREATE POLICY "writing_tasks_read" ON writing_tasks FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "vocabulary_read" ON vocabulary_items;
CREATE POLICY "vocabulary_read" ON vocabulary_items FOR SELECT USING (
  status = 'published' OR auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
);

DROP POLICY IF EXISTS "audio_files_read" ON audio_files;
CREATE POLICY "audio_files_read" ON audio_files FOR SELECT USING (auth.uid() IS NOT NULL);

-- ============================================================
-- TRIGGER: create profile on user signup
-- ============================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO progress (user_id) VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================================
-- FUNCTION: evaluate answers server-side
-- ============================================================
CREATE OR REPLACE FUNCTION evaluate_answers(p_attempt_id UUID)
RETURNS JSONB AS $$
DECLARE
  v_answer RECORD;
  v_correct BOOLEAN;
  v_correct_answer TEXT;
  v_alternate_answers JSONB;
  v_user_answer TEXT;
  v_correct_count INTEGER := 0;
  v_total_count INTEGER := 0;
BEGIN
  -- Only allow evaluation by the attempt owner
  IF NOT EXISTS (
    SELECT 1 FROM attempts WHERE id = p_attempt_id AND user_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  FOR v_answer IN
    SELECT a.id, a.user_answer, a.user_answers, a.question_id,
           ak.correct_answer, ak.correct_answers, ak.alternate_answers
    FROM answers a
    LEFT JOIN answer_keys ak ON a.question_id = ak.question_id
    WHERE a.attempt_id = p_attempt_id
  LOOP
    v_user_answer := LOWER(TRIM(COALESCE(v_answer.user_answer, '')));
    v_correct_answer := LOWER(TRIM(COALESCE(v_answer.correct_answer, '')));
    v_alternate_answers := COALESCE(v_answer.alternate_answers, '[]');

    v_correct := FALSE;

    IF v_correct_answer != '' THEN
      -- Check primary answer
      IF v_user_answer = v_correct_answer THEN
        v_correct := TRUE;
      END IF;

      -- Check alternate answers
      IF NOT v_correct THEN
        SELECT TRUE INTO v_correct
        FROM jsonb_array_elements_text(v_alternate_answers) alt
        WHERE LOWER(TRIM(alt)) = v_user_answer
        LIMIT 1;
      END IF;
    END IF;

    -- Update answer
    UPDATE answers SET is_correct = v_correct WHERE id = v_answer.id;

    IF v_correct THEN v_correct_count := v_correct_count + 1; END IF;
    v_total_count := v_total_count + 1;
  END LOOP;

  RETURN jsonb_build_object(
    'correct', v_correct_count,
    'total', v_total_count
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
