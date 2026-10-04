import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'
import {
  TrendingUp, Clock, Target, AlertCircle,
  ChevronRight, Headphones, BookOpen, PenLine,
  CheckCircle2, Play, BookMarked, ArrowRight
} from 'lucide-react'
import { bandColorClass, bandDescription } from '@/lib/scoring'
import type { Progress, TestResult, Recommendation, Book } from '@/types'

function ProgressBar({ value, max = 100, color = 'var(--color-teal-500)' }: {
  value: number; max?: number; color?: string
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className="progress-bar" style={{ flex: 1 }}>
      <div className="progress-bar-fill" style={{ width: `${pct}%`, background: color }} />
    </div>
  )
}

function BandBadge({ band }: { band?: number }) {
  if (!band) return <span style={{ color: 'var(--color-stone-400)', fontSize: '0.875rem' }}>N/A</span>
  return (
    <span style={{
      padding: '0.2rem 0.6rem',
      borderRadius: 4,
      fontSize: '0.85rem',
      fontWeight: 600,
    }} className={bandColorClass(band)}>
      {band.toFixed(1)}
    </span>
  )
}

function SectionIcon({ section }: { section: string }) {
  const icons: Record<string, React.ReactNode> = {
    listening: <Headphones size={16} />,
    reading: <BookOpen size={16} />,
    writing: <PenLine size={16} />,
  }
  return <>{icons[section] ?? null}</>
}

