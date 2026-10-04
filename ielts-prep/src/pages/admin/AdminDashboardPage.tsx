import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ShieldCheck,
  BookOpen,
  Headphones,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  RefreshCw,
  Users,
  Settings,
  ArrowRight
} from 'lucide-react'

export function AdminDashboardPage() {
  const navigate = useNavigate()
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 1500)
  }

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-stone-900 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold mb-1">
            <ShieldCheck size={16} /> Admin Content Management Console
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">System Content Audit & Integrity</h1>
          <p className="text-stone-400 text-xs mt-1">
            Audit local Cambridge files, manage question verification, sync audio timestamps, and maintain official tests.
          </p>
        </div>

        <button
          onClick={handleScan}
          disabled={isScanning}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-xl text-xs shadow-sm transition-all"
        >
          <RefreshCw size={14} className={isScanning ? 'animate-spin' : ''} />
          <span>{isScanning ? 'Scanning...' : 'Trigger Content Audit'}</span>
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <span className="text-xs font-semibold text-stone-500 block">Cambridge Books</span>
          <div className="text-3xl font-extrabold text-stone-900 mt-1">9</div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 size={12} /> Cambridge 10–18 series
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <span className="text-xs font-semibold text-stone-500 block">Audio Test Tracks</span>
          <div className="text-3xl font-extrabold text-stone-900 mt-1">36</div>
          <span className="text-[11px] text-blue-600 font-semibold mt-1 flex items-center gap-1">
            <Headphones size={12} /> 100% original MP3s linked
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <span className="text-xs font-semibold text-stone-500 block">Practice Tests</span>
          <div className="text-3xl font-extrabold text-stone-900 mt-1">36</div>
          <span className="text-[11px] text-stone-400 font-semibold mt-1">
            4 tests per book
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
          <span className="text-xs font-semibold text-stone-500 block">Resource Guides</span>
          <div className="text-3xl font-extrabold text-stone-900 mt-1">6</div>
          <span className="text-[11px] text-purple-600 font-semibold mt-1">
            Vocabulary & Speaking PDFs
          </span>
        </div>
      </div>

      {/* Quick Nav Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          onClick={() => navigate('/admin/books')}
          className="cursor-pointer bg-white border border-stone-200 hover:border-primary-500 rounded-xl p-5 shadow-sm hover:shadow transition-all group"
        >
          <div className="p-3 bg-primary-50 text-primary-700 rounded-lg w-fit mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
            <BookOpen size={20} />
          </div>
          <h3 className="font-bold text-base text-stone-900 group-hover:text-primary-600">Books & Tests Manager</h3>
          <p className="text-xs text-stone-500 mt-1 leading-relaxed">
            View imported Cambridge books, verify test content, and review extraction warnings.
          </p>
        </div>

        <div
          onClick={() => navigate('/admin/audio')}
          className="cursor-pointer bg-white border border-stone-200 hover:border-primary-500 rounded-xl p-5 shadow-sm hover:shadow transition-all group"
        >
          <div className="p-3 bg-blue-50 text-blue-700 rounded-lg w-fit mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Headphones size={20} />
          </div>
          <h3 className="font-bold text-base text-stone-900 group-hover:text-primary-600">Audio & Timestamps</h3>
          <p className="text-xs text-stone-500 mt-1 leading-relaxed">
            Map test MP3s to Section 1-4 start timestamps, verify audio duration, and sync transcripts.
          </p>
        </div>

        <div
          onClick={() => navigate('/admin/users')}
          className="cursor-pointer bg-white border border-stone-200 hover:border-primary-500 rounded-xl p-5 shadow-sm hover:shadow transition-all group"
        >
          <div className="p-3 bg-purple-50 text-purple-700 rounded-lg w-fit mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <Users size={20} />
          </div>
          <h3 className="font-bold text-base text-stone-900 group-hover:text-primary-600">User Access & Roles</h3>
          <p className="text-xs text-stone-500 mt-1 leading-relaxed">
            Manage admin privileges, candidate test records, and security audit logs.
          </p>
        </div>
      </div>
    </div>
  )
}
