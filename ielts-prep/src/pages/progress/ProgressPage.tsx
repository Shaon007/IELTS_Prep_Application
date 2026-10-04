import { useState } from 'react'
import {
  TrendingUp,
  Target,
  Award,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  BarChart2,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ChevronRight
} from 'lucide-react'

interface QuestionTypeAccuracy {
  type: string
  section: 'listening' | 'reading'
  correct: number
  total: number
  accuracy: number
  status: 'strong' | 'moderate' | 'weak'
}

const QUESTION_TYPE_STATS: QuestionTypeAccuracy[] = [
  { type: 'Form completion', section: 'listening', correct: 38, total: 40, accuracy: 95, status: 'strong' },
  { type: 'Note completion', section: 'listening', correct: 35, total: 40, accuracy: 88, status: 'strong' },
  { type: 'Multiple choice', section: 'listening', correct: 22, total: 32, accuracy: 69, status: 'moderate' },
  { type: 'Map / Diagram labeling', section: 'listening', correct: 11, total: 20, accuracy: 55, status: 'weak' },
  { type: 'True / False / Not Given', section: 'reading', correct: 32, total: 40, accuracy: 80, status: 'strong' },
  { type: 'Summary completion', section: 'reading', correct: 28, total: 35, accuracy: 80, status: 'strong' },
  { type: 'Heading matching', section: 'reading', correct: 16, total: 28, accuracy: 57, status: 'weak' },
  { type: 'Information matching', section: 'reading', correct: 18, total: 28, accuracy: 64, status: 'moderate' },
]

export function ProgressPage() {
  const [filterSection, setFilterSection] = useState<'all' | 'listening' | 'reading'>('all')

  const targetBand = 7.5
  const currentBand = 7.0

  const filteredStats = QUESTION_TYPE_STATS.filter(
    (s) => filterSection === 'all' || s.section === filterSection
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Performance Analytics</h1>
          <p className="text-stone-500 text-sm mt-1">
            Data-driven breakdown of your official Cambridge test performance and question type mastery.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white border border-stone-200 px-4 py-2 rounded-xl shadow-sm flex items-center gap-3">
            <div>
              <div className="text-[10px] uppercase font-bold text-stone-400">Target Band</div>
              <div className="text-lg font-bold text-primary-600">{targetBand}</div>
            </div>
            <div className="h-8 w-px bg-stone-200" />
            <div>
              <div className="text-[10px] uppercase font-bold text-stone-400">Current Band</div>
              <div className="text-lg font-bold text-stone-900">{currentBand}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Band Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Listening</span>
            <span className="text-emerald-600 font-semibold flex items-center text-[11px]">
              <ArrowUpRight size={13} /> +0.5
            </span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mt-2">7.5</div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: '83%' }} />
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Raw avg: 33/40</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Reading</span>
            <span className="text-emerald-600 font-semibold flex items-center text-[11px]">
              <ArrowUpRight size={13} /> +0.5
            </span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mt-2">7.0</div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-600 h-full rounded-full" style={{ width: '77%' }} />
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Raw avg: 31/40</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Writing</span>
            <span className="text-stone-400 font-semibold text-[11px]">Stable</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mt-2">6.5</div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-amber-600 h-full rounded-full" style={{ width: '72%' }} />
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Criteria: CC/LR/GRA/TA</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Overall Score</span>
            <span className="text-primary-600 font-semibold text-[11px]">Target: 7.5</span>
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mt-2">7.0</div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-stone-900 h-full rounded-full" style={{ width: '77%' }} />
          </div>
          <span className="text-[11px] text-stone-400 mt-1 block">Rounded to nearest 0.5</span>
        </div>
      </div>

      {/* Weak Areas Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
        <div>
          <h3 className="font-semibold text-amber-900 text-sm">Priority Focus Recommended</h3>
          <p className="text-xs text-amber-700 mt-1 leading-relaxed">
            Your lowest accuracy areas are <strong>Map / Diagram Labeling (55%)</strong> in Listening and <strong>Heading Matching (57%)</strong> in Reading. Focusing on topic sentence scanning and spatial prepositions will yield the fastest band jump.
          </p>
        </div>
      </div>

      {/* Question Type Diagnostic */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-stone-900 text-base">Question Type Accuracy Matrix</h3>
            <p className="text-xs text-stone-500">Based on evaluated answers across Cambridge 15–18 tests</p>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setFilterSection('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filterSection === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterSection('listening')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filterSection === 'listening' ? 'bg-blue-600 text-white' : 'bg-stone-100 text-stone-600'}`}
            >
              Listening
            </button>
            <button
              onClick={() => setFilterSection('reading')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold ${filterSection === 'reading' ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600'}`}
            >
              Reading
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredStats.map((item, idx) => (
            <div key={idx} className="p-3 rounded-lg border border-stone-100 hover:border-stone-200 bg-stone-50/50 flex items-center justify-between">
              <div className="w-1/3">
                <span className="font-semibold text-sm text-stone-800">{item.type}</span>
                <span className="block text-[11px] text-stone-400 capitalize">{item.section}</span>
              </div>

              <div className="w-1/3 px-4">
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-stone-500">{item.correct}/{item.total} correct</span>
                  <span className="font-bold text-stone-900">{item.accuracy}%</span>
                </div>
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.accuracy >= 75
                        ? 'bg-emerald-500'
                        : item.accuracy >= 65
                        ? 'bg-amber-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>
              </div>

              <div className="w-1/4 text-right">
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'strong'
                      ? 'bg-emerald-100 text-emerald-800'
                      : item.status === 'moderate'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.status === 'strong' ? 'Mastered' : item.status === 'moderate' ? 'Moderate' : 'Needs Work'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
