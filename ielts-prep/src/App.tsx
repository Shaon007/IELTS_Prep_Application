import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

// Layouts
import { AppLayout } from '@/components/layout/AppLayout'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { ExamLayout } from '@/components/layout/ExamLayout'

// Pages — Auth
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'

// Pages — Main App
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { PracticePage } from '@/pages/practice/PracticePage'
import { MockTestsPage } from '@/pages/mock/MockTestsPage'
import { MaterialsPage } from '@/pages/materials/MaterialsPage'
import { ProgressPage } from '@/pages/progress/ProgressPage'
import { VocabularyPage } from '@/pages/vocabulary/VocabularyPage'
import { ProfilePage } from '@/pages/profile/ProfilePage'
import { SearchPage } from '@/pages/search/SearchPage'

// Pages — Exam
import { ListeningExamPage } from '@/pages/exam/ListeningExamPage'
import { ReadingExamPage } from '@/pages/exam/ReadingExamPage'
import { WritingExamPage } from '@/pages/exam/WritingExamPage'
import { MockExamPage } from '@/pages/exam/MockExamPage'
import { ExamStartPage } from '@/pages/exam/ExamStartPage'

// Pages — Results
import { ResultsPage } from '@/pages/results/ResultsPage'
import { ReviewPage } from '@/pages/results/ReviewPage'

// Pages — Admin
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminBooksPage } from '@/pages/admin/AdminBooksPage'
import { AdminTestsPage } from '@/pages/admin/AdminTestsPage'
import { AdminQuestionsPage } from '@/pages/admin/AdminQuestionsPage'
import { AdminAudioPage } from '@/pages/admin/AdminAudioPage'
import { AdminUsersPage } from '@/pages/admin/AdminUsersPage'

// Guards
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { AdminRoute } from '@/components/auth/AdminRoute'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { SetupRequired } from '@/pages/SetupRequired'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
})

export default function App() {
  const { setUser, setSession, setProfile, setLoading, setInitialized, isInitialized, isLoading } =
    useAuthStore()

  useEffect(() => {
    // Initialize auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        // Load profile
        supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
          .then(({ data }) => {
            if (data) setProfile(data)
            setLoading(false)
            setInitialized(true)
          })
      } else {
        setLoading(false)
        setInitialized(true)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
          if (data) setProfile(data)
        } else {
          setProfile(null)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Check if Supabase is configured
  const isConfigured = isSupabaseConfigured

  if (!isConfigured) {
    return <SetupRequired />
  }

  if (!isInitialized || isLoading) {
    return <LoadingScreen />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Main app — protected */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/mock-tests" element={<MockTestsPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/vocabulary" element={<VocabularyPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/results/:attemptId" element={<ResultsPage />} />
              <Route path="/results/:attemptId/review" element={<ReviewPage />} />
            </Route>

            {/* Exam shell — no main layout */}
            <Route element={<ExamLayout />}>
              <Route path="/exam/start/:testId" element={<ExamStartPage />} />
              <Route path="/exam/listening/:attemptId" element={<ListeningExamPage />} />
              <Route path="/exam/reading/:attemptId" element={<ReadingExamPage />} />
              <Route path="/exam/writing/:attemptId" element={<WritingExamPage />} />
              <Route path="/exam/mock/:attemptId" element={<MockExamPage />} />
            </Route>
          </Route>

          {/* Admin — admin role required */}
          <Route element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/books" element={<AdminBooksPage />} />
              <Route path="/admin/books/:bookId/tests" element={<AdminTestsPage />} />
              <Route path="/admin/tests/:testId/questions" element={<AdminQuestionsPage />} />
              <Route path="/admin/audio" element={<AdminAudioPage />} />
              <Route path="/admin/users" element={<AdminUsersPage />} />
            </Route>
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
