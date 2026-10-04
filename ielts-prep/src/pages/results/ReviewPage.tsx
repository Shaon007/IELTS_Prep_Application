import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ArrowRight,
  Filter,
  BookOpen,
  Headphones,
  Flag
} from 'lucide-react'

interface ReviewItem {
  id: number
  section: 'listening' | 'reading'
  questionText: string
  userAnswer: string
  correctAnswer: string
  alternatives?: string[]
  isCorrect: boolean
  explanation: string
  evidenceText: string
  flagged: boolean
}

const SAMPLE_REVIEW_ITEMS: ReviewItem[] = [
  {
    id: 1,
    section: 'listening',
    questionText: 'Type of work required: Temporary [ ... ] assistant',
    userAnswer: 'clerical',
    correctAnswer: 'clerical',
    alternatives: ['office'],
    isCorrect: true,
    explanation: 'The speaker states: "We have an opening for a temporary clerical assistant at the main branch."',
    evidenceText: 'Transcript: "Yes, currently we are looking for a clerical assistant for the autumn term."',
    flagged: false
  },
  {
    id: 2,
    section: 'listening',
    questionText: 'Location preferred: Near [ ... ] station',
    userAnswer: 'central',
    correctAnswer: 'central',
    isCorrect: true,
    explanation: 'The candidate says: "Somewhere close to the central station would be ideal."',
    evidenceText: 'Transcript: "...preferably near the central railway terminus."',
    flagged: false
  },
  {
    id: 3,
    section: 'listening',
    questionText: 'Hours available: Maximum of [ ... ] hours per week',
    userAnswer: '25',
    correctAnswer: '20',
    isCorrect: false,
    explanation: 'The speaker initially mentions 25, but corrects herself saying student visa regulations cap work at 20 hours.',
    evidenceText: 'Transcript: "I thought about 25, but actually legally I am restricted to 20 hours maximum during term-time."',
    flagged: true
  },
  {
    id: 4,
    section: 'reading',
    questionText: 'In the Middle Ages, nutmeg was inexpensive and consumed primarily by peasants.',
    userAnswer: 'FALSE',
    correctAnswer: 'FALSE',
    isCorrect: true,
    explanation: 'The passage explicitly says nutmeg was an exotic luxury and wealthy merchants paid exorbitant prices.',
    evidenceText: 'Passage 1, Para B: "Wealthy merchants paid exorbitant prices for tiny quantities, using it for luxury preservation."',
    flagged: false
  },
  {
    id: 5,
    section: 'reading',
    questionText: 'Nutmeg seeds were dipped in lime to preserve their culinary flavor during transport.',
    userAnswer: 'TRUE',
    correctAnswer: 'FALSE',
    isCorrect: false,
    explanation: 'Lime was used specifically to prevent unauthorized germination and planting elsewhere, NOT to preserve culinary flavor.',
    evidenceText: 'Passage 1, Para D: "They coated exported seeds in lime to prevent unauthorized planting elsewhere."',
    flagged: true
  }
]

export function ReviewPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()

  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'flagged'>('all')
  const [sectionFilter, setSectionFilter] = useState<'all' | 'listening' | 'reading'>('all')

  const filteredItems = SAMPLE_REVIEW_ITEMS.filter((item) => {
    if (sectionFilter !== 'all' && item.section !== sectionFilter) return false
    if (filterMode === 'incorrect' && item.isCorrect) return false
    if (filterMode === 'flagged' && !item.flagged) return false
    return true
  })

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => navigate(`/results/${attemptId || 'c18-test-1'}`)}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 flex items-center gap-1 mb-2"
          >
            <ChevronLeft size={14} /> Back to Score Summary
          </button>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Answer Review & Explanations</h1>
          <p className="text-stone-500 text-sm mt-0.5">
            Audit your responses against official Cambridge answer keys with transcript and passage citations.
          </p>
        </div>

        {/* Filter modes */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'incorrect' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            Mistakes Only
          </button>
          <button
            onClick={() => setFilterMode('flagged')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'flagged' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            Flagged
          </button>
        </div>
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
              <div className="flex items-center gap-2">
                {item.isCorrect ? (
                  <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                ) : (
                  <XCircle size={20} className="text-red-600 flex-shrink-0" />
                )}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Question {item.id} · {item.section}
                  </span>
                  <h3 className="font-bold text-sm text-stone-900 mt-0.5">{item.questionText}</h3>
                </div>
              </div>

              {item.flagged && (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <Flag size={11} fill="currentColor" /> Flagged during exam
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
                  {item.alternatives && (
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
                <span className="font-bold text-stone-700 block mb-0.5">Passage / Audio Locator:</span>
                <p className="text-stone-800 italic font-serif leading-relaxed">"{item.evidenceText}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
