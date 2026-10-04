// Core TypeScript types matching the database schema

export type ContentStatus = 'discovered' | 'imported' | 'needs_review' | 'verified' | 'published' | 'archived'
export type QuestionType =
  | 'multiple_choice'
  | 'multiple_answer'
  | 'matching'
  | 'sentence_completion'
  | 'note_completion'
  | 'table_completion'
  | 'flowchart_completion'
  | 'summary_completion'
  | 'form_completion'
  | 'short_answer'
  | 'diagram_labeling'
  | 'map_labeling'
  | 'heading_matching'
  | 'information_matching'
  | 'classification'
  | 'true_false_ng'
  | 'yes_no_ng'

export type SectionType = 'listening' | 'reading' | 'writing' | 'speaking'
export type PracticeMode = 'practice' | 'timed_practice' | 'exam'
export type AttemptStatus = 'in_progress' | 'completed' | 'abandoned' | 'expired'
export type UserRole = 'user' | 'admin'

// ============================================================
// USER / AUTH
// ============================================================
export interface Profile {
  id: string
  email: string
  display_name?: string
  role: UserRole
  target_band: number
  target_listening: number
  target_reading: number
  target_writing: number
  gemini_api_key?: string
  created_at: string
  updated_at: string
}

// ============================================================
// CONTENT
// ============================================================
export interface Book {
  id: string
  slug: string
  title: string
  series_number?: number
  folder_path: string
  pdf_filename?: string
  status: ContentStatus
  extraction_warnings: string[]
  total_tests: number
  created_at: string
  updated_at: string
}

export interface Test {
  id: string
  book_id: string
  test_number: number
  title: string
  status: ContentStatus
  has_listening: boolean
  has_reading: boolean
  has_writing: boolean
  validation_errors: string[]
  created_at: string
  updated_at: string
  // Relations
  book?: Book
}

export interface AudioFile {
  id: string
  book_id: string
  test_id?: string
  filename: string
  storage_path: string
  duration_seconds?: number
  file_size_bytes?: number
  section1_start: number
  section2_start?: number
  section3_start?: number
  section4_start?: number
  section_end?: number
  mapping_status: 'unverified' | 'verified' | 'mismatch'
  mapping_notes?: string
  created_at: string
  updated_at: string
}

export interface Section {
  id: string
  test_id: string
  section_type: SectionType
  section_number: number
  title?: string
  instructions?: string
  time_limit_seconds?: number
  question_count: number
  status: ContentStatus
  source_page_start?: number
  source_page_end?: number
  created_at: string
  // Relations
  test?: Test
  passages?: Passage[]
  questions?: Question[]
  writing_tasks?: WritingTask[]
}

export interface Passage {
  id: string
  section_id: string
  title?: string
  content: string
  source_page?: number
  word_count?: number
  created_at: string
}

export interface QuestionOption {
  label: string
  text: string
}

export interface QuestionGroup {
  id: string
  section_id: string
  question_type: QuestionType
  instructions?: string
  context?: string
  display_order: number
  source_page?: number
  created_at: string
  // Relations
  questions?: Question[]
}

export interface Question {
  id: string
  section_id: string
  group_id?: string
  question_number: number
  question_text?: string
  question_type: QuestionType
  options: QuestionOption[]
  option_bank: QuestionOption[]
  display_order: number
  source_page?: number
  source_book?: string
  source_test?: number
  source_section?: number
  status: ContentStatus
  extraction_confidence: number
  needs_review: boolean
  review_notes?: string
  created_at: string
  updated_at: string
  // Relations
  group?: QuestionGroup
  answer_key?: AnswerKey
}

export interface AnswerKey {
  id: string
  question_id: string
  correct_answer?: string
  correct_answers: string[]
  alternate_answers: string[]
  answer_explanation?: string
  source_page?: number
  status: ContentStatus
  verified_by?: string
  verified_at?: string
  created_at: string
  updated_at: string
}

export interface WritingTask {
  id: string
  section_id: string
  task_number: number
  task_type: 'task1' | 'task2'
  prompt: string
  prompt_image_url?: string
  prompt_image_description?: string
  min_words: number
  time_limit_seconds?: number
  sample_answer?: string
  status: ContentStatus
  source_page?: number
  created_at: string
}

export interface VocabularyItem {
  id: string
  word: string
  definition?: string
  example_sentence?: string
  part_of_speech?: string
  category?: string
  source_file?: string
  source_page?: number
  status: ContentStatus
  created_at: string
}

export interface UserVocabulary {
  id: string
  user_id: string
  vocabulary_id: string
  status: 'unknown' | 'learning' | 'known'
  difficulty: number
  last_reviewed_at?: string
  review_count: number
  created_at: string
  // Relations
  vocabulary_item?: VocabularyItem
}

// ============================================================
// ATTEMPTS & ANSWERS
// ============================================================
export interface IntegrityEvent {
  type: 'tab_switch' | 'window_blur' | 'fullscreen_exit' | 'copy_attempt' | 'paste_attempt'
  timestamp: string
  details?: string
}

