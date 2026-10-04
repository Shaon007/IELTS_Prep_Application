import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BookOpen, Settings, Users, Headphones, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const ADMIN_NAV = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/books', icon: BookOpen, label: 'Books & Tests' },
  { to: '/admin/audio', icon: Headphones, label: 'Audio Files' },
  { to: '/admin/users', icon: Users, label: 'Users' },
]

export function AdminLayout() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-stone-50)' }}>
      {/* Admin sidebar */}
      <aside style={{
        width: 220,
        background: 'var(--color-stone-900)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        flexShrink: 0,
      }}>
        <div style={{ padding: '1.25rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-teal-400)' }}>
            IELTS Admin
          </div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
            Content Management
          </div>
        </div>

        <nav style={{ flex: 1, padding: '0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {ADMIN_NAV.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  'sidebar-item',
                  isActive
                    ? 'bg-teal-900 text-teal-300'
                    : 'text-stone-400 hover:bg-stone-800 hover:text-white'
                )
              }
              style={{ color: undefined }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div style={{ padding: '0.75rem 0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => navigate('/dashboard')}
            className="sidebar-item"
            style={{ color: 'rgba(255,255,255,0.5)', width: '100%', textAlign: 'left' }}
          >
            <ArrowLeft size={16} />
            <span>Back to App</span>
          </button>
        </div>
      </aside>

      {/* Admin content */}
      <main style={{ flex: 1, minWidth: 0 }}>
        <Outlet />
      </main>
    </div>
  )
}
