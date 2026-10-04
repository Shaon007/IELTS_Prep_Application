import { useState } from 'react'
import {
  BookOpen,
  Search,
  Sparkles,
  Volume2,
  Check,
  Bookmark,
  RefreshCw,
  Award,
  Layers,
  HelpCircle
} from 'lucide-react'

interface VocabItem {
  id: string
  word: string
  phonetic: string
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'collocation'
  definition: string
  ieltsExample: string
  collocations: string[]
  bandTarget: 'Band 7+' | 'Band 8+'
  topic: 'Environment' | 'Education' | 'Technology' | 'Society' | 'Listening Part 1'
}

const IELTS_VOCAB_DB: VocabItem[] = [
  {
    id: 'v1',
    word: 'Exacerbate',
    phonetic: '/ɪɡˈzæs.ə.beɪt/',
    pos: 'verb',
    definition: 'To make a problem, bad situation, or negative feeling worse.',
    ieltsExample: 'Uncontrolled urban expansion will only exacerbate existing traffic congestion and air pollution in metropolitan zones.',
    collocations: ['exacerbate the problem', 'exacerbate tensions', 'sharply exacerbate'],
    bandTarget: 'Band 8+',
    topic: 'Environment'
  },
  {
    id: 'v2',
    word: 'Detrimental',
    phonetic: '/ˌdet.rɪˈmen.təl/',
    pos: 'adjective',
    definition: 'Causing damage or harm; having harmful repercussions.',
    ieltsExample: 'Excessive reliance on automated digital devices can exert a detrimental impact on cognitive retention and problem-solving skills.',
    collocations: ['detrimental effect', 'detrimental impact', 'highly detrimental'],
    bandTarget: 'Band 7+',
    topic: 'Technology'
  },
  {
    id: 'v3',
    word: 'Ubiquitous',
    phonetic: '/juːˈbɪk.wɪ.təs/',
    pos: 'adjective',
    definition: 'Present, appearing, or found everywhere simultaneously.',
    ieltsExample: 'Smartphones have become ubiquitous across all demographics, revolutionizing interpersonal communications.',
    collocations: ['ubiquitous presence', 'become ubiquitous', 'almost ubiquitous'],
    bandTarget: 'Band 8+',
    topic: 'Technology'
  },
  {
    id: 'v4',
    word: 'Subsidize',
    phonetic: '/ˈsʌb.sɪ.daɪz/',
    pos: 'verb',
    definition: 'To pay part of the cost of something, usually through public government funds.',
    ieltsExample: 'Governments should heavily subsidize renewable energy infrastructures to accelerate the transition away from fossil fuels.',
    collocations: ['heavily subsidize', 'state-subsidized', 'subsidize public transport'],
    bandTarget: 'Band 7+',
    topic: 'Society'
  },
  {
    id: 'v5',
    word: 'Accommodation',
    phonetic: '/əˌkɒm.əˈdeɪ.ʃən/',
    pos: 'noun',
    definition: 'A room or building in which someone may live or stay (frequently misspelled in Listening Part 1).',
    ieltsExample: 'The applicant is seeking temporary university accommodation close to the central library campus.',
    collocations: ['student accommodation', 'rented accommodation', 'book accommodation'],
    bandTarget: 'Band 7+',
    topic: 'Listening Part 1'
  },
  {
    id: 'v6',
    word: 'Proliferation',
    phonetic: '/prəˌlɪf.əˈreɪ.ʃən/',
    pos: 'noun',
    definition: 'Rapid increase in the number or amount of something.',
    ieltsExample: 'The proliferation of online learning platforms has democratized access to tertiary education worldwide.',
    collocations: ['rapid proliferation', 'nuclear proliferation', 'proliferation of digital tools'],
    bandTarget: 'Band 8+',
    topic: 'Education'
  },
  {
    id: 'v7',
    word: 'Mitigate',
    phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
    pos: 'verb',
    definition: 'To make something less harmful, severe, or painful.',
    ieltsExample: 'Strict environmental legislation can mitigate the devastating effects of industrial effluents on aquatic ecosystems.',
    collocations: ['mitigate risks', 'mitigate climate change', 'help mitigate the impact'],
    bandTarget: 'Band 8+',
    topic: 'Environment'
  }
]

