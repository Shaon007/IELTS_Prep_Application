import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ExamSession, IntegrityEvent, PracticeMode, SectionType } from '@/types'
import { supabase } from '@/lib/supabase'

const AUTOSAVE_INTERVAL = 5000 // 5 seconds
const LOCAL_KEY = 'ielts-exam-session'

interface ExamStore {
  session: ExamSession | null
  isSaving: boolean
  saveError: string | null
  lastSaveTime: number | null

  // Session management
  startSession: (
    attemptId: string,
    testId: string,
    mode: PracticeMode,
    section: SectionType,
    expiresAt: number
  ) => void
  restoreSession: (session: ExamSession) => void
  clearSession: () => void

  // Answer management
  setAnswer: (questionId: string, answer: string | string[]) => void
  toggleFlag: (questionId: string) => void

  // Navigation
  setCurrentQuestion: (index: number) => void
  setCurrentSection: (section: SectionType, sectionIndex: number) => void
  markSectionStart: (section: SectionType) => void
  markSectionComplete: (section: SectionType) => void

  // Integrity
  logIntegrityEvent: (event: Omit<IntegrityEvent, 'timestamp'>) => void

  // Persistence
  syncToServer: () => Promise<void>
  saveAnswerToServer: (questionId: string, answer: string | string[]) => Promise<void>
}

export const useExamStore = create<ExamStore>()(
  persist(
    (set, get) => ({
      session: null,
      isSaving: false,
      saveError: null,
      lastSaveTime: null,

      startSession: (attemptId, testId, mode, section, expiresAt) => {
        const now = Date.now()
        const session: ExamSession = {
          attemptId,
          testId,
          mode,
          currentSection: section,
          currentSectionIndex: 0,
          currentQuestionIndex: 0,
          answers: {},
          flaggedQuestions: new Set(),
          sectionStartTimes: { [section]: now },
          examStartTime: now,
          expiresAt,
          integrityEvents: [],
          lastSyncedAt: now,
        }
        set({ session })
      },

      restoreSession: (session) => {
        set({ session: { ...session, flaggedQuestions: new Set(session.flaggedQuestions) } })
      },

      clearSession: () => {
        set({ session: null, saveError: null })
        localStorage.removeItem(LOCAL_KEY)
      },

      setAnswer: (questionId, answer) => {
        const { session } = get()
        if (!session) return

        const newSession = {
          ...session,
          answers: { ...session.answers, [questionId]: answer },
        }
        set({ session: newSession })

        // Debounced server save
        get().saveAnswerToServer(questionId, answer)
      },

      toggleFlag: (questionId) => {
        const { session } = get()
        if (!session) return

        const flagged = new Set(session.flaggedQuestions)
        if (flagged.has(questionId)) {
          flagged.delete(questionId)
        } else {
          flagged.add(questionId)
        }
        set({ session: { ...session, flaggedQuestions: flagged } })
      },

      setCurrentQuestion: (index) => {
        const { session } = get()
        if (!session) return
        set({ session: { ...session, currentQuestionIndex: index } })
      },

      setCurrentSection: (section, sectionIndex) => {
        const { session } = get()
        if (!session) return
        set({
          session: {
            ...session,
            currentSection: section,
            currentSectionIndex: sectionIndex,
            currentQuestionIndex: 0,
          },
        })
      },

      markSectionStart: (section) => {
        const { session } = get()
        if (!session) return
        set({
          session: {
            ...session,
            sectionStartTimes: { ...session.sectionStartTimes, [section]: Date.now() },
          },
        })
      },

      markSectionComplete: (section) => {
        const { session } = get()
        if (!session) return
        // Sync section completion to server
        supabase
          .from('attempts')
          .update({
            section_completed_at: {
              [section]: new Date().toISOString(),
            },
          })
          .eq('id', session.attemptId)
          .then(() => {})
      },

      logIntegrityEvent: (event) => {
        const { session } = get()
        if (!session) return

        const fullEvent: IntegrityEvent = {
          ...event,
          timestamp: new Date().toISOString(),
        }
        const newEvents = [...session.integrityEvents, fullEvent]
        set({ session: { ...session, integrityEvents: newEvents } })

        // Persist integrity events to server
        supabase
          .from('attempts')
          .update({ integrity_events: newEvents })
          .eq('id', session.attemptId)
          .then(() => {})
      },

      syncToServer: async () => {
        const { session } = get()
        if (!session) return

        set({ isSaving: true, saveError: null })
        try {
          const { error } = await supabase
            .from('attempts')
            .update({
              last_active_at: new Date().toISOString(),
            })
            .eq('id', session.attemptId)

          if (error) throw error

          set({ lastSaveTime: Date.now(), isSaving: false })
        } catch (err) {
          set({ saveError: 'Failed to sync session', isSaving: false })
        }
      },

      saveAnswerToServer: async (questionId, answer) => {
        const { session } = get()
        if (!session) return

        const userAnswer = Array.isArray(answer) ? null : answer
        const userAnswers = Array.isArray(answer) ? answer : []

        try {
          await supabase.from('answers').upsert({
            attempt_id: session.attemptId,
            question_id: questionId,
            user_answer: userAnswer,
            user_answers: userAnswers,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'attempt_id,question_id' })
        } catch {
          // Silently queue for retry — answers are also in local store
        }
      },
    }),
    {
      name: LOCAL_KEY,
      partialize: (state) => ({
        session: state.session
          ? {
              ...state.session,
              // Convert Set to Array for JSON serialization
              flaggedQuestions: Array.from(state.session.flaggedQuestions),
            }
          : null,
      }),
    }
  )
)

// Derived selectors
export const useExamSession = () => useExamStore((s) => s.session)
export const useCurrentAnswer = (questionId: string) =>
  useExamStore((s) => s.session?.answers[questionId] ?? '')
export const useIsQuestionFlagged = (questionId: string) =>
  useExamStore((s) => s.session?.flaggedQuestions.has(questionId) ?? false)
export const useAnsweredCount = () =>
  useExamStore((s) => {
    const answers = s.session?.answers ?? {}
    return Object.values(answers).filter(
      (a) => a !== '' && a !== null && a !== undefined && (!Array.isArray(a) || a.length > 0)
    ).length
  })
