import { useState } from 'react'
import {
  User,
  Target,
  KeyRound,
  Calendar,
  Save,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/lib/supabase'

export function ProfilePage() {
  const { profile, user, setProfile } = useAuthStore()
  const [displayName, setDisplayName] = useState(profile?.display_name || user?.email?.split('@')[0] || 'Candidate')
  const [targetBand, setTargetBand] = useState(profile?.target_band || 7.5)
  const [targetListening, setTargetListening] = useState(profile?.target_listening || 8.0)
  const [targetReading, setTargetReading] = useState(profile?.target_reading || 8.0)
  const [targetWriting, setTargetWriting] = useState(profile?.target_writing || 7.0)
  const [apiKey, setApiKey] = useState(profile?.gemini_api_key || '')
  const [examDate, setExamDate] = useState('2026-11-15')
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const target = new Date(examDate).getTime()
    const now = new Date().getTime()
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      if (user?.id) {
        const { error } = await supabase
          .from('profiles')
          .update({
            display_name: displayName,
            target_band: targetBand,
            target_listening: targetListening,
            target_reading: targetReading,
            target_writing: targetWriting,
            gemini_api_key: apiKey || null,
            updated_at: new Date().toISOString()
          })
          .eq('id', user.id)

        if (!error && profile) {
          setProfile({
            ...profile,
            display_name: displayName,
            target_band: targetBand,
            target_listening: targetListening,
            target_reading: targetReading,
            target_writing: targetWriting,
            gemini_api_key: apiKey || undefined
          })
        }
      }
      setSuccessMessage(true)
      setTimeout(() => setSuccessMessage(false), 3000)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Candidate Profile & Target Band</h1>
        <p className="text-stone-500 text-sm mt-1">
          Customize your target IELTS scores, official exam countdown, and optional AI writing evaluation key.
        </p>
      </div>

      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
          <CheckCircle2 size={18} className="text-emerald-600" />
          <span className="text-sm font-semibold">Profile settings saved successfully!</span>
        </div>
      )}

      {/* Countdown Card */}
      <div className="bg-gradient-to-r from-primary-900 to-stone-900 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-primary-300 flex items-center gap-1.5">
            <Clock size={14} /> Official Exam Countdown
          </span>
          <h2 className="text-3xl font-extrabold mt-1">
            {calculateDaysRemaining()} Days Remaining
          </h2>
          <p className="text-xs text-stone-300 mt-1">Target Exam Date: {examDate}</p>
        </div>

        <div className="text-right">
          <div className="text-xs text-stone-400">Target Score</div>
          <div className="text-3xl font-black text-primary-400">Band {targetBand}</div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
            <User size={18} className="text-primary-600" /> Candidate Credentials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Email (Authenticated)</label>
              <input
                type="email"
                disabled
                value={user?.email || 'candidate@example.com'}
                className="w-full text-sm bg-stone-100 border border-stone-200 rounded-lg p-2.5 text-stone-500 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Target Exam Date</label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Target Bands */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
            <Target size={18} className="text-primary-600" /> Target Band Scores
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Overall Target</label>
              <select
                value={targetBand}
                onChange={(e) => setTargetBand(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 font-bold"
              >
                {[6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                  <option key={b} value={b}>Band {b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Listening Target</label>
              <select
                value={targetListening}
                onChange={(e) => setTargetListening(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 font-bold"
              >
                {[6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                  <option key={b} value={b}>Band {b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Reading Target</label>
              <select
                value={targetReading}
                onChange={(e) => setTargetReading(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 font-bold"
              >
                {[6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                  <option key={b} value={b}>Band {b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Writing Target</label>
              <select
                value={targetWriting}
                onChange={(e) => setTargetWriting(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-lg p-2.5 font-bold"
              >
                {[6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                  <option key={b} value={b}>Band {b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Gemini API Key */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <KeyRound size={18} className="text-primary-600" /> AI Writing Evaluation (Gemini API)
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Optional: Supply your personal Gemini API Key for deep examiner-level writing rubric evaluations.
              </p>
            </div>
            <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
              Optional
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Gemini API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full text-sm font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Your key is stored securely in your profile and used solely for your writing evaluations.</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm text-sm transition-all"
          >
            <Save size={16} />
            <span>{isSaving ? 'Saving...' : 'Save Profile Changes'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
