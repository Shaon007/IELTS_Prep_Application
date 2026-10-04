import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
  CheckCircle2,
  ChevronRight,
  Filter,
  Play,
  Layers,
  Sparkles,
  Award
} from 'lucide-react'
import type { SectionType, PracticeMode } from '@/types'

interface PracticeItem {
  id: string
  bookTitle: string
  seriesNumber: number
  testNumber: number
  sectionType: SectionType
  partOrPassage: string
  title: string
  questionCount: number
  questionTypes: string[]
  durationMinutes: number
  difficulty: 'Standard' | 'Challenging' | 'Advanced'
  isVerified: boolean
}

const SAMPLE_PRACTICE_ITEMS: PracticeItem[] = [
  // Listening
  {
    id: 'c15-t1-l',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4 (Full Section)',
    title: 'Bankside Recruitment & Festival Volunteering',
    questionCount: 40,
    questionTypes: ['Form completion', 'Multiple choice', 'Matching', 'Note completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c15-t2-l',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 2,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4 (Full Section)',
    title: 'Festival Information & Agriculture Research',
    questionCount: 40,
    questionTypes: ['Table completion', 'Map labeling', 'Multiple choice', 'Summary'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c16-t1-l',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4 (Full Section)',
    title: 'Holiday Rental & Museum Artifacts',
    questionCount: 40,
    questionTypes: ['Note completion', 'Multiple choice', 'Matching', 'Sentence completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c17-t1-l',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4 (Full Section)',
    title: 'Buckworth Conservation & Space Exploration',
    questionCount: 40,
    questionTypes: ['Form completion', 'Matching', 'Diagram labeling', 'Note completion'],
    durationMinutes: 30,
    difficulty: 'Challenging',
    isVerified: true
  },
  {
    id: 'c18-t1-l',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4 (Full Section)',
    title: 'Transport Survey & Marine Biology Project',
    questionCount: 40,
    questionTypes: ['Short answer', 'Multiple choice', 'Matching', 'Summary completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true
  },

  // Reading
  {
    id: 'c15-t1-r',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Nutmeg: A Valuable Spice & Driverless Cars',
    questionCount: 40,
    questionTypes: ['True/False/Not Given', 'Heading matching', 'Summary completion', 'Sentence completion'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c16-t1-r',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Why Dogs Turn in Circles & Roman Shipbuilding',
    questionCount: 40,
    questionTypes: ['Yes/No/Not Given', 'Multiple choice', 'Information matching', 'Table completion'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true
  },
  {
    id: 'c17-t1-r',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'The Development of the London Underground Railway',
    questionCount: 40,
    questionTypes: ['Heading matching', 'Sentence completion', 'Multiple choice', 'Classification'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true
  },
  {
    id: 'c18-t1-r',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Urban Farming & The Cognitive Benefits of Nature',
    questionCount: 40,
    questionTypes: ['True/False/Not Given', 'Summary completion', 'Matching features', 'Multiple choice'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true
  },

  // Writing
  {
    id: 'c15-t1-w',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Coffee Production Chart & Telecommuting Essay',
    questionCount: 2,
    questionTypes: ['Bar chart / Line graph', 'Opinion & Discussion essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c16-t1-w',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Manufacturing Process & University Tuition Arguments',
    questionCount: 2,
    questionTypes: ['Process diagram', 'Problem / Solution essay'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true
  },
  {
    id: 'c17-t1-w',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Renewable Energy Comparison & History in Education',
    questionCount: 2,
    questionTypes: ['Pie charts & Tables', 'Direct questions essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true
  },
  {
    id: 'c18-t1-w',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'City Population Shift & AI Workplace Impact',
    questionCount: 2,
    questionTypes: ['Comparative map', 'Two-sided discussion essay'],
    durationMinutes: 60,
    difficulty: 'Advanced',
    isVerified: true
  }
]

export function PracticePage() {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState<SectionType | 'all'>('all')
  const [selectedBook, setSelectedBook] = useState<number | 'all'>('all')
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('timed_practice')

  const filteredItems = SAMPLE_PRACTICE_ITEMS.filter((item) => {
    if (selectedSection !== 'all' && item.sectionType !== selectedSection) return false
    if (selectedBook !== 'all' && item.seriesNumber !== selectedBook) return false
    return true
  })

  const getSectionIcon = (type: SectionType) => {
    switch (type) {
      case 'listening':
        return <Headphones size={18} className="text-blue-500" />
      case 'reading':
        return <BookOpen size={18} className="text-emerald-500" />
      case 'writing':
        return <PenTool size={18} className="text-amber-500" />
      case 'speaking':
        return <Mic size={18} className="text-purple-500" />
    }
  }

  const startPractice = (item: PracticeItem) => {
    // Navigate directly into exam or test launcher
    if (item.sectionType === 'listening') {
      navigate(`/exam/listening/${item.id}?mode=${practiceMode}`)
    } else if (item.sectionType === 'reading') {
      navigate(`/exam/reading/${item.id}?mode=${practiceMode}`)
    } else if (item.sectionType === 'writing') {
      navigate(`/exam/writing/${item.id}?mode=${practiceMode}`)
    } else {
      navigate(`/exam/start/${item.id}`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Practice by Section</h1>
          <p className="text-stone-500 text-sm mt-1">
            Target specific skills with official Cambridge IELTS 10–18 test sections and authentic audio.
          </p>
        </div>

        {/* Practice Mode Toggle */}
        <div className="inline-flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200">
          <button
            onClick={() => setPracticeMode('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              practiceMode === 'practice'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Untimed Practice
          </button>
          <button
            onClick={() => setPracticeMode('timed_practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              practiceMode === 'timed_practice'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Timed Simulation
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* Section Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSection === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
            }`}
          >
            All Sections ({SAMPLE_PRACTICE_ITEMS.length})
          </button>
          <button
            onClick={() => setSelectedSection('listening')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSection === 'listening'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            <Headphones size={14} /> Listening
          </button>
          <button
            onClick={() => setSelectedSection('reading')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSection === 'reading'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <BookOpen size={14} /> Reading
          </button>
          <button
            onClick={() => setSelectedSection('writing')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSection === 'writing'
                ? 'bg-amber-600 text-white'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            <PenTool size={14} /> Writing
          </button>
        </div>

        {/* Book series selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
            <Filter size={13} /> Book:
          </span>
          <select
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="all">All Cambridge Books (10–18)</option>
            <option value="18">Cambridge 18</option>
            <option value="17">Cambridge 17</option>
            <option value="16">Cambridge 16</option>
            <option value="15">Cambridge 15</option>
          </select>
        </div>
      </div>

      {/* Practice list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-stone-200 hover:border-stone-300 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                    {getSectionIcon(item.sectionType)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                      {item.bookTitle} · Test {item.testNumber}
                    </span>
                    <h3 className="font-semibold text-stone-900 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified
                </span>
              </div>

              {/* Tags & Question types */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.questionTypes.map((qType, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md"
                  >
                    {qType}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer metrics & action */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {item.durationMinutes} mins
                </span>
                <span className="flex items-center gap-1">
                  <Layers size={13} /> {item.questionCount} {item.sectionType === 'writing' ? 'tasks' : 'questions'}
                </span>
              </div>

              <button
                onClick={() => startPractice(item)}
                className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-1.5 rounded-lg font-medium transition-all group-hover:bg-primary-600"
              >
                <span>Start</span>
                <Play size={12} fill="currentColor" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
