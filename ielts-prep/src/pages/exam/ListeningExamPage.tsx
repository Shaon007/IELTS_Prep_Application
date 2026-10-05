import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Volume2,
  VolumeX,
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Play,
  Pause,
  FastForward,
  Rewind,
  BookOpen
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { getListeningTest, type ListeningQuestion } from '@/data/listeningTestsData'

export function ListeningExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const [searchParams] = useSearchParams()
  const isPractice = searchParams.get('mode') === 'practice'
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  // Load authentic Cambridge test data corresponding to attemptId
  const testData = useMemo(() => getListeningTest(attemptId), [attemptId])

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const questionContainerRef = useRef<HTMLDivElement | null>(null)

  const [currentPart, setCurrentPart] = useState<1 | 2 | 3 | 4>(1)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = sessionStorage.getItem(`ielts_listening_answers_${testData.id}`)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })
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

  // Resolve audio URL based on test ID
  const resolvedAudioSrc = `/audio/${testData.id}`

  // Part start timestamps from authentic Cambridge audio bookmarks
  const partTimestamps = testData.audioBookmarks

  // Current active part data
  const activePart = testData.parts[currentPart] || testData.parts[1]

  // Persist answers
  useEffect(() => {
    try {
      sessionStorage.setItem(`ielts_listening_answers_${testData.id}`, JSON.stringify(answers))
    } catch {
      // ignore storage errors
    }
  }, [answers, testData.id])

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
    const targetSeconds = partTimestamps[part]
    if (audioRef.current && Number.isFinite(targetSeconds)) {
      audioRef.current.currentTime = targetSeconds
      setCurrentTime(targetSeconds)
    }
  }

  const selectQuestion = (qNum: number) => {
    setCurrentQuestion(qNum)
    const partOfQuestion = Math.ceil(qNum / 10) as 1 | 2 | 3 | 4
    if (partOfQuestion !== currentPart) {
      setCurrentPart(partOfQuestion)
    }
    // Scroll question into view
    setTimeout(() => {
      const el = document.getElementById(`listening-question-${qNum}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 50)
  }

  const goToNextQuestion = () => {
    if (currentQuestion < 40) {
      selectQuestion(currentQuestion + 1)
    }
  }

  const goToPrevQuestion = () => {
    if (currentQuestion > 1) {
      selectQuestion(currentQuestion - 1)
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
    navigate(`/exam/reading/${attemptId || testData.id}`)
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
          <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded font-mono font-medium border border-stone-200">
            {testData.bookTitle} — Part {currentPart}
          </span>
        </div>

        {/* Audio Volume & Top Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-stone-600 hover:text-stone-900"
              title={isMuted ? 'Unmute' : 'Mute'}
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
              className="text-[11px] text-stone-500 hover:text-stone-800 underline ml-1 cursor-pointer"
            >
              {showTime ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            onClick={completeSection}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded shadow transition-all cursor-pointer"
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

                {/* Big High-Contrast Play / Pause Button */}
                <button
                  type="button"
                  id="listening-play-audio-btn"
                  onClick={togglePlay}
                  style={{
                    backgroundColor: isPlaying ? '#d97706' : '#1d4ed8',
                    color: '#ffffff',
                    boxShadow: isPlaying ? '0 4px 12px rgba(217, 119, 6, 0.4)' : '0 4px 14px rgba(29, 78, 216, 0.45)',
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-wide uppercase transition-all cursor-pointer hover:opacity-95 active:scale-95 select-none text-white shrink-0 border border-white/20"
                >
                  {isPlaying ? (
                    <>
                      <Pause size={16} fill="#ffffff" className="text-white" />
                      <span className="text-white font-bold">PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play size={16} fill="#ffffff" className="text-white" />
                      <span className="text-white font-bold">PLAY ▶</span>
                    </>
                  )}
                </button>
              </div>

              {/* High-visibility notification & quick play banner */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  style={{ backgroundColor: '#eff6ff', borderColor: '#93c5fd' }}
                  className="mb-3 py-2.5 px-3 rounded-lg border flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-all shadow-xs"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold text-blue-900">
                    <Headphones size={16} className="text-blue-700 animate-bounce" />
                    <span>Click to start test recording</span>
                  </span>
                  <span
                    style={{ backgroundColor: '#1d4ed8', color: '#ffffff' }}
                    className="text-xs px-3 py-1 rounded-md font-bold shadow-xs hover:bg-blue-800"
                  >
                    PLAY ▶
                  </span>
                </div>
              )}

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
                  className="flex items-center gap-1 hover:text-stone-900 bg-white px-2 py-1 rounded border border-stone-200 text-[11px] cursor-pointer"
                >
                  <Rewind size={12} /> -5s
                </button>
                <button
                  onClick={() => skipSeconds(5)}
                  className="flex items-center gap-1 hover:text-stone-900 bg-white px-2 py-1 rounded border border-stone-200 text-[11px] cursor-pointer"
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
                  className="text-[11px] font-mono font-bold bg-white px-2 py-1 rounded border border-stone-200 hover:bg-stone-50 cursor-pointer"
                >
                  {playbackSpeed}x Speed
                </button>
              </div>

              {audioError && (
                <div className="mt-2 text-[11px] text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                  Click the <strong>PLAY ▶</strong> button above to activate audio stream.
                </div>
              )}
            </div>

            {/* Authentic Section Instructions */}
            <div className="border-b border-stone-200 pb-3 mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                  Cambridge Part {currentPart}
                </span>
                <span className="text-xs text-stone-500 font-mono">
                  Questions {(currentPart - 1) * 10 + 1}–{currentPart * 10}
                </span>
              </div>
              <h2 className="text-base font-bold text-stone-900">
                {activePart.title}
              </h2>
            </div>

            <div className="text-xs text-stone-700 space-y-3 leading-relaxed">
              <p className="bg-stone-50 p-3 rounded-lg border border-stone-200 font-medium text-stone-800">
                {activePart.instructions}
              </p>

              {activePart.contextNotes && activePart.contextNotes.length > 0 && (
                <div className="bg-amber-50/60 p-2.5 rounded border border-amber-200/70 text-amber-900 space-y-1">
                  {activePart.contextNotes.map((note, idx) => (
                    <p key={idx} className="font-medium text-[11px]">{note}</p>
                  ))}
                </div>
              )}

              <p className="text-stone-500">
                Listen carefully to the audio recording. Type or select your answers directly in the test sheet on the right.
              </p>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 border-t border-stone-100 pt-3 flex items-center justify-between">
            <span>{testData.title}</span>
            <span className="font-mono">40 Questions total</span>
          </div>
        </div>

        {/* Right Side: Interactive Questions Form */}
        <div ref={questionContainerRef} className="flex-1 bg-white border border-stone-300 rounded-xl p-6 shadow-sm overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 block">
                Part {currentPart} of 4
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                {activePart.title}
              </h3>
            </div>
            <span className="text-xs font-mono bg-stone-100 text-stone-600 px-3 py-1 rounded-full border border-stone-200">
              Questions {(currentPart - 1) * 10 + 1}–{currentPart * 10}
            </span>
          </div>

          {/* Reference Options Box (if available for Matching tasks) */}
          {activePart.boxOptions && activePart.boxOptions.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-stone-50 border-2 border-stone-300 shadow-xs">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen size={14} className="text-primary-600" />
                <span>Options Box (Reference for matching items below)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePart.boxOptions.map((opt) => (
                  <div key={opt.key} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-stone-200 text-xs">
                    <span className="w-5 h-5 rounded bg-primary-100 text-primary-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {opt.key}
                    </span>
                    <span className="text-stone-700 font-medium">{opt.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Question List */}
          <div className="space-y-4 max-w-2xl">
            {activePart.questions.map((q: ListeningQuestion) => {
              const isActive = currentQuestion === q.id
              const hasAnswer = Boolean(answers[q.id]?.trim())
              const isMarked = flagged[q.id]

              return (
                <div
                  id={`listening-question-${q.id}`}
                  key={q.id}
                  onClick={() => selectQuestion(q.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'border-primary-500 bg-primary-50/20 ring-2 ring-primary-500/30'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-stone-900 bg-stone-100 px-2 py-0.5 rounded text-xs">
                        Question {q.id}
                      </span>
                      {hasAnswer && (
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Answered
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFlag(q.id)
                      }}
                      className={`flex items-center gap-1 text-[11px] font-medium cursor-pointer ${
                        isMarked ? 'text-amber-600 font-bold' : 'text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      <Flag size={12} fill={isMarked ? 'currentColor' : 'none'} />
                      <span>{isMarked ? 'Review Flagged' : 'Review'}</span>
                    </button>
                  </div>

                  {/* Render based on Question Type */}
                  {q.type === 'text' && (
                    <div className="text-sm font-medium text-stone-800 flex items-center flex-wrap gap-2 pt-1">
                      {q.fieldPrefix && <span>{q.fieldPrefix}</span>}
                      <input
                        type="text"
                        value={answers[q.id] || ''}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        placeholder={`[ ${q.id} ]`}
                        className="border-b-2 border-stone-400 focus:border-primary-600 bg-stone-50 px-2.5 py-1 text-sm font-semibold text-stone-900 outline-none min-w-36 max-w-xs transition-colors rounded-t"
                      />
                      {q.fieldSuffix && <span>{q.fieldSuffix}</span>}
                    </div>
                  )}

                  {q.type === 'choice' && (
                    <div className="space-y-2 pt-1">
                      <p className="text-sm font-semibold text-stone-900 mb-2">
                        {q.prompt}
                      </p>
                      <div className="space-y-1.5">
                        {q.options?.map((opt, optIdx) => {
                          const optLetter = opt.charAt(0).toUpperCase()
                          const isSelected = answers[q.id]?.toUpperCase() === optLetter

                          return (
                            <label
                              key={optIdx}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleAnswerChange(q.id, optLetter)
                              }}
                              className={`flex items-center gap-3 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-primary-500 bg-primary-50 text-primary-900 font-bold shadow-xs'
                                  : 'border-stone-200 bg-stone-50/50 hover:bg-stone-100 text-stone-800'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={optLetter}
                                checked={isSelected}
                                onChange={() => handleAnswerChange(q.id, optLetter)}
                                className="accent-primary-600 w-4 h-4 cursor-pointer"
                              />
                              <span className="flex-1">{opt}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {q.type === 'matching' && (
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-stone-900 mb-2">
                        {q.prompt}
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-xs text-stone-500 font-medium">Select letter:</span>
                        {q.options?.map((letter) => {
                          const isSelected = answers[q.id]?.toUpperCase() === letter.toUpperCase()

                          return (
                            <button
                              key={letter}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleAnswerChange(q.id, letter)
                              }}
                              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-primary-600 text-white shadow-sm ring-2 ring-primary-300'
                                  : 'bg-stone-100 text-stone-700 border border-stone-200 hover:bg-stone-200'
                              }`}
                            >
                              {letter}
                            </button>
                          )
                        })}
                        {answers[q.id] && (
                          <span className="text-xs font-mono font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200 ml-2">
                            Chosen: {answers[q.id]}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentPart === p
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Part {p}
            </button>
          ))}
        </div>

        {/* 1-40 Question Palettes for active part */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 max-w-xl">
          {getQuestionNumbersForPart(currentPart).map((qNum) => {
            const isAnswered = Boolean(answers[qNum]?.trim())
            const isCurrent = currentQuestion === qNum
            const isMarked = flagged[qNum]

            return (
              <button
                key={qNum}
                onClick={() => selectQuestion(qNum)}
                className={`relative w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
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
            onClick={goToPrevQuestion}
            disabled={currentQuestion <= 1}
            className="p-2 border border-stone-300 rounded hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            title="Previous question"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-mono font-bold text-stone-600">
            {currentQuestion} / 40
          </span>
          <button
            onClick={goToNextQuestion}
            disabled={currentQuestion >= 40}
            className="p-2 border border-stone-300 rounded hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            title="Next question"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  )
}
