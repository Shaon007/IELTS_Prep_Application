import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore, useIsAdmin } from '@/stores/authStore'

export function AdminRoute() {
  const { user } = useAuthStore()
  const isAdmin = useIsAdmin()

  if (!user) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/dashboard" replace />
  return <Outlet />
}