export function DashboardPage() {
  const { profile } = useAuthStore()
  const navigate = useNavigate()

  const { data: progress } = useQuery<Progress>({
    queryKey: ['progress', profile?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', profile!.id)
        .single()
      if (error) throw error
      return data
    },
    enabled: !!profile?.id,
  })

  const { data: recentResults } = useQuery<TestResult[]>({
    queryKey: ['recent-results', profile?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('test_results')
        .select('*, attempt:attempts(*, test:tests(title, book:books(title)))')
        .eq('user_id', profile!.id)
        .order('created_at', { ascending: false })
        .limit(5)
      if (error) throw error
      return data ?? []
    },
    enabled: !!profile?.id,
  })

  const { data: recommendations } = useQuery<Recommendation[]>({
    queryKey: ['recommendations', profile?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('recommendations')
        .select('*')
        .eq('user_id', profile!.id)
        .is('dismissed_at', null)
        .is('completed_at', null)
        .order('priority', { ascending: true })
        .limit(3)
      if (error) throw error
      return data ?? []
    },
    enabled: !!profile?.id,
  })

  const { data: publishedBooks } = useQuery<Book[]>({
    queryKey: ['published-books'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('status', 'published')
        .order('series_number', { ascending: true })
      if (error) throw error
      return data ?? []
    },
  })

  const hasContent = (publishedBooks?.length ?? 0) > 0

  // Calculate overall prep percentage from actual data
  const overallPct = progress ? (() => {
    const bands = [
      progress.avg_listening_band,
      progress.avg_reading_band,
      progress.avg_writing_band,
    ].filter((b): b is number => b !== undefined && b > 0)

    if (bands.length === 0) return 0
    const avg = bands.reduce((a, b) => a + b, 0) / bands.length
    return Math.round((avg / 9) * 100)
  })() : 0

  const greeting = (() => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
  })()

  return (
    <div style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-stone-900)', margin: '0 0 0.25rem' }}>
          {greeting}, {profile?.display_name ?? 'there'}
        </h1>
        <p style={{ color: 'var(--color-stone-500)', margin: 0, fontSize: '0.875rem' }}>
          IELTS Computer Practice
          {profile?.target_band && (
            <span style={{ marginLeft: '0.75rem', color: 'var(--color-teal-600)', fontWeight: 500 }}>
              Target: Band {profile.target_band}
            </span>
          )}
        </p>
      </div>

      {/* No content state */}
      {!hasContent && (
        <div style={{
          background: 'white',
          border: '1px solid var(--color-stone-200)',
          borderRadius: 10,
          padding: '3rem 2rem',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.75rem', color: 'var(--color-stone-800)' }}>
            Welcome to IELTS Practice
          </h2>
          <p style={{ color: 'var(--color-stone-600)', margin: '0 0 1.5rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            No verified content is available yet. Import your IELTS materials to begin practicing.
          </p>
          <button
            onClick={() => navigate('/admin/books')}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--color-teal-600)', color: 'white',
              border: 'none', borderRadius: 6, fontSize: '0.875rem',
              fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            <Play size={16} />
            Go to Admin → Import Books
          </button>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-stone-400)', marginTop: '1rem', marginBottom: 0 }}>
            Admin area → Books → Scan & Import
          </p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>

        {/* Overall Progress Card */}
        <div className="card" style={{ gridColumn: hasContent ? undefined : 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-700)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Preparation Progress
            </h2>
            <TrendingUp size={16} color="var(--color-stone-400)" />
          </div>

          {/* Overall */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-stone-600)' }}>Overall</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-800)' }}>{overallPct}%</span>
            </div>
            <ProgressBar value={overallPct} />
          </div>

          {/* By skill */}
          {[
            { key: 'listening', label: 'Listening', band: progress?.avg_listening_band, target: profile?.target_listening },
            { key: 'reading', label: 'Reading', band: progress?.avg_reading_band, target: profile?.target_reading },
            { key: 'writing', label: 'Writing', band: progress?.avg_writing_band, target: profile?.target_writing },
          ].map(({ key, label, band, target }) => (
            <div key={key} style={{ marginBottom: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <SectionIcon section={key} />
                <span style={{ fontSize: '0.8rem', color: 'var(--color-stone-600)', flex: 1 }}>{label}</span>
                <BandBadge band={band} />
                {target && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-stone-400)' }}>
                    / {target}
                  </span>
                )}
              </div>
              <ProgressBar value={band ? (band / 9) * 100 : 0} />
            </div>
          ))}

          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-stone-500)' }}>
              {progress?.total_attempts ?? 0} total attempts
            </div>
          </div>
        </div>

        {/* Recent Performance */}
        {recentResults && recentResults.length > 0 && (
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-700)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Recent Tests
              </h2>
              <Clock size={16} color="var(--color-stone-400)" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentResults.slice(0, 4).map((result) => {
                const testTitle = (result.attempt as any)?.test?.title ?? 'Test'
                const bookTitle = (result.attempt as any)?.test?.book?.title ?? ''
                const date = new Date(result.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })

                return (
                  <div
                    key={result.id}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.625rem 0.75rem',
                      background: 'var(--color-stone-50)',
                      borderRadius: 6, cursor: 'pointer',
                      transition: 'background 0.1s',
                    }}
                    onClick={() => navigate(`/results/${result.attempt_id}`)}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-stone-100)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-stone-50)')}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-stone-800)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {bookTitle} {testTitle}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-stone-500)' }}>{date}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                      {result.listening_band && <BandBadge band={result.listening_band} />}
                      {result.reading_band && <BandBadge band={result.reading_band} />}
                    </div>
                    <ChevronRight size={14} color="var(--color-stone-400)" />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Weak Areas */}
        {progress && Object.keys(progress.question_type_performance).length > 0 && (
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-700)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Weak Areas
              </h2>
              <AlertCircle size={16} color="var(--color-warning)" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {Object.entries(progress.question_type_performance)
                .filter(([, score]) => score.total >= 3 && score.correct / score.total < 0.65)
                .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
                .slice(0, 5)
                .map(([type, score]) => {
                  const accuracy = Math.round((score.correct / score.total) * 100)
                  const label = type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                  return (
                    <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-stone-700)', fontWeight: 500 }}>{label}</div>
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: accuracy < 50 ? 'var(--color-error)' : 'var(--color-warning)' }}>
                        {accuracy}%
                      </div>
                      <div style={{ width: 60 }}>
                        <ProgressBar value={accuracy} color={accuracy < 50 ? '#dc2626' : '#d97706'} />
                      </div>
                    </div>
                  )
                })}
            </div>

            {Object.values(progress.question_type_performance).every(
              s => s.total < 3 || s.correct / s.total >= 0.65
            ) && (
              <p style={{ fontSize: '0.8rem', color: 'var(--color-stone-500)', margin: 0 }}>
                Complete more practice sessions to identify weak areas.
              </p>
            )}
          </div>
        )}

        {/* Recommendations */}
        {recommendations && recommendations.length > 0 && (
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-700)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Recommended Next
              </h2>
              <Target size={16} color="var(--color-teal-500)" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  style={{
                    padding: '0.875rem',
                    background: 'var(--color-teal-50)',
                    border: '1px solid var(--color-teal-100)',
                    borderRadius: 6,
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (rec.action_type === 'start_section') navigate('/practice')
                    else if (rec.action_type === 'vocabulary') navigate('/vocabulary')
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-teal-800)', marginBottom: '0.25rem' }}>
                    {rec.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-teal-700)', marginBottom: '0.375rem' }}>
                    {rec.description}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-stone-500)' }}>
                    Reason: {rec.reason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Books */}
        {publishedBooks && publishedBooks.length > 0 && (
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-stone-700)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Available Materials
              </h2>
              <button
                onClick={() => navigate('/practice')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--color-teal-600)', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                View all <ArrowRight size={14} />
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {publishedBooks.map((book) => (
                <div
                  key={book.id}
                  style={{
                    padding: '1rem',
                    background: 'var(--color-stone-50)',
                    border: '1px solid var(--color-stone-200)',
                    borderRadius: 6,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onClick={() => navigate('/practice')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-teal-300)'
                    e.currentTarget.style.background = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-stone-200)'
                    e.currentTarget.style.background = 'var(--color-stone-50)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <BookOpen size={16} color="var(--color-teal-600)" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-teal-600)', fontWeight: 600 }}>
                      Cambridge {book.series_number}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-stone-800)' }}>
                    {book.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-stone-500)', marginTop: '0.25rem' }}>
                    {book.total_tests} test{book.total_tests !== 1 ? 's' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