export interface Attempt {
  id: string
  user_id: string
  test_id: string
  mode: PracticeMode
  status: AttemptStatus
  started_at: string
  completed_at?: string
  expires_at?: string
  last_active_at: string
  section_started_at: Record<string, string>
  section_completed_at: Record<string, string>
  integrity_events: IntegrityEvent[]
  recovered: boolean
  recovery_count: number
  created_at: string
  // Relations
  test?: Test
}

export interface Answer {
  id: string
  attempt_id: string
  question_id: string
  user_answer?: string
  user_answers: string[]
  is_correct?: boolean
  time_spent_seconds?: number
  flagged: boolean
  created_at: string
  updated_at: string
  // Relations
  question?: Question
}

export interface WritingResponse {
  id: string
  attempt_id: string
  writing_task_id: string
  response_text: string
  word_count: number
  autosave_history: Array<{ text: string; saved_at: string }>
  submitted_at?: string
  created_at: string
  updated_at: string
  // Relations
  writing_task?: WritingTask
  evaluation?: WritingEvaluation
}

export interface WritingFeedback {
  strengths: string[]
  weaknesses: string[]
  suggestions: string[]
  examples?: Array<{ original: string; suggestion: string }>
}

export interface WritingEvaluation {
  id: string
  writing_response_id: string
  evaluation_source: 'rule_based' | 'gemini'
  task_achievement?: number
  coherence_cohesion?: number
  lexical_resource?: number
  grammatical_accuracy?: number
  estimated_band_low?: number
  estimated_band_high?: number
  feedback: WritingFeedback
  word_count?: number
  ai_disclaimer: string
  created_at: string
}

// ============================================================
// RESULTS
// ============================================================
export interface SectionScore {
  correct: number
  total: number
  percentage: number
}

export interface TestResult {
  id: string
  attempt_id: string
  user_id: string
  // Listening
  listening_raw?: number
  listening_max: number
  listening_band?: number
  listening_section_scores: Record<string, SectionScore>
  listening_type_scores: Record<string, SectionScore>
  // Reading
  reading_raw?: number
  reading_max: number
  reading_band?: number
  reading_passage_scores: Record<string, SectionScore>
  reading_type_scores: Record<string, SectionScore>
  // Writing
  writing_estimated_band_low?: number
  writing_estimated_band_high?: number
  // Overall
  overall_band?: number
  total_time_seconds?: number
  score_conversion_version: string
  created_at: string
  // Relations
  attempt?: Attempt
}

// ============================================================
// PROGRESS & RECOMMENDATIONS
// ============================================================
export interface Progress {
  id: string
  user_id: string
  total_attempts: number
  listening_attempts: number
  reading_attempts: number
  writing_attempts: number
  avg_listening_band?: number
  avg_reading_band?: number
  avg_writing_band?: number
  best_listening_band?: number
  best_reading_band?: number
  question_type_performance: Record<string, SectionScore>
  listening_section_performance: Record<string, SectionScore>
  calculated_at: string
}

export interface Recommendation {
  id: string
  user_id: string
  recommendation_type: 'practice_session' | 'vocabulary' | 'focus_area'
  title: string
  description: string
  reason: string
  priority: number
  action_type?: 'start_section' | 'start_test' | 'vocabulary'
  action_data: Record<string, unknown>
  created_at: string
  expires_at?: string
  dismissed_at?: string
  completed_at?: string
}

export interface CourseworkItem {
  id: string
  title: string
  description?: string
  phase: number
  phase_title: string
  display_order: number
  required_section_type?: SectionType
  required_test_id?: string
  required_section_id?: string
  is_active: boolean
  created_at: string
}

export interface UserCoursework {
  id: string
  user_id: string
  coursework_id: string
  started_at?: string
  completed_at?: string
  attempts: number
  best_score?: number
  last_attempt_id?: string
  // Relations
  coursework?: CourseworkItem
}

// ============================================================
// EXAM SESSION (client state)
// ============================================================
export interface ExamSession {
  attemptId: string
  testId: string
  mode: PracticeMode
  currentSection: SectionType
  currentSectionIndex: number
  currentQuestionIndex: number
  answers: Record<string, string | string[]>
  flaggedQuestions: Set<string>
  sectionStartTimes: Record<string, number> // unix ms
  examStartTime: number // unix ms
  expiresAt: number // unix ms
  integrityEvents: IntegrityEvent[]
  lastSyncedAt: number
}

// ============================================================
// BAND CONVERSION
// ============================================================
export interface BandConversion {
  version: string
  listening: Record<number, number> // raw -> band
  reading: Record<number, number>
}

// ============================================================
// CONTENT SCAN RESULT (for import CLI)
// ============================================================
export interface ContentScanResult {
  books: ScannedBook[]
  totalAudioFiles: number
  totalPdfs: number
  warnings: string[]
}

export interface ScannedBook {
  folderName: string
  folderPath: string
  seriesNumber: number
  audioFiles: string[]
  pdfFiles: string[]
  slug: string
  title: string
  warnings: string[]
}

// ============================================================
// SEARCH
// ============================================================
export interface SearchResult {
  id: string
  entity_type: 'book' | 'test' | 'question' | 'passage' | 'vocabulary'
  entity_id: string
  title?: string
  snippet: string
  metadata: Record<string, unknown>
}
