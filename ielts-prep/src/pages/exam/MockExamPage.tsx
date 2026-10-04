import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Headphones,
  BookOpen,
  PenTool,
  Clock,
  Play,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react'

export function MockExamPage() {
  const { attemptId } = useParams<{ attemptId: string }>()
  const navigate = useNavigate()

  const [activeStage, setActiveStage] = useState<'listening' | 'reading' | 'writing'>('listening')

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-stone-900 flex flex-col justify-center items-center p-6">
      <div className="max-w-2xl w-full bg-white border border-stone-300 rounded-2xl p-8 shadow-sm text-center">
        <div className="w-12 h-12 bg-red-600 text-white rounded-xl mx-auto flex items-center justify-center font-black text-lg mb-4">
          IELTS
        </div>

        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Full Mock Examination Flow</h1>
        <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
          The continuous 3-section computer-delivered test sequence: Listening, Reading, followed immediately by Writing.
        </p>

        {/* Stages steps */}
        <div className="grid grid-cols-3 gap-3 my-8 text-left">
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
            <Headphones size={20} className="text-blue-600 mb-2" />
            <div className="text-xs font-bold text-stone-900">1. Listening</div>
            <div className="text-[11px] text-stone-500 mt-1">40 Questions · 30 Mins</div>
          </div>
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
            <BookOpen size={20} className="text-emerald-600 mb-2" />
            <div className="text-xs font-bold text-stone-900">2. Reading</div>
            <div className="text-[11px] text-stone-500 mt-1">3 Passages · 60 Mins</div>
          </div>
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
            <PenTool size={20} className="text-amber-600 mb-2" />
            <div className="text-xs font-bold text-stone-900">3. Writing</div>
            <div className="text-[11px] text-stone-500 mt-1">2 Tasks · 60 Mins</div>
          </div>
        </div>

        <button
          onClick={() => navigate(`/exam/listening/${attemptId || 'c18-test-1'}`)}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
        >
          <span>Begin Listening Test</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
