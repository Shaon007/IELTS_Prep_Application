import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Volume2,
  Clock,
  HelpCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  Headphones,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

interface QuestionItem {
  id: number
  prompt: string
  fieldPrefix?: string
  fieldSuffix?: string
  type: 'text' | 'choice'
  options?: string[]
}

const PART_1_QUESTIONS: QuestionItem[] = [
  { id: 1, prompt: 'Type of work required:', fieldPrefix: 'Temporary ', fieldSuffix: 'assistant', type: 'text' },
  { id: 2, prompt: 'Location preferred:', fieldPrefix: 'Near ', fieldSuffix: 'station', type: 'text' },
  { id: 3, prompt: 'Available from:', fieldPrefix: 'Monday ', fieldSuffix: 'October', type: 'text' },
  { id: 4, prompt: 'Hours available:', fieldPrefix: 'Maximum of ', fieldSuffix: 'hours per week', type: 'text' },
  { id: 5, prompt: 'Previous experience:', fieldPrefix: 'Customer service in a ', type: 'text' },
  { id: 6, prompt: 'Language spoken fluently:', fieldPrefix: '', fieldSuffix: 'and Spanish', type: 'text' },
  { id: 7, prompt: 'Hourly pay expected:', fieldPrefix: '£ ', fieldSuffix: 'per hour', type: 'text' },
  { id: 8, prompt: 'Contact telephone:', fieldPrefix: '07700 ', type: 'text' },
  { id: 9, prompt: 'Interview scheduled for:', fieldPrefix: 'Thursday at ', fieldSuffix: 'am', type: 'text' },
  { id: 10, prompt: 'Bring original copy of:', fieldPrefix: '', fieldSuffix: 'certificate', type: 'text' },
]

