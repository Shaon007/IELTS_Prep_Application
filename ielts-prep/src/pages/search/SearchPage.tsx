import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  BookOpen,
  Headphones,
  PenTool,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react'

interface SearchResultItem {
  id: string
  title: string
  category: 'Test' | 'Passage' | 'Question Type' | 'Vocabulary'
  snippet: string
  source: string
  url: string
}

const SEARCH_DATABASE: SearchResultItem[] = [
  {
    id: 's1',
    title: 'Nutmeg: A Valuable Spice',
    category: 'Passage',
    snippet: 'The nutmeg tree, Myristica fragrans, is a large evergreen tree native to Southeast Asia...',
    source: 'Cambridge IELTS 15 · Reading Test 1 · Passage 1',
    url: '/practice'
  },
  {
    id: 's2',
    title: 'Driverless Cars & Urban Mobility',
    category: 'Passage',
    snippet: 'Autonomous vehicles promise to reshape transport planning and significantly curtail emissions...',
    source: 'Cambridge IELTS 15 · Reading Test 1 · Passage 2',
    url: '/practice'
  },
  {
    id: 's3',
    title: 'Bankside Recruitment & Festival Volunteering',
    category: 'Test',
    snippet: 'Listening Section 1: Customer enquiry form, spelling names, telephone numbers, and addresses...',
    source: 'Cambridge IELTS 15 · Listening Test 1',
    url: '/practice'
  },
  {
    id: 's4',
    title: 'Heading Matching Strategy & Trap Avoidance',
    category: 'Question Type',
    snippet: 'Learn how to skim topic sentences and recognize distractor headings before reading detail paragraphs...',
    source: 'Official Cambridge Reading Strategies',
    url: '/progress'
  },
  {
    id: 's5',
    title: 'Detrimental / Exacerbate / Proliferation',
    category: 'Vocabulary',
    snippet: 'High-frequency academic collocations for environmental and sociological writing tasks...',
    source: '1200 Repeated Words & Academic Word List',
    url: '/vocabulary'
  },
  {
    id: 's6',
    title: 'The Development of the London Underground Railway',
    category: 'Passage',
    snippet: 'In the first half of the nineteenth century, London’s population grew at an astonishing rate...',
    source: 'Cambridge IELTS 17 · Reading Test 1 · Passage 1',
    url: '/practice'
  },
  {
    id: 's7',
    title: 'Marine Biology & Coral Bleaching',
    category: 'Test',
    snippet: 'Listening Section 4: Academic lecture on environmental degradation in shallow reef habitats...',
    source: 'Cambridge IELTS 18 · Listening Test 1 · Part 4',
    url: '/practice'
  }
]

export function SearchPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'All' | 'Test' | 'Passage' | 'Question Type' | 'Vocabulary'>('All')

  const filteredResults = SEARCH_DATABASE.filter((item) => {
    if (category !== 'All' && item.category !== category) return false
    if (!query) return true
    const q = query.toLowerCase()
    return item.title.toLowerCase().includes(q) || item.snippet.toLowerCase().includes(q) || item.source.toLowerCase().includes(q)
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Search Knowledge Base & Tests</h1>
        <p className="text-stone-500 text-sm mt-1">
          Instant search across Cambridge 10–18 tests, passages, audio transcripts, question types, and vocabulary.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-3">
        <div className="relative">
          <Search size={18} className="absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search test names, passages, vocabulary, topics (e.g. 'Nutmeg', 'Underground', 'Collocations')..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-xs text-stone-400 mr-1 flex items-center gap-1">
            <Filter size={12} /> Filter:
          </span>
          {(['All', 'Test', 'Passage', 'Question Type', 'Vocabulary'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                category === cat
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-stone-400">
          Showing {filteredResults.length} matching results
        </div>

        {filteredResults.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.url)}
            className="cursor-pointer bg-white border border-stone-200 hover:border-primary-300 rounded-xl p-4 shadow-sm hover:shadow transition-all group flex items-start justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-xs text-stone-400">
                  {item.source}
                </span>
              </div>

              <h3 className="font-bold text-base text-stone-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {item.snippet}
              </p>
            </div>

            <div className="p-2 rounded-lg bg-stone-50 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
