import { useState, useRef } from 'react'
import {
  BookOpen,
  Headphones,
  FileText,
  Download,
  ExternalLink,
  Search,
  FolderOpen,
  CheckCircle2,
  FileCheck,
  Play,
  Pause,
  Volume2
} from 'lucide-react'

interface CambridgeBookEntry {
  series: number
  title: string
  folder: string
  pdfName: string
  audioCount: number
  testsCount: number
  sizeMB: string
}

const CAMBRIDGE_BOOKS: CambridgeBookEntry[] = [
  { series: 18, title: 'Cambridge IELTS 18 Academic', folder: 'cambridge_18', pdfName: 'Cambridge_IELTS_18_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '135 MB' },
  { series: 17, title: 'Cambridge IELTS 17 Academic', folder: 'cambridge_17', pdfName: 'Cambridge_IELTS_17_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '270 MB' },
  { series: 16, title: 'Cambridge IELTS 16 Academic', folder: 'cambridge_16', pdfName: 'Cambridge_IELTS_16_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '150 MB' },
  { series: 15, title: 'Cambridge IELTS 15 Academic', folder: 'cambridge_15', pdfName: 'Cambridge_IELTS_15_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '130 MB' },
  { series: 14, title: 'Cambridge IELTS 14 Academic', folder: 'cambridge_14', pdfName: 'Cambridge_IELTS_14_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '147 MB' },
  { series: 13, title: 'Cambridge IELTS 13 Academic', folder: 'cambridge_13', pdfName: 'Cambridge_IELTS_13_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '106 MB' },
  { series: 12, title: 'Cambridge IELTS 12 Academic', folder: 'cambridge_12', pdfName: 'Cambridge_IELTS_12_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '229 MB' },
  { series: 11, title: 'Cambridge IELTS 11 Academic', folder: 'cambridge_11', pdfName: 'Cambridge_IELTS_11_Academic.pdf', audioCount: 4, testsCount: 4, sizeMB: '113 MB' },
  { series: 10, title: 'Cambridge IELTS 10 Academic', folder: 'cambridge_10', pdfName: 'Cambridge_IELTS_10.pdf', audioCount: 4, testsCount: 4, sizeMB: '102 MB' },
]

interface ExtraMaterial {
  title: string
  type: 'Vocabulary' | 'Speaking' | 'Writing' | 'Guidelines'
  filename: string
  size: string
  description: string
}

const EXTRA_MATERIALS: ExtraMaterial[] = [
  {
    title: '1200 Most Commonly Repeated Words in IELTS',
    type: 'Vocabulary',
    filename: '1200_most_commonly_repeated_words.pdf',
    size: '140 KB',
    description: 'High-frequency IELTS vocabulary tested in Listening Part 1 spelling and Reading fill-in-the-blanks.'
  },
  {
    title: 'IELTS Listening 1700 Most Common Words',
    type: 'Vocabulary',
    filename: 'IELTS_Listening_1700_most_common_words.pdf',
    size: '98 KB',
    description: 'Crucial spelling list for listening sections, dates, names, currency units, and academic keywords.'
  },
  {
    title: "Kiran Makkar's Speaking Final Version",
    type: 'Speaking',
    filename: 'Kiran_Makkar_s_Speaking_Final_Version_May_.pdf',
    size: '4.5 MB',
    description: 'Comprehensive cue cards, follow-up questions, and Part 1 intro questions with band 8+ sample ideas.'
  },
  {
    title: 'Idioms, Phrases & Proverbs for Band 7+',
    type: 'Vocabulary',
    filename: 'Idioms_Phrases_Proverbs_Live_MCQ_Y7X9omo.pdf',
    size: '1.6 MB',
    description: 'Idiomatic vocabulary and natural collocations for higher Lexical Resource marks in Speaking & Writing.'
  },
  {
    title: 'Official IELTS Writing Answer Sheet Template',
    type: 'Writing',
    filename: 'ielts-writing-answersheet.pdf',
    size: '719 KB',
    description: 'Authentic British Council / IDP ruled answer sheet template for Task 1 and Task 2 offline handwriting practice.'
  },
  {
    title: 'IELTS Guidelines & FAQ 2026',
    type: 'Guidelines',
    filename: 'Guidelines_2026-1.pdf',
    size: '394 KB',
    description: 'Official test format overview, scoring rules, computer-delivered vs paper differences, and exam policies.'
  }
]

export function MaterialsPage() {
  const [activeTab, setActiveTab] = useState<'books' | 'audio' | 'resources'>('books')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBookForAudio, setSelectedBookForAudio] = useState(18)

  const [playingTrack, setPlayingTrack] = useState<{ series: number; test: number } | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(1800)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleToggleTrack = (series: number, test: number) => {
    if (playingTrack?.series === series && playingTrack?.test === test) {
      if (isAudioPlaying) {
        audioRef.current?.pause()
        setIsAudioPlaying(false)
      } else {
        audioRef.current?.play().then(() => setIsAudioPlaying(true)).catch(() => {})
      }
    } else {
      setPlayingTrack({ series, test })
      setCurrentTime(0)
      if (audioRef.current) {
        audioRef.current.src = `/audio/Cambridge_IELTS_${series}_-_Listening_Test_${test}.mp3`
        audioRef.current.play().then(() => setIsAudioPlaying(true)).catch(() => {})
      }
    }
  }

  return (
    <div className="space-y-6">
      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) setTotalDuration(audioRef.current.duration)
        }}
        onPlay={() => setIsAudioPlaying(true)}
        onPause={() => setIsAudioPlaying(false)}
        onEnded={() => setIsAudioPlaying(false)}
      />
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Cambridge IELTS Materials Library</h1>
          <p className="text-stone-500 text-sm mt-1">
            Browse and access your local official Cambridge 10–18 practice books, audio files, and vocabulary manuals.
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex items-center p-1 bg-stone-100 rounded-xl border border-stone-200">
          <button
            onClick={() => setActiveTab('books')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'books'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Books (10–18)
          </button>
          <button
            onClick={() => setActiveTab('audio')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'audio'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Audio Tracks (36 Tests)
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'resources'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Vocabulary & Speaking
          </button>
        </div>
      </div>

      {/* Books Tab */}
      {activeTab === 'books' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAMBRIDGE_BOOKS.map((book) => (
            <div
              key={book.series}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-sm">
                    C{book.series}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={12} /> Local File
                  </span>
                </div>

                <h3 className="font-bold text-stone-900 text-base group-hover:text-primary-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Folder: <code className="text-stone-700 bg-stone-100 px-1 py-0.5 rounded">{book.folder}/</code>
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Tests</span>
                    <span className="font-bold text-stone-800">{book.testsCount} Full Tests</span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Audio Files</span>
                    <span className="font-bold text-stone-800">{book.audioCount} MP3 Files</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium">{book.sizeMB}</span>
                <button
                  onClick={() => {
                    setSelectedBookForAudio(book.series)
                    setActiveTab('audio')
                  }}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1"
                >
                  Listen Audio &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Audio Tab */}
      {activeTab === 'audio' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Headphones className="text-primary-600" size={20} />
              <div>
                <h3 className="font-bold text-sm text-stone-900">Audio Player & Inspection</h3>
                <p className="text-xs text-stone-500">All 36 original Cambridge Listening tracks linked directly to tests</p>
              </div>
            </div>
            <select
              value={selectedBookForAudio}
              onChange={(e) => setSelectedBookForAudio(Number(e.target.value))}
              className="text-xs font-semibold bg-stone-50 border border-stone-200 rounded-lg px-3 py-1.5"
            >
              {CAMBRIDGE_BOOKS.map((b) => (
                <option key={b.series} value={b.series}>{b.title}</option>
              ))}
            </select>
          </div>

          {/* Interactive Audio Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((testNum) => {
              const isCurrentTrack = playingTrack?.series === selectedBookForAudio && playingTrack?.test === testNum
              const trackPlaying = isCurrentTrack && isAudioPlaying

              return (
                <div key={testNum} className={`bg-white border rounded-xl p-4 shadow-sm transition-all ${
                  trackPlaying ? 'border-primary-500 ring-2 ring-primary-100' : 'border-stone-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-sm text-stone-900">
                        Cambridge {selectedBookForAudio} · Test {testNum} Listening
                      </h4>
                      <span className="text-xs text-stone-400 font-mono">
                        Cambridge_IELTS_{selectedBookForAudio}_-_Listening_Test_{testNum}.mp3
                      </span>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      ~30 mins
                    </span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleToggleTrack(selectedBookForAudio, testNum)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all shadow-sm cursor-pointer ${
                        trackPlaying ? 'bg-amber-600 hover:bg-amber-700' : 'bg-primary-600 hover:bg-primary-700'
                      }`}
                    >
                      {trackPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-stone-700 mb-1">
                        <span>{trackPlaying ? 'Playing Audio' : isCurrentTrack ? 'Paused' : 'Ready to stream'}</span>
                        <span className="font-mono text-stone-500">
                          {isCurrentTrack ? `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}` : '0:00'} / ~30:00
                        </span>
                      </div>
                      <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-600 transition-all duration-300 rounded-full"
                          style={{
                            width: isCurrentTrack && totalDuration > 0 ? `${(currentTime / totalDuration) * 100}%` : '0%'
                          }}
                        />
                      </div>
                    </div>

                    <Volume2 size={16} className="text-stone-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXTRA_MATERIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">{item.size}</span>
                </div>

                <h3 className="font-bold text-stone-900 text-base group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 text-xs text-stone-400 font-mono bg-stone-50 p-1.5 rounded border border-stone-100">
                  📄 {item.filename}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Stored in IELTS_Cambridge/
                </span>
                <span className="text-stone-400">PDF Reader Ready</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
