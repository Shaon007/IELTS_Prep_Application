import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  LayoutDashboard, BookOpen, FileText, Library,
  TrendingUp, BookMarked, User, Search, LogOut,
  ChevronLeft, Settings, ShieldCheck, Menu, X
} from 'lucide-react'
import { useAuthStore, useIsAdmin } from '@/stores/authStore'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/practice', icon: BookOpen, label: 'Practice' },
  { to: '/mock-tests', icon: FileText, label: 'Mock Tests' },
  { to: '/materials', icon: Library, label: 'Materials' },
  { to: '/progress', icon: TrendingUp, label: 'Progress' },
  { to: '/vocabulary', icon: BookMarked, label: 'Vocabulary' },
]

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { signOut, profile } = useAuthStore()
  const isAdmin = useIsAdmin()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-stone-50)' }}>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
            zIndex: 40, display: 'none'
          }}
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: collapsed ? 64 : 220,
          minWidth: collapsed ? 64 : 220,
          background: 'white',
          borderRight: '1px solid var(--color-stone-200)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.2s ease, min-width 0.2s ease',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 30,
          flexShrink: 0,
        }}
      >
        {/* Logo area */}
        <div style={{
          padding: '1.25rem 1rem',
          borderBottom: '1px solid var(--color-stone-100)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 60,
        }}>
          {!collapsed && (
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-teal-700)', letterSpacing: '-0.01em' }}>
                IELTS Practice
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-stone-400)', marginTop: 1 }}>
                Computer-Based
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-stone-500)', padding: 4, borderRadius: 4,
              display: 'flex', alignItems: 'center',
            }}
          >
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn('sidebar-item', isActive && 'active')
              }
              title={collapsed ? label : undefined}
              style={{ justifyContent: collapsed ? 'center' : undefined }}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}

          {/* Search */}
          <NavLink
            to="/search"
            className={({ isActive }) => cn('sidebar-item', isActive && 'active')}
            style={{ justifyContent: collapsed ? 'center' : undefined }}
            title={collapsed ? 'Search' : undefined}
          >
            <Search size={18} style={{ flexShrink: 0 }} />
            {!collapsed && <span>Search</span>}
          </NavLink>
        </nav>

        {/* Bottom section */}
        <div style={{
          padding: '0.75rem 0.5rem',
          borderTop: '1px solid var(--color-stone-100)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) => cn('sidebar-item', isActive && 'active')}
              style={{ justifyContent: collapsed ? 'center' : undefined }}
              title={collapsed ? 'Admin' : undefined}
            >
              <ShieldCheck size={18} style={{ flexShrink: 0 }} />
              {!collapsed && <span style={{ fontSize: '0.8rem' }}>Admin</span>}
            </NavLink>
          )}
          <NavLink
            to="/profile"
            className={({ isActive }) => cn('sidebar-item', isActive && 'active')}
            style={{ justifyContent: collapsed ? 'center' : undefined }}
          >
            <User size={18} style={{ flexShrink: 0 }} />
            {!collapsed && (
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 120 }}>
                {profile?.display_name ?? profile?.email ?? 'Profile'}
              </span>
            )}
          </NavLink>
          <button
            onClick={handleSignOut}
            className="sidebar-item"
            style={{ justifyContent: collapsed ? 'center' : undefined, width: '100%', textAlign: 'left' }}
          >
            <LogOut size={18} style={{ flexShrink: 0 }} />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
        <Outlet />
      </main>
    </div>
  )
}