export function VocabularyPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [flashcardMode, setFlashcardMode] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const topics = ['All', 'Environment', 'Education', 'Technology', 'Society', 'Listening Part 1']

  const filteredWords = IELTS_VOCAB_DB.filter((item) => {
    if (selectedTopic !== 'All' && item.topic !== selectedTopic) return false
    if (searchQuery && !item.word.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const currentCard = filteredWords[activeCardIndex] || filteredWords[0]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">IELTS Academic Vocabulary & Collocations</h1>
          <p className="text-stone-500 text-sm mt-1">
            Targeted vocabulary extracted from Cambridge IELTS test passages, 1200 common words, and band 8+ descriptors.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFlashcardMode(!flashcardMode)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all ${
              flashcardMode
                ? 'bg-primary-600 text-white'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Sparkles size={14} /> {flashcardMode ? 'View Word List' : 'Interactive Flashcards'}
          </button>
        </div>
      </div>

      {/* Flashcard Mode */}
      {flashcardMode && currentCard && (
        <div className="max-w-xl mx-auto py-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[300px] bg-white border border-stone-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all flex flex-col justify-between text-center relative"
          >
            <div className="flex justify-between items-center text-xs text-stone-400">
              <span className="font-semibold text-primary-600 uppercase">{currentCard.topic}</span>
              <span>Card {activeCardIndex + 1} of {filteredWords.length} (Click to flip)</span>
            </div>

            {!isFlipped ? (
              <div className="my-auto">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 mb-3 inline-block">
                  {currentCard.pos}
                </span>
                <h2 className="text-4xl font-extrabold text-stone-900 tracking-tight">{currentCard.word}</h2>
                <p className="text-stone-400 font-mono text-sm mt-2">{currentCard.phonetic}</p>
                <div className="mt-4 text-xs font-semibold text-primary-600 bg-primary-50 inline-block px-3 py-1 rounded-full">
                  {currentCard.bandTarget}
                </div>
              </div>
            ) : (
              <div className="my-auto space-y-4 text-left">
                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">Definition</h4>
                  <p className="text-stone-800 text-base font-medium mt-1">{currentCard.definition}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">IELTS Context</h4>
                  <p className="text-stone-600 text-sm italic mt-1 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    "{currentCard.ieltsExample}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-stone-400">High-Scoring Collocations</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {currentCard.collocations.map((col, idx) => (
                      <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded font-medium">
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="text-[11px] text-stone-400 mt-4">
              Tap anywhere to flip card
            </div>
          </div>

          {/* Flashcard navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => {
                setIsFlipped(false)
                setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : filteredWords.length - 1))
              }}
              className="bg-white border border-stone-200 px-4 py-2 rounded-xl text-xs font-semibold text-stone-700 shadow-sm hover:bg-stone-50"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setIsFlipped(false)
                setActiveCardIndex((prev) => (prev < filteredWords.length - 1 ? prev + 1 : 0))
              }}
              className="bg-primary-600 text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-sm hover:bg-primary-700"
            >
              Next Word &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Word List Mode */}
      {!flashcardMode && (
        <>
          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedTopic === t
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search words, collocations..."
                className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWords.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg text-stone-900">{item.word}</h3>
                      <span className="text-xs text-stone-400 font-mono">{item.phonetic}</span>
                      <span className="text-[11px] font-medium bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                        {item.pos}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary-600">{item.topic}</span>
                  </div>
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-primary-50 text-primary-700 border border-primary-200">
                    {item.bandTarget}
                  </span>
                </div>

                <p className="text-stone-700 text-sm mt-3 font-medium">
                  {item.definition}
                </p>

                <div className="mt-3 bg-stone-50 p-3 rounded-lg border border-stone-100 text-xs text-stone-600 italic">
                  "{item.ieltsExample}"
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                    Collocations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.collocations.map((col, idx) => (
                      <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
