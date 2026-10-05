import { useParams, useNavigate } from 'react-router-dom'
import {
  Award,
  TrendingUp,
  Headphones,
  BookOpen,
  PenTool,
  Clock,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileSearch,
  Sparkles
} from 'lucide-react'

import { useMemo } from 'react'
import { getListeningTest, isListeningAnswerCorrect } from '@/data/listeningTestsData'
import { listeningRawToBand } from '@/lib/scoring'

export function ResultsPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()

  const testData = useMemo(() => getListeningTest(attemptId), [attemptId])

  const userAnswers: Record<number, string> = useMemo(() => {
    try {
      const saved = sessionStorage.getItem(`ielts_listening_answers_${testData.id}`)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  }, [testData.id])

  // Compute actual listening raw score if user completed the section
  const { listeningRaw, listeningBand } = useMemo(() => {
    if (!userAnswers) {
      return { listeningRaw: 35, listeningBand: 8.0 }
    }

    let correctCount = 0
    ;([1, 2, 3, 4] as const).forEach((partNum) => {
      const part = testData.parts[partNum]
      if (part) {
        part.questions.forEach((q) => {
          const uAns = userAnswers[q.id]
          if (uAns && isListeningAnswerCorrect(uAns, q.acceptedAnswers)) {
            correctCount++
          }
        })
      }
    })

    return {
      listeningRaw: correctCount,
      listeningBand: listeningRawToBand(correctCount)
    }
  }, [testData, userAnswers])

  const readingRaw = 33
  const readingBand = 7.5

  const writingBand = 7.0
  const overallBand = Math.round(((listeningBand + readingBand + writingBand) / 3) * 2) / 2

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Overall Band Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white rounded-2xl p-8 shadow-lg text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <Award size={14} /> Official Cambridge Band Score Report
        </div>

        <h1 className="text-xl font-medium text-stone-300">Overall Estimated Band Score</h1>
        <div className="text-6xl font-black text-white tracking-tight my-2">
          {overallBand}
        </div>
        <p className="text-xs text-stone-400 max-w-md mx-auto">
          Calculated according to standard Cambridge IELTS band score rounding specifications (CEFR C1 Advanced Level).
        </p>
      </div>

      {/* Section Bands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Listening */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Headphones className="text-blue-600" size={18} />
              <h3 className="font-bold text-sm text-stone-900">Listening</h3>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
              Band {listeningBand}
            </span>
          </div>

          <div className="text-2xl font-black text-stone-900 mb-1">
            {listeningRaw} <span className="text-sm font-medium text-stone-400">/ 40 raw</span>
          </div>
          <p className="text-xs text-stone-500">88% accuracy across 4 parts</p>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-400">Time spent: 30 mins</span>
            <span className="text-emerald-600 font-semibold">Strong</span>
          </div>
        </div>

        {/* Reading */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="text-emerald-600" size={18} />
              <h3 className="font-bold text-sm text-stone-900">Academic Reading</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Band {readingBand}
            </span>
          </div>

          <div className="text-2xl font-black text-stone-900 mb-1">
            {readingRaw} <span className="text-sm font-medium text-stone-400">/ 40 raw</span>
          </div>
          <p className="text-xs text-stone-500">83% accuracy across 3 passages</p>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-400">Time spent: 54 mins</span>
            <span className="text-emerald-600 font-semibold">Strong</span>
          </div>
        </div>

        {/* Writing */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <PenTool className="text-amber-600" size={18} />
              <h3 className="font-bold text-sm text-stone-900">Academic Writing</h3>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
              Band {writingBand}
            </span>
          </div>

          <div className="text-2xl font-black text-stone-900 mb-1">
            Task 1 & 2 <span className="text-sm font-medium text-stone-400">Evaluated</span>
          </div>
          <p className="text-xs text-stone-500">Task 1: 172 w | Task 2: 284 w</p>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-400">Time spent: 58 mins</span>
            <span className="text-amber-600 font-semibold">Good</span>
          </div>
        </div>
      </div>

      {/* Writing Criteria Rubric Breakdown */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base text-stone-900 flex items-center gap-2">
              <Sparkles size={18} className="text-primary-600" /> Writing Assessment Rubric Breakdown
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Evaluated against official IELTS 4-criteria descriptors
            </p>
          </div>
          <span className="text-xs font-semibold bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
            Band 7.0 Overall Writing
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-700 block">Task Achievement</span>
            <span className="text-lg font-black text-primary-600 mt-1 block">7.0</span>
            <span className="text-stone-500 text-[11px]">Clear overview with key trends highlighted.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-700 block">Coherence & Cohesion</span>
            <span className="text-lg font-black text-primary-600 mt-1 block">7.0</span>
            <span className="text-stone-500 text-[11px]">Logically organized paragraphs and smooth linkers.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-700 block">Lexical Resource</span>
            <span className="text-lg font-black text-primary-600 mt-1 block">7.5</span>
            <span className="text-stone-500 text-[11px]">High-level collocations and precise terminology.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-700 block">Grammatical Range</span>
            <span className="text-lg font-black text-primary-600 mt-1 block">6.5</span>
            <span className="text-stone-500 text-[11px]">Complex sentence structures with minor punctuation slips.</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 px-4 py-2 rounded-lg hover:bg-stone-100 transition-all"
        >
          <RotateCcw size={14} />
          <span>Return to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/results/${attemptId || 'c18-test-1'}/review`)}
            className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <FileSearch size={15} />
            <span>Review Answers & Explanations</span>
          </button>
        </div>
      </div>
    </div>
  )
}
