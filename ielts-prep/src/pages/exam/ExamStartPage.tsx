import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Volume2,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowRight,
  ShieldAlert,
  Monitor
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

export function ExamStartPage() {
  const { testId } = useParams<{ testId: string }>()
  const navigate = useNavigate()
  const { profile, user } = useAuthStore()

  const [soundChecked, setSoundChecked] = useState(false)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [confirmedDetails, setConfirmedDetails] = useState(false)
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'xlarge'>('standard')
  const [contrast, setContrast] = useState<'default' | 'high' | 'inverted'>('default')

  const playTestSound = () => {
    setIsPlayingAudio(true)
    // Synthesize audio tone or chime
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(440, ctx.currentTime)
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 1.2)

    setTimeout(() => {
      setIsPlayingAudio(false)
      setSoundChecked(true)
    }, 1200)
  }

  const handleStartExam = () => {
    // Navigate to listening section of the test
    navigate(`/exam/listening/${testId || 'c18-test-1'}`)
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-stone-900 font-sans flex flex-col justify-between p-6">
      {/* Top Banner Authentic CD-IELTS Header */}
      <div className="max-w-4xl mx-auto w-full bg-white border border-stone-300 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-600 text-white font-extrabold flex items-center justify-center text-sm tracking-wider">
              IELTS
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-900">IELTS Computer-Delivered Examination</h1>
              <p className="text-xs text-stone-500">Official Candidate Verification & Audio Configuration</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-semibold bg-stone-100 px-3 py-1 rounded text-stone-700">
              Module: Academic
            </span>
          </div>
        </div>

        {/* Candidate Details */}
        <div className="mb-6 bg-stone-50 p-4 rounded-lg border border-stone-200">
          <h2 className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-3">
            Confirm Candidate Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="block text-xs text-stone-400">Candidate Name:</span>
              <span className="font-bold text-stone-800">{profile?.display_name || user?.email?.split('@')[0] || 'Candidate'}</span>
            </div>
            <div>
              <span className="block text-xs text-stone-400">Candidate ID:</span>
              <span className="font-mono font-bold text-stone-800">IELTS-98241</span>
            </div>
            <div>
              <span className="block text-xs text-stone-400">Test Paper:</span>
              <span className="font-bold text-stone-800 uppercase">{testId?.replace('-', ' ') || 'Cambridge 18 Test 1'}</span>
            </div>
            <div>
              <span className="block text-xs text-stone-400">Test Date:</span>
              <span className="font-bold text-stone-800">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Sound Check */}
        <div className="mb-6 p-4 rounded-lg border border-stone-200 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones size={20} className="text-blue-600" />
              <div>
                <h3 className="font-bold text-sm text-stone-900">Audio Equipment Check</h3>
                <p className="text-xs text-stone-500">Put on your headphones and click the button to play the test sound sample.</p>
              </div>
            </div>

            <button
              onClick={playTestSound}
              disabled={isPlayingAudio}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all"
            >
              <Volume2 size={16} />
              <span>{isPlayingAudio ? 'Playing...' : 'Play Sound Sample'}</span>
            </button>
          </div>

          {soundChecked && (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded border border-emerald-200">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Sound check confirmed. Headphone audio verified.</span>
            </div>
          )}
        </div>

        {/* Display Settings */}
        <div className="mb-6 p-4 rounded-lg border border-stone-200 bg-stone-50/50 space-y-3">
          <div className="flex items-center gap-2">
            <Monitor size={18} className="text-stone-600" />
            <h3 className="font-bold text-sm text-stone-900">Display Options (CD-IELTS Standard)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="block text-stone-500 font-medium mb-1">Text Size:</span>
              <div className="flex gap-2">
                {(['standard', 'large', 'xlarge'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFontSize(s)}
                    className={`px-3 py-1.5 rounded border text-xs capitalize ${
                      fontSize === s ? 'bg-stone-900 text-white border-stone-900 font-bold' : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="block text-stone-500 font-medium mb-1">Color Scheme:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setContrast('default')}
                  className={`px-3 py-1.5 rounded border text-xs ${contrast === 'default' ? 'bg-stone-900 text-white font-bold' : 'bg-white text-stone-700 border-stone-300'}`}
                >
                  Standard (Black on White)
                </button>
                <button
                  onClick={() => setContrast('inverted')}
                  className={`px-3 py-1.5 rounded border text-xs ${contrast === 'inverted' ? 'bg-stone-900 text-white font-bold' : 'bg-white text-stone-700 border-stone-300'}`}
                >
                  Dark (White on Black)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 space-y-2 text-xs text-amber-900">
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldAlert size={16} className="text-amber-700" />
            <span>Important Examination Information</span>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-amber-800">
            <li><strong>Listening (30 mins):</strong> You will hear each recording ONCE only. In computer-delivered IELTS, there is NO 10-minute answer transfer time at the end; you have 2 minutes to check answers.</li>
            <li><strong>Reading (60 mins):</strong> 3 passages, 40 questions. You must type or select your answers directly on the screen.</li>
            <li><strong>Writing (60 mins):</strong> Task 1 (minimum 150 words) and Task 2 (minimum 250 words). Automatic word counters are active on the interface.</li>
          </ul>
        </div>

        {/* Confirmation check */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="confirm"
            checked={confirmedDetails}
            onChange={(e) => setConfirmedDetails(e.target.checked)}
            className="w-4 h-4 text-primary-600 rounded border-stone-300 focus:ring-primary-500"
          />
          <label htmlFor="confirm" className="text-sm font-semibold text-stone-800 cursor-pointer">
            My details are correct and I am ready to start the examination.
          </label>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={handleStartExam}
            disabled={!confirmedDetails || !soundChecked}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm shadow transition-all ${
              confirmedDetails && soundChecked
                ? 'bg-red-600 hover:bg-red-700 text-white cursor-pointer'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            <span>Start IELTS Exam</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="text-center text-xs text-stone-400 mt-6">
        Computer-Delivered IELTS Simulation Platform · Cambridge Assessment English Standards
      </div>
    </div>
  )
}
