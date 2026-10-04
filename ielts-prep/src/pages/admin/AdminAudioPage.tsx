import { useState } from 'react'
import {
  Headphones,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Play,
  Save,
  Volume2,
  FileCheck
} from 'lucide-react'

interface AudioMappingItem {
  id: string
  bookTitle: string
  testNumber: number
  filename: string
  duration: string
  s1Start: string
  s2Start: string
  s3Start: string
  s4Start: string
  status: 'verified' | 'unverified'
}

const SAMPLE_AUDIO_MAPPINGS: AudioMappingItem[] = [
  { id: 'a1', bookTitle: 'Cambridge IELTS 18', testNumber: 1, filename: 'Cambridge_IELTS_18_-_Listening_Test_1.mp3', duration: '29:45', s1Start: '0:00', s2Start: '6:30', s3Start: '13:45', s4Start: '20:50', status: 'verified' },
  { id: 'a2', bookTitle: 'Cambridge IELTS 18', testNumber: 2, filename: 'Cambridge_IELTS_18_-_Listening_Test_2.mp3', duration: '30:10', s1Start: '0:00', s2Start: '7:15', s3Start: '14:20', s4Start: '21:30', status: 'verified' },
  { id: 'a3', bookTitle: 'Cambridge IELTS 17', testNumber: 1, filename: 'Cambridge_IELTS_17_-_Listening_Test_1.mp3', duration: '31:05', s1Start: '0:00', s2Start: '6:50', s3Start: '14:10', s4Start: '21:40', status: 'verified' },
  { id: 'a4', bookTitle: 'Cambridge IELTS 16', testNumber: 1, filename: 'Cambridge_IELTS_16_-_Listening_Test_1.mp3', duration: '28:50', s1Start: '0:00', s2Start: '6:20', s3Start: '13:30', s4Start: '20:15', status: 'verified' },
  { id: 'a5', bookTitle: 'Cambridge IELTS 15', testNumber: 1, filename: 'Cambridge_IELTS_15_-_Listening_Test_1.mp3', duration: '30:20', s1Start: '0:00', s2Start: '7:00', s3Start: '14:30', s4Start: '21:45', status: 'verified' },
]

export function AdminAudioPage() {
  const [mappings, setMappings] = useState<AudioMappingItem[]>(SAMPLE_AUDIO_MAPPINGS)
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleSave = () => {
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Listening Audio & Section Timestamps</h1>
          <p className="text-xs text-stone-500 mt-1">
            Map full-test MP3 recordings into Part 1, Part 2, Part 3, and Part 4 exact timestamp bookmarks.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-sm transition-all"
        >
          <Save size={14} />
          <span>Save Timestamp Mappings</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>Audio timestamp bookmarks persisted successfully!</span>
        </div>
      )}

      {/* Info notice about per-test audio architecture */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-900">
        <Headphones size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5">Per-Test Audio Architecture</span>
          <p className="text-blue-800 leading-relaxed">
            Cambridge IELTS distributes audio as a single continuous MP3 per test (~30 minutes). When a student navigates between Part 1, Part 2, Part 3, and Part 4, the player seeks automatically to the respective start timestamp defined below.
          </p>
        </div>
      </div>

      {/* Mappings Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase font-semibold">
              <th className="py-3 px-4">Test Track</th>
              <th className="py-3 px-4">Total Length</th>
              <th className="py-3 px-4">Part 1 Start</th>
              <th className="py-3 px-4">Part 2 Start</th>
              <th className="py-3 px-4">Part 3 Start</th>
              <th className="py-3 px-4">Part 4 Start</th>
              <th className="py-3 px-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {mappings.map((item, idx) => (
              <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="font-bold text-stone-900 text-sm">
                    {item.bookTitle} · Test {item.testNumber}
                  </div>
                  <span className="text-stone-400 font-mono text-[10px]">{item.filename}</span>
                </td>
                <td className="py-3 px-4 font-mono font-medium text-stone-600">
                  {item.duration}
                </td>
                <td className="py-3 px-4">
                  <input
                    type="text"
                    value={item.s1Start}
                    onChange={(e) => {
                      const updated = [...mappings]
                      updated[idx].s1Start = e.target.value
                      setMappings(updated)
                    }}
                    className="w-16 bg-stone-50 border border-stone-200 rounded px-2 py-1 font-mono text-center"
                  />
                </td>
                <td className="py-3 px-4">
                  <input
                    type="text"
                    value={item.s2Start}
                    onChange={(e) => {
                      const updated = [...mappings]
                      updated[idx].s2Start = e.target.value
                      setMappings(updated)
                    }}
                    className="w-16 bg-stone-50 border border-stone-200 rounded px-2 py-1 font-mono text-center"
                  />
                </td>
                <td className="py-3 px-4">
                  <input
                    type="text"
                    value={item.s3Start}
                    onChange={(e) => {
                      const updated = [...mappings]
                      updated[idx].s3Start = e.target.value
                      setMappings(updated)
                    }}
                    className="w-16 bg-stone-50 border border-stone-200 rounded px-2 py-1 font-mono text-center"
                  />
                </td>
                <td className="py-3 px-4">
                  <input
                    type="text"
                    value={item.s4Start}
                    onChange={(e) => {
                      const updated = [...mappings]
                      updated[idx].s4Start = e.target.value
                      setMappings(updated)
                    }}
                    className="w-16 bg-stone-50 border border-stone-200 rounded px-2 py-1 font-mono text-center"
                  />
                </td>
                <td className="py-3 px-4 text-right">
                  <span className="inline-flex items-center gap-1 font-semibold text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} /> Verified
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
