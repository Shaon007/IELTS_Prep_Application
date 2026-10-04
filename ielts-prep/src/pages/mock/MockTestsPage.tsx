import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Play,
  Award,
  Headphones,
  BookOpen,
  PenTool,
  History,
  Sparkles,
  ArrowRight
} from 'lucide-react'

interface MockTestCard {
  id: string
  bookTitle: string
  seriesNumber: number
  testNumber: number
  title: string
  status: 'ready' | 'completed' | 'in_progress'
  lastScore?: {
    overall: number
    listening: number
    reading: number
    writing: number
    date: string
  }
  audioAttached: boolean
  readingPassages: number
  writingTasks: number
}

const CAMBRIDGE_MOCKS: MockTestCard[] = [
  {
    id: 'c18-test-1',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c18-test-2',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c17-test-1',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'completed',
    lastScore: {
      overall: 7.5,
      listening: 8.0,
      reading: 7.5,
      writing: 7.0,
      date: '2026-09-28'
    },
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c17-test-2',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c16-test-1',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'completed',
    lastScore: {
      overall: 7.0,
      listening: 7.5,
      reading: 7.0,
      writing: 6.5,
      date: '2026-09-20'
    },
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c16-test-2',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c15-test-1',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  },
  {
    id: 'c15-test-2',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
  }
]

export function MockTestsPage() {
  const navigate = useNavigate()
  const [selectedBook, setSelectedBook] = useState<number | 'all'>('all')

  const filteredTests = CAMBRIDGE_MOCKS.filter((test) => {
    if (selectedBook !== 'all' && test.seriesNumber !== selectedBook) return false
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
            <Sparkles size={13} /> Strict CD-IELTS Exam Conditions
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Full-Length Mock Examinations</h1>
          <p className="text-stone-300 text-sm mt-1 leading-relaxed">
            Experience the exact computer-delivered IELTS testing interface with strict time limits: Listening (30 min), Reading (60 min), and Writing (60 min) with instant band score computation.
          </p>
        </div>

        {/* Ambient accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary-600/10 to-transparent pointer-events-none" />
      </div>

      {/* Filter and stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-stone-500">Filter Book:</span>
          <select
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs font-medium bg-white border border-stone-200 rounded-lg px-3 py-1.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">All Cambridge Series (15–18)</option>
            <option value="18">Cambridge IELTS 18</option>
            <option value="17">Cambridge IELTS 17</option>
            <option value="16">Cambridge IELTS 16</option>
            <option value="15">Cambridge IELTS 15</option>
          </select>
        </div>

        <div className="flex items-center gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 size={14} className="text-emerald-500" /> Authentic Cambridge Audio Attached
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Clock size={14} className="text-stone-400" /> ~2 Hours 30 Mins Total
          </span>
        </div>
      </div>

      {/* Test Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="bg-white border border-stone-200 hover:border-stone-300 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-xs font-bold text-primary-700 tracking-wide uppercase">
                    {test.bookTitle}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5 group-hover:text-primary-600 transition-colors">
                    {test.title}
                  </h3>
                </div>
                {test.status === 'completed' ? (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
                    Band {test.lastScore?.overall}
                  </span>
                ) : (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-stone-100 text-stone-600">
                    Not Attempted
                  </span>
                )}
              </div>

              {/* Sections summary */}
              <div className="grid grid-cols-3 gap-2 my-4">
                <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-center">
                  <Headphones size={16} className="mx-auto text-blue-500 mb-1" />
                  <div className="text-[11px] font-semibold text-stone-700">Listening</div>
                  <div className="text-[10px] text-stone-400">40 Qs · 30m</div>
                </div>
                <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-center">
                  <BookOpen size={16} className="mx-auto text-emerald-500 mb-1" />
                  <div className="text-[11px] font-semibold text-stone-700">Reading</div>
                  <div className="text-[10px] text-stone-400">40 Qs · 60m</div>
                </div>
                <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 text-center">
                  <PenTool size={16} className="mx-auto text-amber-500 mb-1" />
                  <div className="text-[11px] font-semibold text-stone-700">Writing</div>
                  <div className="text-[10px] text-stone-400">2 Tasks · 60m</div>
                </div>
              </div>

              {/* Previous score history if completed */}
              {test.lastScore && (
                <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200 text-xs text-stone-600 mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 font-medium">
                    <History size={13} /> Completed {test.lastScore.date}
                  </span>
                  <div className="flex items-center gap-2 font-semibold">
                    <span>L: {test.lastScore.listening}</span>
                    <span>·</span>
                    <span>R: {test.lastScore.reading}</span>
                    <span>·</span>
                    <span>W: {test.lastScore.writing}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Launch CTA */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <CheckCircle2 size={13} className="text-emerald-500" /> Full Exam Flow
              </span>
              <button
                onClick={() => navigate(`/exam/start/${test.id}`)}
                className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <span>{test.status === 'completed' ? 'Retake Exam' : 'Launch Mock'}</span>
                <Play size={12} fill="currentColor" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
