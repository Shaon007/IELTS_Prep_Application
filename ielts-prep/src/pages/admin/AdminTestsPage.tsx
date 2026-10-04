import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  Headphones,
  BookOpen,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Plus,
  Edit2
} from 'lucide-react'

export function AdminTestsPage() {
  const { bookId } = useParams<{ bookId: string }>()
  const navigate = useNavigate()

  const tests = [
    { id: `${bookId}-test-1`, testNum: 1, title: 'Practice Test 1', listening: 40, reading: 40, writing: 2, status: 'published' },
    { id: `${bookId}-test-2`, testNum: 2, title: 'Practice Test 2', listening: 40, reading: 40, writing: 2, status: 'published' },
    { id: `${bookId}-test-3`, testNum: 3, title: 'Practice Test 3', listening: 40, reading: 40, writing: 2, status: 'published' },
    { id: `${bookId}-test-4`, testNum: 4, title: 'Practice Test 4', listening: 40, reading: 40, writing: 2, status: 'published' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => navigate('/admin/books')}
          className="text-xs font-semibold text-stone-500 hover:text-stone-900 flex items-center gap-1 mb-2"
        >
          <ChevronLeft size={14} /> Back to Books List
        </button>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight capitalize">
          {bookId?.replace('-', ' ')} — Test Configuration
        </h1>
        <p className="text-xs text-stone-500 mt-1">
          Review and edit test sections, audio connections, and answer keys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-stone-900">{t.title}</h3>
              <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                {t.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-center">
                <Headphones size={15} className="mx-auto text-blue-500 mb-1" />
                <span className="block font-semibold text-stone-700">Listening</span>
                <span className="text-stone-400 text-[10px]">{t.listening} Qs</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-center">
                <BookOpen size={15} className="mx-auto text-emerald-500 mb-1" />
                <span className="block font-semibold text-stone-700">Reading</span>
                <span className="text-stone-400 text-[10px]">{t.reading} Qs</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-center">
                <PenTool size={15} className="mx-auto text-amber-500 mb-1" />
                <span className="block font-semibold text-stone-700">Writing</span>
                <span className="text-stone-400 text-[10px]">{t.writing} Tasks</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => navigate(`/admin/tests/${t.id}/questions`)}
                className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg transition-all"
              >
                <span>Edit Questions & Keys</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
