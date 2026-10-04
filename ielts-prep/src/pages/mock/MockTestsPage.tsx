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
  ArrowRight,
  Filter,
  Search,
  Dices
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
  difficulty: 'Standard' | 'Challenging' | 'Advanced'
}

// Generate all 36 authentic Cambridge IELTS tests across Books 10 through 18
const ALL_CAMBRIDGE_MOCKS: MockTestCard[] = [
  // Cambridge 18 (Latest)
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
    difficulty: 'Advanced'
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
    difficulty: 'Standard'
  },
  {
    id: 'c18-test-3',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c18-test-4',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Advanced'
  },

  // Cambridge 17
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
    difficulty: 'Challenging'
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
    difficulty: 'Standard'
  },
  {
    id: 'c17-test-3',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c17-test-4',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 16
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
    difficulty: 'Standard'
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
    difficulty: 'Challenging'
  },
  {
    id: 'c16-test-3',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c16-test-4',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Advanced'
  },

  // Cambridge 15
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
    difficulty: 'Standard'
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
    difficulty: 'Standard'
  },
  {
    id: 'c15-test-3',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c15-test-4',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 14
  {
    id: 'c14-test-1',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c14-test-2',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c14-test-3',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c14-test-4',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 13
  {
    id: 'c13-test-1',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c13-test-2',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c13-test-3',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c13-test-4',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 12
  {
    id: 'c12-test-1',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c12-test-2',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c12-test-3',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c12-test-4',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 11
  {
    id: 'c11-test-1',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c11-test-2',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c11-test-3',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Challenging'
  },
  {
    id: 'c11-test-4',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },

  // Cambridge 10
  {
    id: 'c10-test-1',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 1,
    title: 'Full Practice Test 1',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c10-test-2',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 2,
    title: 'Full Practice Test 2',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c10-test-3',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 3,
    title: 'Full Practice Test 3',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  },
  {
    id: 'c10-test-4',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 4,
    title: 'Full Practice Test 4',
    status: 'ready',
    audioAttached: true,
    readingPassages: 3,
    writingTasks: 2,
    difficulty: 'Standard'
  }
]

export function MockTestsPage() {
  const navigate = useNavigate()
  const [selectedBook, setSelectedBook] = useState<number | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'ready' | 'completed'>('all')

  const filteredTests = ALL_CAMBRIDGE_MOCKS.filter((test) => {
    if (selectedBook !== 'all' && test.seriesNumber !== selectedBook) return false
    if (filterStatus === 'ready' && test.status !== 'ready') return false
    if (filterStatus === 'completed' && test.status !== 'completed') return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return test.bookTitle.toLowerCase().includes(q) || test.title.toLowerCase().includes(q)
    }
    return true
  })

  // Quick Random Mock Selector
  const launchRandomMock = () => {
    const randomIndex = Math.floor(Math.random() * ALL_CAMBRIDGE_MOCKS.length)
    const randomTest = ALL_CAMBRIDGE_MOCKS[randomIndex]
    navigate(`/exam/start/${randomTest.id}`)
  }

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
            <Sparkles size={13} /> Complete Cambridge Collection: Books 10 to 18
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Full-Length Official Mock Examinations</h1>
          <p className="text-stone-300 text-sm mt-1 leading-relaxed">
            All <strong>36 authentic Cambridge practice tests</strong> with verified audio recordings, 108 reading passages, and 72 writing prompts under genuine CD-IELTS computer conditions.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={launchRandomMock}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-all cursor-pointer"
            >
              <Dices size={15} />
              <span>Surprise Me: Launch Random Mock Test</span>
            </button>
            <span className="text-xs text-stone-400">
              Total Tests: <strong>36</strong> · Audio Tracks: <strong>36</strong>
            </span>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary-600/10 to-transparent pointer-events-none" />
      </div>

      {/* Filter and stats */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Book Filter Dropdown */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
              <Filter size={13} /> Book Series:
            </span>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="all">All Cambridge Series (10–18) · 36 Tests</option>
              <option value="18">Cambridge IELTS 18 (4 Tests)</option>
              <option value="17">Cambridge IELTS 17 (4 Tests)</option>
              <option value="16">Cambridge IELTS 16 (4 Tests)</option>
              <option value="15">Cambridge IELTS 15 (4 Tests)</option>
              <option value="14">Cambridge IELTS 14 (4 Tests)</option>
              <option value="13">Cambridge IELTS 13 (4 Tests)</option>
              <option value="12">Cambridge IELTS 12 (4 Tests)</option>
              <option value="11">Cambridge IELTS 11 (4 Tests)</option>
              <option value="10">Cambridge IELTS 10 (4 Tests)</option>
            </select>

            {/* Status Pills */}
            <div className="flex items-center gap-1 ml-2">
              {(['all', 'ready', 'completed'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                    filterStatus === st
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {st === 'all' ? 'All' : st === 'ready' ? 'Unattempted' : 'Completed'}
                </button>
              ))}
            </div>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search test number, book..."
              className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Tests Grid (36 tests) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="bg-white border border-stone-200 hover:border-stone-300 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-[11px] font-bold text-primary-700 tracking-wide uppercase">
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
                    Ready
                  </span>
                )}
              </div>

              {/* Sections breakdown */}
              <div className="grid grid-cols-3 gap-1.5 my-3">
                <div className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <Headphones size={15} className="mx-auto text-blue-500 mb-0.5" />
                  <div className="text-[10px] font-semibold text-stone-700">Listening</div>
                  <div className="text-[9px] text-stone-400">40 Qs · 30m</div>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <BookOpen size={15} className="mx-auto text-emerald-500 mb-0.5" />
                  <div className="text-[10px] font-semibold text-stone-700">Reading</div>
                  <div className="text-[9px] text-stone-400">40 Qs · 60m</div>
                </div>
                <div className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <PenTool size={15} className="mx-auto text-amber-500 mb-0.5" />
                  <div className="text-[10px] font-semibold text-stone-700">Writing</div>
                  <div className="text-[9px] text-stone-400">2 Tasks · 60m</div>
                </div>
              </div>

              {/* Previous score history if completed */}
              {test.lastScore && (
                <div className="bg-stone-50 rounded-lg p-2 border border-stone-200 text-xs text-stone-600 mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1 font-medium text-[11px]">
                    <History size={12} /> {test.lastScore.date}
                  </span>
                  <div className="flex items-center gap-1.5 font-bold text-[11px]">
                    <span>L:{test.lastScore.listening}</span>
                    <span>·</span>
                    <span>R:{test.lastScore.reading}</span>
                    <span>·</span>
                    <span>W:{test.lastScore.writing}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Launch CTA */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <CheckCircle2 size={13} className="text-emerald-500" /> Audio Linked
              </span>
              <button
                onClick={() => navigate(`/exam/start/${test.id}`)}
                className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all"
              >
                <span>{test.status === 'completed' ? 'Retake Exam' : 'Launch Mock'}</span>
                <Play size={11} fill="currentColor" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
