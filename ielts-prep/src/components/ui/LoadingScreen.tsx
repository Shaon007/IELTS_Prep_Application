export function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-stone-50)',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '2px solid var(--color-stone-200)',
        borderTopColor: 'var(--color-teal-500)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <span style={{ fontSize: '0.875rem', color: 'var(--color-stone-500)' }}>
        Loading…
      </span>
    </div>
  )
}
