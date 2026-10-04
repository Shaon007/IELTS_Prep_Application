import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Volume2,
  VolumeX,
  Clock,
  HelpCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Rewind,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

interface QuestionItem {
  id: number
  prompt: string
  fieldPrefix?: string
  fieldSuffix?: string
  type: 'text' | 'choice'
  options?: string[]
}

const PART_1_QUESTIONS: QuestionItem[] = [
  { id: 1, prompt: 'Type of work required:', fieldPrefix: 'Temporary ', fieldSuffix: 'assistant', type: 'text' },
  { id: 2, prompt: 'Location preferred:', fieldPrefix: 'Near ', fieldSuffix: 'station', type: 'text' },
  { id: 3, prompt: 'Available from:', fieldPrefix: 'Monday ', fieldSuffix: 'October', type: 'text' },
  { id: 4, prompt: 'Hours available:', fieldPrefix: 'Maximum of ', fieldSuffix: 'hours per week', type: 'text' },
  { id: 5, prompt: 'Previous experience:', fieldPrefix: 'Customer service in a ', type: 'text' },
  { id: 6, prompt: 'Language spoken fluently:', fieldPrefix: '', fieldSuffix: 'and Spanish', type: 'text' },
  { id: 7, prompt: 'Hourly pay expected:', fieldPrefix: '£ ', fieldSuffix: 'per hour', type: 'text' },
  { id: 8, prompt: 'Contact telephone:', fieldPrefix: '07700 ', type: 'text' },
  { id: 9, prompt: 'Interview scheduled for:', fieldPrefix: 'Thursday at ', fieldSuffix: 'am', type: 'text' },
  { id: 10, prompt: 'Bring original copy of:', fieldPrefix: '', fieldSuffix: 'certificate', type: 'text' },
]

// Part start timestamps (approximate Cambridge section bookmarks in seconds)
const PART_TIMESTAMPS: Record<1 | 2 | 3 | 4, number> = {
  1: 0,
  2: 390,  // ~6m30s
  3: 825,  // ~13m45s
  4: 1250  // ~20m50s
}

