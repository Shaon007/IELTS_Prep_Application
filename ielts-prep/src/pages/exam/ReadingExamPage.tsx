import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  Highlighter,
  Type,
  HelpCircle,
  AlertCircle
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

interface ReadingQuestion {
  id: number
  type: 'tfng' | 'summary' | 'mcq'
  prompt: string
  options?: string[]
}

const SAMPLE_PASSAGE_1 = {
  title: 'Nutmeg: A Valuable Spice',
  paragraphs: [
    'Paragraph A: The nutmeg tree, Myristica fragrans, is a large evergreen tree native to Southeast Asia. Until the late eighteenth century, it only grew in one place in the world: a small group of islands in the Banda Sea, part of the Moluccas in modern Indonesia.',
    'Paragraph B: In the Middle Ages, nutmeg was regarded as an exotic luxury across Europe. Wealthy merchants paid exorbitant prices for tiny quantities, using it for food flavoring, medicine, and preservation. In the fourteenth century, during the Black Death, doctors believed nutmeg was the only effective preventative against the plague.',
    'Paragraph C: The Portuguese were the first Europeans to establish a maritime route to the Banda Islands in 1512, aiming to monopolize the spice trade. However, they were eventually displaced by the Dutch East India Company (VOC) in the early seventeenth century, which enforced brutal control over the local population.',
    'Paragraph D: To maintain artificial scarcity and artificially inflated prices, the Dutch destroyed any nutmeg trees found growing outside the strictly controlled plantation zones. They also coated exported seeds in lime to prevent unauthorized planting elsewhere.'
  ],
  questions: [
    { id: 1, type: 'tfng', prompt: 'In the Middle Ages, nutmeg was inexpensive and consumed primarily by peasants.' },
    { id: 2, type: 'tfng', prompt: 'During the Black Death, doctors believed nutmeg offered protection against the plague.' },
    { id: 3, type: 'tfng', prompt: 'The Portuguese successfully retained total control of the Banda Islands throughout the seventeenth century.' },
    { id: 4, type: 'tfng', prompt: 'The Dutch intentionally burnt nutmeg trees outside designated plantations to maintain high market prices.' },
    { id: 5, type: 'tfng', prompt: 'Nutmeg seeds were dipped in lime to preserve their culinary flavor during transport.' }
  ]
}

export function ReadingExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  const [currentPassage, setCurrentPassage] = useState<1 | 2 | 3>(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flagged, setFlagged] = useState<Record<number, boolean>>({})
  const [secondsRemaining, setSecondsRemaining] = useState(60 * 60)
  const [showTime, setShowTime] = useState(true)

  // 60-minute exam countdown
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

  const handleSelectAnswer = (qId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }))
  }

  const toggleFlag = (qId: number) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }))
  }

  const completeSection = () => {
    navigate(`/exam/writing/${attemptId || 'c18-test-1'}`)
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
            Academic Reading — Passage {currentPassage}
          </span>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={16} className={secondsRemaining < 600 ? 'text-red-600 animate-pulse' : 'text-stone-600'} />
            {showTime ? (
              <span className={`font-mono text-sm font-bold ${secondsRemaining < 600 ? 'text-red-600' : 'text-stone-800'}`}>
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
            End Reading &rarr;
          </button>
        </div>
      </header>

      {/* Main Split-Screen Examination Body */}
      <main className="flex-1 flex overflow-hidden p-4 gap-4">
        {/* Left Side: Passage Pane */}
        <div className="w-1/2 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto leading-relaxed">
          <div className="mb-4 pb-2 border-b border-stone-200">
            <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
              Reading Passage {currentPassage}
            </span>
            <h2 className="text-xl font-extrabold text-stone-900 mt-1">
              {SAMPLE_PASSAGE_1.title}
            </h2>
            <p className="text-xs text-stone-500 italic mt-1">
              You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage {currentPassage} below.
            </p>
          </div>

          <div className="space-y-4 text-stone-800 text-[14px]">
            {SAMPLE_PASSAGE_1.paragraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side: Questions Pane */}
        <div className="w-1/2 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto">
          <div className="mb-4 pb-2 border-b border-stone-200">
            <h3 className="font-bold text-base text-stone-900">
              Questions 1–5: TRUE / FALSE / NOT GIVEN
            </h3>
            <p className="text-xs text-stone-600 mt-1 bg-stone-50 p-2.5 rounded border border-stone-200">
              Do the following statements agree with the information given in Reading Passage 1?<br />
              <strong>TRUE</strong> if the statement agrees with the information<br />
              <strong>FALSE</strong> if the statement contradicts the information<br />
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-5">
            {SAMPLE_PASSAGE_1.questions.map((q) => {
              const isMarked = flagged[q.id]
              const currentVal = answers[q.id]

              return (
                <div
                  key={q.id}
                  onClick={() => setCurrentQuestion(q.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    currentQuestion === q.id
                      ? 'border-primary-500 bg-primary-50/20 ring-1 ring-primary-500'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-bold text-stone-800">Question {q.id}</span>
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

                  <p className="text-sm font-medium text-stone-800 mb-3">
                    {q.prompt}
                  </p>

                  {/* Radio buttons True/False/Not Given */}
                  <div className="grid grid-cols-3 gap-2">
                    {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(q.id, opt)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                          currentVal === opt
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Authentic CD-IELTS Bottom Question Navigator Bar */}
      <footer className="h-16 bg-white border-t border-stone-300 px-6 flex items-center justify-between shadow-md z-20">
        {/* Passage Tabs */}
        <div className="flex items-center gap-2">
          {([1, 2, 3] as const).map((pass) => (
            <button
              key={pass}
              onClick={() => {
                setCurrentPassage(pass)
                setCurrentQuestion((pass - 1) * 13 + 1)
              }}
              className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all ${
                currentPassage === pass
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Passage {pass}
            </button>
          ))}
        </div>

        {/* 1-40 Question Palettes */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 max-w-xl">
          {Array.from({ length: 13 }, (_, i) => (currentPassage - 1) * 13 + 1 + i).map((qNum) => {
            if (qNum > 40) return null
            const isAnswered = Boolean(answers[qNum])
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
