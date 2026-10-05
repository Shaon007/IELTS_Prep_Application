import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  Headphones,
  BookOpen,
  Flag
} from 'lucide-react'
import { getListeningTest, isListeningAnswerCorrect } from '@/data/listeningTestsData'

interface ReviewItem {
  id: number
  section: 'listening' | 'reading'
  partNumber?: number
  partTitle?: string
  questionText: string
  userAnswer: string
  correctAnswer: string
  alternatives?: string[]
  isCorrect: boolean
  explanation: string
  evidenceText: string
  flagged: boolean
}

export function ReviewPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()

  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'flagged'>('all')
  const [sectionFilter, setSectionFilter] = useState<'all' | 'listening' | 'reading'>('all')

  const testData = useMemo(() => getListeningTest(attemptId), [attemptId])

  const userAnswers: Record<number, string> = useMemo(() => {
    try {
      const saved = sessionStorage.getItem(`ielts_listening_answers_${testData.id}`)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  }, [testData.id])

  // Generate review items from authentic Cambridge test questions and answers
  const reviewItems: ReviewItem[] = useMemo(() => {
    const items: ReviewItem[] = []

    // 40 Listening Questions
    ;([1, 2, 3, 4] as const).forEach((partNum) => {
      const part = testData.parts[partNum]
      if (!part) return

      part.questions.forEach((q) => {
        const uAns = (userAnswers[q.id] || '').trim()
        const isCorrect = isListeningAnswerCorrect(uAns, q.acceptedAnswers)
        const displayPrompt = q.fieldPrefix || q.fieldSuffix
          ? `${q.fieldPrefix || ''}[ ... ]${q.fieldSuffix || ''} (${q.prompt})`
          : q.prompt

        items.push({
          id: q.id,
          section: 'listening',
          partNumber: partNum,
          partTitle: part.title,
          questionText: displayPrompt,
          userAnswer: uAns,
          correctAnswer: q.acceptedAnswers[0],
          alternatives: q.acceptedAnswers.length > 1 ? q.acceptedAnswers.slice(1) : undefined,
          isCorrect,
          explanation: `Official Cambridge IELTS answer key for ${testData.bookTitle}, ${part.title}. Accepted formats: ${q.acceptedAnswers.join(' / ')}.`,
          evidenceText: `${testData.bookTitle} — Part ${partNum} recording (${part.title})`,
          flagged: false
        })
      })
    })

    return items
  }, [testData, userAnswers])

  const filteredItems = reviewItems.filter((item) => {
    if (sectionFilter !== 'all' && item.section !== sectionFilter) return false
    if (filterMode === 'incorrect' && item.isCorrect) return false
    if (filterMode === 'flagged' && !item.flagged) return false
    return true
  })

  const listeningScore = reviewItems.filter((i) => i.section === 'listening' && i.isCorrect).length
  const listeningAttempted = reviewItems.filter((i) => i.section === 'listening' && Boolean(i.userAnswer)).length

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => navigate(`/results/${testData.id}`)}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 flex items-center gap-1 mb-2 cursor-pointer"
          >
            <ChevronLeft size={14} /> Back to Score Summary
          </button>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Answer Review & Explanations</h1>
          <p className="text-stone-500 text-sm mt-0.5">
            {testData.title} — Verified against official Cambridge answer keys.
          </p>
        </div>

        {/* Filter modes */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All (40)
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'incorrect' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            Mistakes ({40 - listeningScore})
          </button>
          <button
            onClick={() => setFilterMode('flagged')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'flagged' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            Flagged
          </button>
        </div>
      </div>

      {/* Quick Summary Banner */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Headphones size={18} className="text-blue-600" />
          <span className="font-bold text-stone-800">Listening Score:</span>
          <span className="font-black text-sm text-stone-900">{listeningScore} / 40</span>
          <span className="text-stone-400">({listeningAttempted} answered)</span>
        </div>
        <span className="font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
          {testData.bookTitle}
        </span>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-xl border bg-white shadow-sm transition-all ${
              item.isCorrect ? 'border-stone-200' : 'border-red-200 bg-red-50/10'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                {item.isCorrect ? (
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                ) : (
                  <XCircle size={20} className="text-red-600 shrink-0" />
                )}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Question {item.id} · Part {item.partNumber} ({item.partTitle})
                  </span>
                  <h3 className="font-bold text-sm text-stone-900 mt-0.5">{item.questionText}</h3>
                </div>
              </div>

              {item.flagged && (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <Flag size={11} fill="currentColor" /> Flagged
                </span>
              )}
            </div>

            {/* Answer Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs my-3">
              <div className={`p-3 rounded-lg border ${item.isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-red-50/50 border-red-200'}`}>
                <span className="text-stone-400 block mb-1">Your Answer:</span>
                <span className={`font-bold font-mono text-sm ${item.isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                  {item.userAnswer || '(blank)'}
                </span>
              </div>

              <div className="p-3 rounded-lg border bg-stone-50 border-stone-200">
                <span className="text-stone-400 block mb-1">Official Cambridge Answer:</span>
                <span className="font-bold font-mono text-sm text-stone-900">
                  {item.correctAnswer}
                  {item.alternatives && item.alternatives.length > 0 && (
                    <span className="text-xs text-stone-500 font-normal"> (also accepts: {item.alternatives.join(', ')})</span>
                  )}
                </span>
              </div>
            </div>

            {/* Explanation & Evidence */}
            <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 text-xs space-y-2">
              <div>
                <span className="font-bold text-stone-700 block mb-0.5">Explanation:</span>
                <p className="text-stone-600 leading-relaxed">{item.explanation}</p>
              </div>

              <div className="pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-700 block mb-0.5">Source / Audio Citation:</span>
                <p className="text-stone-800 italic font-serif leading-relaxed">"{item.evidenceText}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
