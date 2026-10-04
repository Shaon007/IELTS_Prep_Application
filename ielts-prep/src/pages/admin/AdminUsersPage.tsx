import { useState } from 'react'
import {
  Users,
  ShieldCheck,
  User,
  Search,
  CheckCircle2,
  Lock,
  Mail,
  Calendar
} from 'lucide-react'

interface UserItem {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  targetBand: number
  testsTaken: number
  createdAt: string
}

const SAMPLE_USERS: UserItem[] = [
  { id: 'u1', name: 'Shawon (Platform Owner)', email: 'admin@ielts-prep.local', role: 'admin', targetBand: 8.0, testsTaken: 12, createdAt: '2026-09-01' },
  { id: 'u2', name: 'Candidate Academic', email: 'student1@example.com', role: 'user', targetBand: 7.5, testsTaken: 6, createdAt: '2026-09-12' },
  { id: 'u3', name: 'Dr. Sarah Lin', email: 'sarah.lin@example.com', role: 'user', targetBand: 7.0, testsTaken: 4, createdAt: '2026-09-20' },
]

export function AdminUsersPage() {
  const [usersList, setUsersList] = useState<UserItem[]>(SAMPLE_USERS)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleRole = (userId: string) => {
    setUsersList((prev) =>
      prev.map((u) =>
        u.id === userId
          ? { ...u, role: u.role === 'admin' ? 'user' : 'admin' }
          : u
      )
    )
  }

  const filteredUsers = usersList.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 tracking-tight">User Administration & Roles</h1>
          <p className="text-xs text-stone-500 mt-1">
            Manage authenticated users, view candidate test activity, and assign admin roles.
          </p>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-2.5 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidates..."
            className="pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg w-56 shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase font-semibold">
              <th className="py-3 px-4">Candidate</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Target Band</th>
              <th className="py-3 px-4">Tests Taken</th>
              <th className="py-3 px-4">Joined</th>
              <th className="py-3 px-4 text-right">Access Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filteredUsers.map((u) => (
              <tr key={u.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="font-bold text-stone-900 text-sm">{u.name}</div>
                  <span className="text-stone-400 font-mono text-[11px]">{u.email}</span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-full ${
                      u.role === 'admin'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {u.role === 'admin' ? <ShieldCheck size={12} /> : <User size={12} />}
                    <span className="capitalize">{u.role}</span>
                  </span>
                </td>
                <td className="py-3 px-4 font-bold text-stone-800">
                  Band {u.targetBand}
                </td>
                <td className="py-3 px-4 font-semibold text-stone-700">
                  {u.testsTaken} tests
                </td>
                <td className="py-3 px-4 text-stone-400">
                  {u.createdAt}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => toggleRole(u.id)}
                    className="text-xs font-semibold text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300 px-2.5 py-1 rounded-lg transition-all"
                  >
                    {u.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
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
