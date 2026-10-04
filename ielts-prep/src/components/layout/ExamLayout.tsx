import { Outlet } from 'react-router-dom'

/**
 * Exam layout — minimal, distraction-free shell.
 * The exam header/footer are rendered inside each exam page
 * so they can be context-aware.
 */
export function ExamLayout() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f8' }}>
      <Outlet />
    </div>
  )
}