export function ListeningExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const [searchParams] = useSearchParams()
  const isPractice = searchParams.get('mode') === 'practice'
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [currentPart, setCurrentPart] = useState<1 | 2 | 3 | 4>(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [flagged, setFlagged] = useState<Record<number, boolean>>({})
  const [secondsRemaining, setSecondsRemaining] = useState(30 * 60)
  const [volume, setVolume] = useState(85)
  const [isMuted, setIsMuted] = useState(false)
  const [showTime, setShowTime] = useState(true)

  // Audio Playback States
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(1800) // Default 30 mins
  const [audioError, setAudioError] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  // Resolve audio URL based on attemptId (e.g. c18-test-1, c15-t1-l)
  const resolvedAudioSrc = `/audio/${attemptId || 'c18-test-1'}`

  // Exam Countdown Timer
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

  // Sync Volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setAudioError(false)
        })
        .catch((err) => {
          console.warn('Playback error or blocked by autoplay policy:', err)
          setAudioError(true)
        })
    }
  }

  // Seek audio
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  // Skip relative seconds
  const skipSeconds = (secs: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + secs))
    }
  }

  // Jump to section bookmark
  const jumpToPart = (part: 1 | 2 | 3 | 4) => {
    setCurrentPart(part)
    setCurrentQuestion((part - 1) * 10 + 1)
    const targetSeconds = PART_TIMESTAMPS[part]
    if (audioRef.current && Number.isFinite(targetSeconds)) {
      audioRef.current.currentTime = targetSeconds
      setCurrentTime(targetSeconds)
    }
  }

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  const handleAnswerChange = (qId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }))
  }

  const toggleFlag = (qId: number) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }))
  }

  const getQuestionNumbersForPart = (part: number) => {
    const start = (part - 1) * 10 + 1
    return Array.from({ length: 10 }, (_, i) => start + i)
  }

  const completeSection = () => {
    if (audioRef.current) audioRef.current.pause()
    navigate(`/exam/reading/${attemptId || 'c18-test-1'}`)
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f0f2f5] text-stone-900 select-none overflow-hidden font-sans">
      {/* Hidden Native Audio Element with Event Handlers */}
      <audio
        ref={audioRef}
        src={resolvedAudioSrc}
        preload="auto"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDuration(audioRef.current.duration)
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setAudioError(true)}
      />

      {/* Authentic CD-IELTS Header */}
      <header className="h-14 bg-white border-b border-stone-300 px-6 flex items-center justify-between shadow-sm z-20">
        <div className="flex items-center gap-4">
          <span className="font-extrabold text-red-600 text-lg tracking-wider">IELTS</span>
          <span className="h-5 w-px bg-stone-300" />
          <span className="font-semibold text-sm text-stone-700">
            Candidate: {profile?.display_name || user?.email?.split('@')[0] || 'Candidate'} (ID: 98241)
          </span>
          <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded font-mono font-medium">
            Listening — Part {currentPart}
          </span>
        </div>

        {/* Audio Volume & Top Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-stone-600 hover:text-stone-900"
            >
              {isMuted ? <VolumeX size={16} className="text-red-500" /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value))
                if (isMuted) setIsMuted(false)
              }}
              className="w-20 accent-primary-600 h-1.5 cursor-pointer"
            />
            <span className="text-xs font-mono text-stone-500 w-8">{isMuted ? '0%' : `${volume}%`}</span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2">
            <Clock size={16} className={secondsRemaining < 300 ? 'text-red-600 animate-pulse' : 'text-stone-600'} />
            {showTime ? (
              <span className={`font-mono text-sm font-bold ${secondsRemaining < 300 ? 'text-red-600' : 'text-stone-800'}`}>
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
            End Listening &rarr;
          </button>
        </div>
      </header>

      {/* Main Examination Body */}
      <main className="flex-1 flex overflow-hidden p-6 gap-6">
        {/* Left Side: Interactive Audio Player & Instructions */}
        <div className="w-1/3 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Interactive Audio Player Deck */}
            <div className={`p-4 rounded-xl border mb-5 transition-all ${
              isPlaying
                ? 'bg-blue-50/80 border-blue-200 ring-2 ring-blue-500/20'
                : 'bg-stone-50 border-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${isPlaying ? 'bg-blue-600 text-white animate-pulse' : 'bg-stone-200 text-stone-600'}`}>
                    <Headphones size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-stone-900">
                      {isPlaying ? 'Audio Track Playing' : 'Official Cambridge Audio'}
                    </h3>
                    <span className="text-[10px] text-stone-500 font-mono block">
                      Part {currentPart} ({formatTimer(currentTime)} / {formatTimer(duration)})
                    </span>
                  </div>
                </div>

                {/* Big Play / Pause Button */}
                <button
                  onClick={togglePlay}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow transition-all cursor-pointer ${
                    isPlaying
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'bg-primary-600 hover:bg-primary-700 text-white ring-4 ring-primary-100'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={14} fill="currentColor" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={14} fill="currentColor" />
                      <span>Play Audio</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress bar scrubber */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 1800}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full accent-blue-600 h-1.5 cursor-pointer bg-stone-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>{formatTimer(currentTime)}</span>
                  <span>Part {currentPart}</span>
                  <span>{formatTimer(duration)}</span>
                </div>
              </div>

              {/* Quick Seek buttons */}
              <div className="flex items-center justify-center gap-3 mt-3 pt-2 border-t border-stone-200/60 text-xs text-stone-600">
                <button
                  onClick={() => skipSeconds(-5)}
                  className="flex items-center gap-1 hover:text-stone-900 bg-white px-2 py-1 rounded border border-stone-200 text-[11px]"
                >
                  <Rewind size={12} /> -5s
                </button>
                <button
                  onClick={() => skipSeconds(5)}
                  className="flex items-center gap-1 hover:text-stone-900 bg-white px-2 py-1 rounded border border-stone-200 text-[11px]"
                >
                  <FastForward size={12} /> +5s
                </button>

                {/* Speed toggle for practice */}
                <button
                  onClick={() => {
                    const next = playbackSpeed === 1.0 ? 1.2 : playbackSpeed === 1.2 ? 0.8 : 1.0
                    setPlaybackSpeed(next)
                    if (audioRef.current) audioRef.current.playbackRate = next
                  }}
                  className="text-[11px] font-mono font-bold bg-white px-2 py-1 rounded border border-stone-200 hover:bg-stone-50"
                >
                  {playbackSpeed}x Speed
                </button>
              </div>

              {audioError && (
                <div className="mt-2 text-[11px] text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                  Click the <strong>Play Audio</strong> button above to activate audio stream.
                </div>
              )}
            </div>

            {/* Instructions */}
            <h2 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-2 mb-3">
              Part {currentPart}: Instructions
            </h2>

            <div className="text-xs text-stone-700 space-y-3 leading-relaxed">
              <p className="font-semibold text-stone-900">
                Questions 1–10: Complete the notes below.
              </p>
              <p className="bg-stone-50 p-2.5 rounded border border-stone-200 font-medium text-stone-800">
                Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
              </p>
              <p>
                Listen carefully to the conversation. Type your answers directly into the corresponding numbered boxes on the right.
              </p>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 border-t border-stone-100 pt-3">
            In official CD-IELTS, candidate headphones are active continuously throughout all 4 parts.
          </div>
        </div>

        {/* Right Side: Interactive Questions Form */}
        <div className="flex-1 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto">
          <h3 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
            Employment Registration Form
          </h3>

          <div className="space-y-4 max-w-xl">
            {PART_1_QUESTIONS.map((q) => {
              const isActive = currentQuestion === q.id
              const isAnswered = Boolean(answers[q.id]?.trim())
              const isMarked = flagged[q.id]

              return (
                <div
                  key={q.id}
                  onClick={() => setCurrentQuestion(q.id)}
                  className={`p-3 rounded-lg border transition-all ${
                    isActive
                      ? 'border-primary-500 bg-primary-50/30 ring-1 ring-primary-500'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span className="font-bold text-stone-700">Question {q.id}</span>
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

                  <div className="text-sm font-medium text-stone-800 flex items-center flex-wrap gap-2">
                    <span>{q.fieldPrefix}</span>
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder={`[ ${q.id} ]`}
                      className="border-b-2 border-stone-400 focus:border-primary-600 bg-stone-50 px-2 py-0.5 text-sm font-semibold text-stone-900 outline-none w-36 transition-colors"
                    />
                    <span>{q.fieldSuffix}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Authentic CD-IELTS Bottom Question Navigator Bar */}
      <footer className="h-16 bg-white border-t border-stone-300 px-6 flex items-center justify-between shadow-md z-20">
        {/* Part selectors */}
        <div className="flex items-center gap-2">
          {([1, 2, 3, 4] as const).map((p) => (
            <button
              key={p}
              onClick={() => jumpToPart(p)}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                currentPart === p
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Part {p}
            </button>
          ))}
        </div>

        {/* 1-40 Question Palettes */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 max-w-xl">
          {getQuestionNumbersForPart(currentPart).map((qNum) => {
            const isAnswered = Boolean(answers[qNum]?.trim())
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