export function ListeningExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const [searchParams] = useSearchParams()
  const isPractice = searchParams.get('mode') === 'practice'
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  const [currentPart, setCurrentPart] = useState<1 | 2 | 3 | 4>(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flagged, setFlagged] = useState<Record<number, boolean>>({})
  const [secondsRemaining, setSecondsRemaining] = useState(30 * 60)
  const [volume, setVolume] = useState(80)
  const [showTime, setShowTime] = useState(true)

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  const handleAnswerChange = (qId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }))
  }

  const toggleFlag = (qId: number) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }))
  }

  const getQuestionNumbersForPart = (part: number) => {
    const start = (part - 1) * 10 + 1
    return Array.from({ length: 10 }, (_, i) => start + i)
  }

  const completeSection = () => {
    // Navigate to next section (Reading) or review
    navigate(`/exam/reading/${attemptId || 'c18-test-1'}`)
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f0f2f5] text-stone-900 select-none overflow-hidden font-sans">
      {/* Authentic CD-IELTS Header */}
      <header className="h-14 bg-white border-b border-stone-300 px-6 flex items-center justify-between shadow-sm z-20">
        <div className="flex items-center gap-4">
          <span className="font-extrabold text-red-600 text-lg tracking-wider">IELTS</span>
          <span className="h-5 w-px bg-stone-300" />
          <span className="font-semibold text-sm text-stone-700">
            Candidate: {profile?.display_name || user?.email?.split('@')[0] || 'Candidate'} (ID: 98241)
          </span>
          <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded font-mono font-medium">
            Listening — Part {currentPart}
          </span>
        </div>

        {/* Audio Status & Volume */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            <Volume2 size={16} className="text-stone-600" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 accent-primary-600 h-1.5 cursor-pointer"
            />
            <span className="text-xs font-mono text-stone-500 w-8">{volume}%</span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2">
            <Clock size={16} className={secondsRemaining < 300 ? 'text-red-600 animate-pulse' : 'text-stone-600'} />
            {showTime ? (
              <span className={`font-mono text-sm font-bold ${secondsRemaining < 300 ? 'text-red-600' : 'text-stone-800'}`}>
                {formatTimer(secondsRemaining)} left
              </span>
            ) : (
              <span className="text-xs text-stone-400 font-mono">Timer hidden</span>
            )}
            <button
              onClick={() => setShowTime(!showTime)}
              className="text-[11px] text-stone-500 hover:text-stone-800 underline ml-1"
            >
              {showTime ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            onClick={completeSection}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded shadow transition-all"
          >
            End Listening &rarr;
          </button>
        </div>
      </header>

      {/* Main Examination Body */}
      <main className="flex-1 flex overflow-hidden p-6 gap-6">
        {/* Left Side: Audio Player indicator & Instructions */}
        <div className="w-1/3 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto">
          <div className="flex items-center gap-2 text-primary-700 bg-primary-50 p-3 rounded-lg border border-primary-200 mb-5">
            <Headphones size={20} className="animate-pulse" />
            <div>
              <div className="font-bold text-xs">Audio Playing (Original Cambridge Recording)</div>
              <div className="text-[11px] text-stone-500">You will hear the recording once only.</div>
            </div>
          </div>

          <h2 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-2 mb-3">
            Part {currentPart}: Instructions
          </h2>

          <div className="text-xs text-stone-700 space-y-3 leading-relaxed">
            <p className="font-semibold text-stone-900">
              Questions 1–10: Complete the notes below.
            </p>
            <p className="bg-stone-50 p-2.5 rounded border border-stone-200 font-medium text-stone-800">
              Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
            </p>
            <p>
              Listen carefully to the conversation between an employment agent and an applicant. Type your answers directly into the corresponding numbered boxes.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Questions Form */}
        <div className="flex-1 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto">
          <h3 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
            Employment Registration Form
          </h3>

          <div className="space-y-4 max-w-xl">
            {PART_1_QUESTIONS.map((q) => {
              const isActive = currentQuestion === q.id
              const isAnswered = Boolean(answers[q.id]?.trim())
              const isMarked = flagged[q.id]

              return (
                <div
                  key={q.id}
                  onClick={() => setCurrentQuestion(q.id)}
                  className={`p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'border-primary-500 bg-primary-50/30 ring-1 ring-primary-500'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span className="font-bold text-stone-700">Question {q.id}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFlag(q.id)
                      }}
                      className={`flex items-center gap-1 text-[11px] font-medium ${
                        isMarked ? 'text-amber-600 font-bold' : 'text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      <Flag size={12} fill={isMarked ? 'currentColor' : 'none'} />
                      <span>{isMarked ? 'Review Flagged' : 'Review'}</span>
                    </button>
                  </div>

                  <div className="text-sm font-medium text-stone-800 flex items-center flex-wrap gap-2">
                    <span>{q.fieldPrefix}</span>
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder={`[ ${q.id} ]`}
                      className="border-b-2 border-stone-400 focus:border-primary-600 bg-stone-50 px-2 py-0.5 text-sm font-semibold text-stone-900 outline-none w-36 transition-colors"
                    />
                    <span>{q.fieldSuffix}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Authentic CD-IELTS Bottom Question Navigator Bar */}
      <footer className="h-16 bg-white border-t border-stone-300 px-6 flex items-center justify-between shadow-md z-20">
        {/* Part selectors */}
        <div className="flex items-center gap-2">
          {([1, 2, 3, 4] as const).map((p) => (
            <button
              key={p}
              onClick={() => {
                setCurrentPart(p)
                setCurrentQuestion((p - 1) * 10 + 1)
              }}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                currentPart === p
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Part {p}
            </button>
          ))}
        </div>

        {/* 1-40 Question Palettes */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 max-w-xl">
          {getQuestionNumbersForPart(currentPart).map((qNum) => {
            const isAnswered = Boolean(answers[qNum]?.trim())
            const isCurrent = currentQuestion === qNum
            const isMarked = flagged[qNum]

            return (
              <button
                key={qNum}
                onClick={() => setCurrentQuestion(qNum)}
                className={`relative w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all ${
                  isCurrent
                    ? 'ring-2 ring-primary-600 bg-primary-50 text-primary-900'
                    : isAnswered
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-100 text-stone-600 border border-stone-200 hover:bg-stone-200'
                }`}
              >
                {qNum}
                {isMarked && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                )}
              </button>
            )
          })}
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(1, prev - 1))}
            className="p-2 border border-stone-300 rounded hover:bg-stone-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentQuestion((prev) => Math.min(40, prev + 1))}
            className="p-2 border border-stone-300 rounded hover:bg-stone-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  )
}
