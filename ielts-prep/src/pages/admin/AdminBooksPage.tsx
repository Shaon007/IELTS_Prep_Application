import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Folder,
  ArrowRight,
  Plus,
  RefreshCw,
  Edit2
} from 'lucide-react'

interface AdminBookItem {
  id: string
  seriesNumber: number
  title: string
  folderPath: string
  pdfFilename: string
  totalTests: number
  status: 'verified' | 'published' | 'needs_review'
  audioFilesCount: number
}

const CAMBRIDGE_ADMIN_BOOKS: AdminBookItem[] = [
  { id: 'cambridge-18', seriesNumber: 18, title: 'Cambridge IELTS 18 Academic', folderPath: 'IELTS_Cambridge/cambridge_18', pdfFilename: 'Cambridge_IELTS_18_Academic.pdf', totalTests: 4, status: 'published', audioFilesCount: 4 },
  { id: 'cambridge-17', seriesNumber: 17, title: 'Cambridge IELTS 17 Academic', folderPath: 'IELTS_Cambridge/cambridge_17', pdfFilename: 'Cambridge_IELTS_17_Academic.pdf', totalTests: 4, status: 'published', audioFilesCount: 4 },
  { id: 'cambridge-16', seriesNumber: 16, title: 'Cambridge IELTS 16 Academic', folderPath: 'IELTS_Cambridge/cambridge_16', pdfFilename: 'Cambridge_IELTS_16_Academic.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 },
  { id: 'cambridge-15', seriesNumber: 15, title: 'Cambridge IELTS 15 Academic', folderPath: 'IELTS_Cambridge/cambridge_15', pdfFilename: 'Cambridge_IELTS_15_Academic.pdf', totalTests: 4, status: 'published', audioFilesCount: 4 },
  { id: 'cambridge-14', seriesNumber: 14, title: 'Cambridge IELTS 14 Academic', folderPath: 'IELTS_Cambridge/cambridge_14', pdfFilename: 'Cambridge_IELTS_14_Academic.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 },
  { id: 'cambridge-13', seriesNumber: 13, title: 'Cambridge IELTS 13 Academic', folderPath: 'IELTS_Cambridge/cambridge_13', pdfFilename: 'Cambridge_IELTS_13_Academic.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 },
  { id: 'cambridge-12', seriesNumber: 12, title: 'Cambridge IELTS 12 Academic', folderPath: 'IELTS_Cambridge/cambridge_12', pdfFilename: 'Cambridge_IELTS_12_Academic.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 },
  { id: 'cambridge-11', seriesNumber: 11, title: 'Cambridge IELTS 11 Academic', folderPath: 'IELTS_Cambridge/cambridge_11', pdfFilename: 'Cambridge_IELTS_11_Academic.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 },
  { id: 'cambridge-10', seriesNumber: 10, title: 'Cambridge IELTS 10 Academic', folderPath: 'IELTS_Cambridge/cambridge_10', pdfFilename: 'Cambridge_IELTS_10.pdf', totalTests: 4, status: 'verified', audioFilesCount: 4 }
]

export function AdminBooksPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Cambridge Books Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Manage imported Cambridge practice books, verified test sets, and file linkages.
          </p>
        </div>
      </div>

      {/* Table of Books */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase font-semibold">
              <th className="py-3 px-4">Book Title</th>
              <th className="py-3 px-4">Folder & PDF</th>
              <th className="py-3 px-4">Tests</th>
              <th className="py-3 px-4">Audio Files</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {CAMBRIDGE_ADMIN_BOOKS.map((b) => (
              <tr key={b.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="font-bold text-stone-900 text-sm">{b.title}</div>
                  <span className="text-stone-400 font-mono text-[11px]">Series {b.seriesNumber}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="font-mono text-stone-600 text-[11px]">{b.folderPath}</div>
                  <div className="text-stone-400 text-[10px]">{b.pdfFilename}</div>
                </td>
                <td className="py-3 px-4 font-semibold text-stone-800">
                  {b.totalTests} Tests
                </td>
                <td className="py-3 px-4 font-semibold text-stone-800">
                  {b.audioFilesCount} MP3s
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} /> {b.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => navigate(`/admin/books/${b.id}/tests`)}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold px-2.5 py-1 rounded hover:bg-primary-50 transition-all"
                  >
                    <span>Manage Tests</span>
                    <ArrowRight size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
