import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
  CheckCircle2,
  Filter,
  Play,
  Layers,
  Sparkles,
  Dices,
  RotateCw,
  Search,
  X,
  Target
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
  topic?: string
}

const EXTENSIVE_PRACTICE_BANK: PracticeItem[] = [
  // --- LISTENING PRACTICES (Cambridge 10 to 18) ---
  {
    id: 'c18-t1-l',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Transport Survey & Marine Biology Project',
    questionCount: 40,
    questionTypes: ['Short answer', 'Multiple choice', 'Matching', 'Summary completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Environment & Transport'
  },
  {
    id: 'c18-t2-l',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 2,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Community Centre Activities & Solar Energy Innovations',
    questionCount: 40,
    questionTypes: ['Form completion', 'Map labeling', 'Sentence completion', 'Multiple choice'],
    durationMinutes: 30,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Community & Technology'
  },
  {
    id: 'c17-t1-l',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Buckworth Conservation & Space Exploration History',
    questionCount: 40,
    questionTypes: ['Form completion', 'Matching', 'Diagram labeling', 'Note completion'],
    durationMinutes: 30,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Conservation & Astronomy'
  },
  {
    id: 'c17-t2-l',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 2,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Boat Hire Reservation & Urban Architecture Evolution',
    questionCount: 40,
    questionTypes: ['Table completion', 'Multiple choice', 'Flowchart', 'Short answer'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Travel & Urban Planning'
  },
  {
    id: 'c16-t1-l',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Holiday Rental Property & Museum Artifact Discovery',
    questionCount: 40,
    questionTypes: ['Note completion', 'Multiple choice', 'Matching', 'Sentence completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'History & Tourism'
  },
  {
    id: 'c16-t2-l',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 2,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Theatre Volunteer Recruitment & Animal Behavior in Cities',
    questionCount: 40,
    questionTypes: ['Form completion', 'Map labeling', 'Summary completion'],
    durationMinutes: 30,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Arts & Zoology'
  },
  {
    id: 'c15-t1-l',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Bankside Recruitment & Festival Volunteering Experience',
    questionCount: 40,
    questionTypes: ['Form completion', 'Multiple choice', 'Matching', 'Note completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Employment & Festivals'
  },
  {
    id: 'c15-t2-l',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 2,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Festival Information Desk & Agricultural Drone Research',
    questionCount: 40,
    questionTypes: ['Table completion', 'Map labeling', 'Multiple choice', 'Summary'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Agriculture & Technology'
  },
  {
    id: 'c14-t1-l',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Crime Report at Police Station & Ocean Plastics Ecology',
    questionCount: 40,
    questionTypes: ['Form completion', 'Multiple choice', 'Note completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Law & Marine Ecology'
  },
  {
    id: 'c13-t1-l',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Cooking Classes Enquiry & History of Coffee Trade',
    questionCount: 40,
    questionTypes: ['Note completion', 'Multiple choice', 'Matching'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Food & History'
  },
  {
    id: 'c12-t1-l',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Family Excursions & Geothermal Energy in New Zealand',
    questionCount: 40,
    questionTypes: ['Table completion', 'Multiple choice', 'Sentence completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Renewable Energy'
  },
  {
    id: 'c11-t1-l',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Joining a Sports Club & Bird Migration Tracking',
    questionCount: 40,
    questionTypes: ['Form completion', 'Multiple choice', 'Flowchart'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Sports & Biology'
  },
  {
    id: 'c10-t1-l',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 1,
    sectionType: 'listening',
    partOrPassage: 'Parts 1–4',
    title: 'Self-Drive Tour in USA & Global Seed Vault in Svalbard',
    questionCount: 40,
    questionTypes: ['Form completion', 'Note completion', 'Summary completion'],
    durationMinutes: 30,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Agriculture & Geography'
  },

  // --- READING PRACTICES (Cambridge 10 to 18) ---
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
    isVerified: true,
    topic: 'Psychology & Botany'
  },
  {
    id: 'c18-t2-r',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 2,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Stonehenge Excavations & How Plants Communicate',
    questionCount: 40,
    questionTypes: ['Heading matching', 'Sentence completion', 'Yes/No/Not Given'],
    durationMinutes: 60,
    difficulty: 'Advanced',
    isVerified: true,
    topic: 'Archaeology & Biology'
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
    isVerified: true,
    topic: 'Engineering & History'
  },
  {
    id: 'c17-t2-r',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 2,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Insight into Insight: Creative Problem Solving',
    questionCount: 40,
    questionTypes: ['Information matching', 'Multiple choice', 'Summary completion'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Neuroscience'
  },
  {
    id: 'c16-t1-r',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Why Dogs Turn in Circles & Roman Shipbuilding Techniques',
    questionCount: 40,
    questionTypes: ['Yes/No/Not Given', 'Multiple choice', 'Information matching', 'Table completion'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Animal Behavior & Ancient History'
  },
  {
    id: 'c15-t1-r',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Nutmeg: A Valuable Spice & Driverless Cars Future',
    questionCount: 40,
    questionTypes: ['True/False/Not Given', 'Heading matching', 'Summary completion'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Trade History & Automation'
  },
  {
    id: 'c14-t1-r',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'The Importance of Children’s Play & Alexander Henderson Photography',
    questionCount: 40,
    questionTypes: ['True/False/Not Given', 'Matching features', 'Multiple choice'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Education & Photography'
  },
  {
    id: 'c13-t1-r',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Case Study: Tourism in New Zealand & The Coconut Palm',
    questionCount: 40,
    questionTypes: ['Note completion', 'True/False/Not Given', 'Heading matching'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Ecology & Tourism'
  },
  {
    id: 'c12-t1-r',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Cork: A Sustainable Material & Collecting as a Hobby',
    questionCount: 40,
    questionTypes: ['True/False/Not Given', 'Summary completion', 'Multiple choice'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Materials Science'
  },
  {
    id: 'c11-t1-r',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Crop-growing Architecture & The Falkirk Wheel Engineering',
    questionCount: 40,
    questionTypes: ['Diagram labeling', 'True/False/Not Given', 'Summary'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Engineering & Architecture'
  },
  {
    id: 'c10-t1-r',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 1,
    sectionType: 'reading',
    partOrPassage: 'Passages 1–3',
    title: 'Stepwells of India & European Transport 2020',
    questionCount: 40,
    questionTypes: ['Heading matching', 'Short answer', 'True/False/Not Given'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Civil Engineering'
  },

  // --- WRITING PRACTICES (Cambridge 10 to 18) ---
  {
    id: 'c18-t1-w',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Urban Population Shift & AI Workplace Displacement',
    questionCount: 2,
    questionTypes: ['Comparative map', 'Two-sided discussion essay'],
    durationMinutes: 60,
    difficulty: 'Advanced',
    isVerified: true,
    topic: 'Technology & Demographics'
  },
  {
    id: 'c17-t1-w',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Renewable Energy Consumption & Teaching History in Schools',
    questionCount: 2,
    questionTypes: ['Pie charts & Tables', 'Direct questions essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Energy & Education'
  },
  {
    id: 'c16-t1-w',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Sugar Manufacturing Process & University Free Tuition',
    questionCount: 2,
    questionTypes: ['Process diagram', 'Problem / Solution essay'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Manufacturing & Society'
  },
  {
    id: 'c15-t1-w',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Coffee Production by Country & Telecommuting Impact',
    questionCount: 2,
    questionTypes: ['Bar chart / Line graph', 'Opinion & Discussion essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Economics & Modern Work'
  },
  {
    id: 'c14-t1-w',
    bookTitle: 'Cambridge IELTS 14 Academic',
    seriesNumber: 14,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Export Categories Comparison & Environmental Responsibility',
    questionCount: 2,
    questionTypes: ['Bar chart', 'Agree / Disagree essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Trade & Climate'
  },
  {
    id: 'c13-t1-w',
    bookTitle: 'Cambridge IELTS 13 Academic',
    seriesNumber: 13,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Household Spending Breakdown & Physical Exercise Habits',
    questionCount: 2,
    questionTypes: ['Pie charts', 'Two-view discussion essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Health & Lifestyle'
  },
  {
    id: 'c12-t1-w',
    bookTitle: 'Cambridge IELTS 12 Academic',
    seriesNumber: 12,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Public Transport Satisfaction & Government Funding for Arts',
    questionCount: 2,
    questionTypes: ['Line graph', 'Opinion essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Culture & Governance'
  },
  {
    id: 'c11-t1-w',
    bookTitle: 'Cambridge IELTS 11 Academic',
    seriesNumber: 11,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'Water Use Worldwide & Nuclear vs Green Energy Policies',
    questionCount: 2,
    questionTypes: ['Line graphs', 'Discuss both views essay'],
    durationMinutes: 60,
    difficulty: 'Challenging',
    isVerified: true,
    topic: 'Natural Resources'
  },
  {
    id: 'c10-t1-w',
    bookTitle: 'Cambridge IELTS 10 Academic',
    seriesNumber: 10,
    testNumber: 1,
    sectionType: 'writing',
    partOrPassage: 'Tasks 1 & 2',
    title: 'International Travel Patterns & Museum Entry Fees Debate',
    questionCount: 2,
    questionTypes: ['Table & Bar chart', 'Advantage / Disadvantage essay'],
    durationMinutes: 60,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Tourism & Education'
  },

  // --- SPEAKING PRACTICES ---
  {
    id: 'c18-t1-s',
    bookTitle: 'Cambridge IELTS 18 Academic',
    seriesNumber: 18,
    testNumber: 1,
    sectionType: 'speaking',
    partOrPassage: 'Parts 1–3',
    title: 'Cue Card: An Impressive Public Facility in Your City',
    questionCount: 12,
    questionTypes: ['Interview Part 1', 'Long turn Cue Card', 'Analytical discussion Part 3'],
    durationMinutes: 14,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Urban Infrastructure'
  },
  {
    id: 'c17-t1-s',
    bookTitle: 'Cambridge IELTS 17 Academic',
    seriesNumber: 17,
    testNumber: 1,
    sectionType: 'speaking',
    partOrPassage: 'Parts 1–3',
    title: 'Cue Card: A Traditional Celebration or Festival You Attended',
    questionCount: 12,
    questionTypes: ['Interview Part 1', 'Long turn Cue Card', 'Analytical discussion Part 3'],
    durationMinutes: 14,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Culture & Tradition'
  },
  {
    id: 'c16-t1-s',
    bookTitle: 'Cambridge IELTS 16 Academic',
    seriesNumber: 16,
    testNumber: 1,
    sectionType: 'speaking',
    partOrPassage: 'Parts 1–3',
    title: 'Cue Card: A Technological Device That Made Life Easier',
    questionCount: 12,
    questionTypes: ['Interview Part 1', 'Long turn Cue Card', 'Analytical discussion Part 3'],
    durationMinutes: 14,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Innovation & Gadgets'
  },
  {
    id: 'c15-t1-s',
    bookTitle: 'Cambridge IELTS 15 Academic',
    seriesNumber: 15,
    testNumber: 1,
    sectionType: 'speaking',
    partOrPassage: 'Parts 1–3',
    title: 'Cue Card: A Person Who Encouraged You to Achieve a Goal',
    questionCount: 12,
    questionTypes: ['Interview Part 1', 'Long turn Cue Card', 'Analytical discussion Part 3'],
    durationMinutes: 14,
    difficulty: 'Standard',
    isVerified: true,
    topic: 'Personal Development'
  }
]

export function PracticePage() {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState<SectionType | 'all'>('all')
  const [selectedBook, setSelectedBook] = useState<number | 'all'>('all')
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('timed_practice')
  const [searchQuery, setSearchQuery] = useState('')
  const [randomModalOpen, setRandomModalOpen] = useState(false)
  const [rolledPractice, setRolledPractice] = useState<PracticeItem | null>(null)

  const filteredItems = EXTENSIVE_PRACTICE_BANK.filter((item) => {
    if (selectedSection !== 'all' && item.sectionType !== selectedSection) return false
    if (selectedBook !== 'all' && item.seriesNumber !== selectedBook) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return item.title.toLowerCase().includes(q) || (item.topic && item.topic.toLowerCase().includes(q))
    }
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

  // Roll Random Workout Functionality
  const rollRandomWorkout = (targetSkill?: SectionType) => {
    const pool = targetSkill
      ? EXTENSIVE_PRACTICE_BANK.filter((p) => p.sectionType === targetSkill)
      : EXTENSIVE_PRACTICE_BANK

    const randomIndex = Math.floor(Math.random() * pool.length)
    setRolledPractice(pool[randomIndex])
    setRandomModalOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Top Banner with Random Generator CTA */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-6 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            <Sparkles size={13} /> Complete Cambridge IELTS 10 to 18 Training
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Targeted Practice Workouts</h1>
          <p className="text-stone-300 text-xs mt-1 max-w-xl leading-relaxed">
            Train specific sections, question types, and passages across all 9 Cambridge books with authentic audio and official timers.
          </p>
        </div>

        {/* Random Generator Quick Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={() => rollRandomWorkout()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Dices size={16} />
            <span>Roll Random Workout</span>
          </button>
        </div>
      </div>

      {/* Mode & Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Section Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedSection('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
              }`}
            >
              All Skills ({EXTENSIVE_PRACTICE_BANK.length})
            </button>
            <button
              onClick={() => setSelectedSection('listening')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === 'listening'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <Headphones size={13} /> Listening
            </button>
            <button
              onClick={() => setSelectedSection('reading')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === 'reading'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              <BookOpen size={13} /> Reading
            </button>
            <button
              onClick={() => setSelectedSection('writing')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === 'writing'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              }`}
            >
              <PenTool size={13} /> Writing
            </button>
            <button
              onClick={() => setSelectedSection('speaking')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSection === 'speaking'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              <Mic size={13} /> Speaking
            </button>
          </div>

          {/* Quick random skill buttons */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-semibold text-stone-400 mr-1">Roll Skill:</span>
            <button
              onClick={() => rollRandomWorkout('listening')}
              title="Roll Random Listening Drill"
              className="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Headphones size={12} /> <Dices size={12} />
            </button>
            <button
              onClick={() => rollRandomWorkout('reading')}
              title="Roll Random Reading Passage"
              className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <BookOpen size={12} /> <Dices size={12} />
            </button>
            <button
              onClick={() => rollRandomWorkout('writing')}
              title="Roll Random Writing Prompt"
              className="p-1.5 bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <PenTool size={12} /> <Dices size={12} />
            </button>
          </div>
        </div>

        {/* Second Filter Row: Books & Search & Mode */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-stone-500">Book Series:</span>
              <select
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <option value="all">All Cambridge Series (10–18)</option>
                <option value="18">Cambridge IELTS 18</option>
                <option value="17">Cambridge IELTS 17</option>
                <option value="16">Cambridge IELTS 16</option>
                <option value="15">Cambridge IELTS 15</option>
                <option value="14">Cambridge IELTS 14</option>
                <option value="13">Cambridge IELTS 13</option>
                <option value="12">Cambridge IELTS 12</option>
                <option value="11">Cambridge IELTS 11</option>
                <option value="10">Cambridge IELTS 10</option>
              </select>
            </div>

            {/* Mode toggle */}
            <div className="inline-flex items-center p-0.5 bg-stone-100 rounded-lg border border-stone-200">
              <button
                onClick={() => setPracticeMode('practice')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  practiceMode === 'practice'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Untimed
              </button>
              <button
                onClick={() => setPracticeMode('timed_practice')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  practiceMode === 'timed_practice'
                    ? 'bg-primary-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Timed
              </button>
            </div>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic or title..."
              className="pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Practice Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-stone-200 hover:border-stone-300 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-stone-50 rounded-lg border border-stone-100">
                    {getSectionIcon(item.sectionType)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary-700 uppercase tracking-wider">
                      {item.bookTitle} · Test {item.testNumber}
                    </span>
                    <h3 className="font-semibold text-stone-900 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                  Verified
                </span>
              </div>

              {/* Topic tag */}
              {item.topic && (
                <div className="text-[10px] font-medium text-stone-400 mb-2">
                  Topic: <span className="text-stone-600 font-semibold">{item.topic}</span>
                </div>
              )}

              {/* Tags & Question types */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.questionTypes.map((qType, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded"
                  >
                    {qType}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer metrics & action */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 font-medium">
                  <Clock size={12} /> {item.durationMinutes} mins
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Layers size={12} /> {item.questionCount} {item.sectionType === 'writing' ? 'tasks' : 'items'}
                </span>
              </div>

              <button
                onClick={() => startPractice(item)}
                className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all group-hover:bg-primary-600"
              >
                <span>Start</span>
                <Play size={10} fill="currentColor" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Random Workout Rolled Modal */}
      {randomModalOpen && rolledPractice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                  <Dices size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900">Your Random Practice Drill</h3>
                  <span className="text-[11px] text-stone-400">Selected randomly from Cambridge 10–18</span>
                </div>
              </div>
              <button
                onClick={() => setRandomModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white rounded-md border border-stone-200">
                  {getSectionIcon(rolledPractice.sectionType)}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-primary-700 uppercase">
                    {rolledPractice.bookTitle} · Test {rolledPractice.testNumber}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm">{rolledPractice.title}</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2 rounded border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">DURATION</span>
                  <span className="font-bold text-stone-800">{rolledPractice.durationMinutes} Minutes</span>
                </div>
                <div className="bg-white p-2 rounded border border-stone-200">
                  <span className="text-stone-400 block text-[10px]">DIFFICULTY</span>
                  <span className="font-bold text-stone-800">{rolledPractice.difficulty}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {rolledPractice.questionTypes.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-white border border-stone-200 text-stone-700 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => rollRandomWorkout()}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-lg border border-stone-200 hover:bg-stone-50"
              >
                <RotateCw size={13} />
                <span>Reroll Another</span>
              </button>

              <button
                onClick={() => startPractice(rolledPractice)}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all"
              >
                <span>Start Practice Drill</span>
                <Play size={12} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
