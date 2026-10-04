import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { UserPlus } from 'lucide-react'

export function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      setLoading(false)
      return
    }

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name },
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    if (data.session) {
      // Auto-confirmed (e.g., email confirmation disabled)
      navigate('/dashboard')
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--color-stone-50)', padding: '2rem',
      }}>
        <div style={{ maxWidth: 400, width: '100%' }}>
          <div className="card card-lg" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✉️</div>
            <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
              Check your email
            </h2>
            <p style={{ color: 'var(--color-stone-600)', margin: '0 0 1.5rem', fontSize: '0.875rem' }}>
              We've sent a confirmation link to <strong>{email}</strong>.
              Click the link to activate your account.
            </p>
            <Link to="/login" style={{ color: 'var(--color-teal-600)', fontWeight: 500, fontSize: '0.875rem' }}>
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.625rem 0.75rem',
    border: '1px solid var(--color-stone-300)',
    borderRadius: 6, fontSize: '0.875rem',
    background: 'white', color: 'var(--color-stone-900)',
    outline: 'none', boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.875rem', fontWeight: 500,
    color: 'var(--color-stone-700)', marginBottom: '0.375rem',
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--color-stone-50)', padding: '2rem',
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-teal-700)', letterSpacing: '-0.02em' }}>
            IELTS Practice
          </div>
          <div style={{ color: 'var(--color-stone-500)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            Computer-Based Training Platform
          </div>
        </div>

        <div className="card card-lg">
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-stone-900)', marginBottom: '1.5rem', marginTop: 0 }}>
            Create account
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={labelStyle}>Your name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} autoComplete="name" placeholder="Full name" />
            </div>
            <div>
              <label style={labelStyle}>Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} autoComplete="email" />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} autoComplete="new-password" placeholder="At least 8 characters" />
            </div>

            {error && (
              <div style={{ padding: '0.625rem 0.75rem', background: '#fee2e2', color: '#991b1b', borderRadius: 6, fontSize: '0.875rem' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '0.75rem',
                background: 'var(--color-teal-600)', color: 'white',
                border: 'none', borderRadius: 6, fontSize: '0.875rem',
                fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                marginTop: '0.5rem',
              }}
            >
              <UserPlus size={16} />
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          </form>

          <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-stone-600)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--color-teal-600)', fontWeight: 500 }}>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
