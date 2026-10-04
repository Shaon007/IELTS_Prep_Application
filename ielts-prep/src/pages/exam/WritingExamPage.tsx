import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Clock,
  PenTool,
  Save,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { countWords } from '@/lib/scoring'

export function WritingExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  const [currentTask, setCurrentTask] = useState<1 | 2>(1)
  const [task1Response, setTask1Response] = useState('')
  const [task2Response, setTask2Response] = useState('')
  const [secondsRemaining, setSecondsRemaining] = useState(60 * 60)
  const [showTime, setShowTime] = useState(true)
  const [lastSaved, setLastSaved] = useState<Date>(new Date())
  const [showSubmitModal, setShowSubmitModal] = useState(false)

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

  // Auto-save emulation
  useEffect(() => {
    const autoSaveTimer = setInterval(() => {
      setLastSaved(new Date())
    }, 5000)
    return () => clearInterval(autoSaveTimer)
  }, [task1Response, task2Response])

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  const wordCount1 = countWords(task1Response)
  const wordCount2 = countWords(task2Response)

  const handleSubmit = () => {
    // Navigate to results page with evaluation
    navigate(`/results/${attemptId || 'c18-test-1'}`)
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
            Academic Writing — Task {currentTask}
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
            onClick={() => setShowSubmitModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2 rounded shadow transition-all"
          >
            Finish Examination
          </button>
        </div>
      </header>

      {/* Main Split Screen */}
      <main className="flex-1 flex overflow-hidden p-4 gap-4">
        {/* Left Side: Task Prompt */}
        <div className="w-1/2 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto leading-relaxed">
          {currentTask === 1 ? (
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-200">
                <span className="text-xs uppercase font-bold text-stone-500">Writing Task 1</span>
                <span className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-semibold">
                  Suggested time: 20 minutes
                </span>
              </div>

              <h2 className="text-base font-bold text-stone-900 mb-3">
                You should spend about 20 minutes on this task.
              </h2>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-xs text-stone-800 space-y-2 mb-4">
                <p className="font-semibold text-stone-900">
                  The chart below shows the percentage of households in different income brackets owning electric and hybrid vehicles in five European countries in 2020.
                </p>
                <p>
                  Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
                </p>
                <p className="font-bold text-red-600 pt-1">
                  Write at least 150 words.
                </p>
              </div>

              {/* Chart diagram mockup */}
              <div className="border border-stone-200 rounded-lg p-4 bg-stone-50 text-center">
                <div className="text-xs font-bold text-stone-700 mb-2">Household EV Ownership by Income (2020)</div>
                <div className="h-44 flex items-end justify-center gap-6 px-4 pb-2 border-b border-stone-300">
                  <div className="w-10 bg-blue-500 rounded-t h-[60%] flex items-center justify-center text-[10px] text-white font-bold">60%</div>
                  <div className="w-10 bg-emerald-500 rounded-t h-[78%] flex items-center justify-center text-[10px] text-white font-bold">78%</div>
                  <div className="w-10 bg-amber-500 rounded-t h-[42%] flex items-center justify-center text-[10px] text-white font-bold">42%</div>
                  <div className="w-10 bg-purple-500 rounded-t h-[88%] flex items-center justify-center text-[10px] text-white font-bold">88%</div>
                </div>
                <div className="flex justify-center gap-4 text-[10px] text-stone-500 mt-2">
                  <span>Norway</span>
                  <span>Netherlands</span>
                  <span>France</span>
                  <span>Germany</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-200">
                <span className="text-xs uppercase font-bold text-stone-500">Writing Task 2</span>
                <span className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-semibold">
                  Suggested time: 40 minutes
                </span>
              </div>

              <h2 className="text-base font-bold text-stone-900 mb-3">
                You should spend about 40 minutes on this task.
              </h2>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-xs text-stone-800 space-y-2 mb-4">
                <p className="font-semibold text-stone-900 leading-relaxed text-sm">
                  Write about the following topic:
                </p>
                <div className="p-3 bg-white border border-stone-200 rounded font-serif text-sm italic text-stone-900">
                  "Some people believe that artificial intelligence and automation will eliminate more jobs than they create, leading to widespread societal crisis. Others argue that AI will foster new industries and enhance human productivity."
                </div>
                <p className="pt-2 font-medium">
                  Discuss both these views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.
                </p>
                <p className="font-bold text-red-600 pt-1">
                  Write at least 250 words.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Authentic CD-IELTS Writing Textarea */}
        <div className="w-1/2 bg-white border border-stone-300 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
            <div className="flex items-center gap-2">
              <PenTool size={16} className="text-stone-500" />
              <span className="font-bold text-xs text-stone-700">Answer Sheet: Task {currentTask}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Save size={13} className="text-emerald-500" />
              <span>Autosaved</span>
            </div>
          </div>

          {/* Authentic raw textarea without browser spellchecker */}
          <textarea
            spellCheck="false"
            autoCorrect="off"
            autoCapitalize="off"
            value={currentTask === 1 ? task1Response : task2Response}
            onChange={(e) => {
              if (currentTask === 1) setTask1Response(e.target.value)
              else setTask2Response(e.target.value)
            }}
            placeholder="Type your response here..."
            className="flex-1 w-full resize-none p-4 text-sm font-sans leading-relaxed text-stone-900 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-[#fbfbfb]"
          />

          {/* Word Count Footer */}
          <div className="mt-3 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <span className="font-bold text-stone-800">
                Word count: {currentTask === 1 ? wordCount1 : wordCount2} words
              </span>
              <span className={`text-[11px] font-semibold ${
                (currentTask === 1 && wordCount1 >= 150) || (currentTask === 2 && wordCount2 >= 250)
                  ? 'text-emerald-600'
                  : 'text-amber-600'
              }`}>
                {currentTask === 1
                  ? wordCount1 >= 150 ? '✓ Minimum 150 met' : `(${150 - wordCount1} words needed)`
                  : wordCount2 >= 250 ? '✓ Minimum 250 met' : `(${250 - wordCount2} words needed)`}
              </span>
            </div>

            <span className="text-[11px] text-stone-400">
              CD-IELTS Standard No-Spellcheck Mode
            </span>
          </div>
        </div>
      </main>

      {/* Task 1 / Task 2 Switcher Footer */}
      <footer className="h-16 bg-white border-t border-stone-300 px-6 flex items-center justify-between shadow-md z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentTask(1)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              currentTask === 1
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>Task 1</span>
            <span className="text-[10px] font-mono opacity-80">({wordCount1} words)</span>
          </button>

          <button
            onClick={() => setCurrentTask(2)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              currentTask === 2
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span>Task 2</span>
            <span className="text-[10px] font-mono opacity-80">({wordCount2} words)</span>
          </button>
        </div>

        <div className="text-xs text-stone-500 font-medium">
          Make sure to complete both tasks before final submission.
        </div>
      </footer>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-stone-900">Finish and Submit Examination?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Are you sure you want to end this examination? Once submitted, your answers will be finalized, raw scores converted to official IELTS Band Scores, and your writing analyzed.
            </p>

            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Task 1 Words:</span>
                <span className="font-bold">{wordCount1} / 150</span>
              </div>
              <div className="flex justify-between">
                <span>Task 2 Words:</span>
                <span className="font-bold">{wordCount2} / 250</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50"
              >
                Return to Exam
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 shadow-sm"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
