import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, LogIn } from 'lucide-react'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    navigate('/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-stone-50)',
      padding: '2rem',
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--color-teal-700)',
            letterSpacing: '-0.02em',
          }}>
            IELTS Practice
          </div>
          <div style={{ color: 'var(--color-stone-500)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            Computer-Based Training Platform
          </div>
        </div>

        <div className="card card-lg">
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--color-stone-900)',
            marginBottom: '1.5rem',
            marginTop: 0,
          }}>
            Sign in
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-stone-700)', marginBottom: '0.375rem' }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                style={{
                  width: '100%', padding: '0.625rem 0.75rem',
                  border: '1px solid var(--color-stone-300)',
                  borderRadius: 6, fontSize: '0.875rem',
                  background: 'white', color: 'var(--color-stone-900)',
                  outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-teal-500)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-stone-300)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-stone-700)', marginBottom: '0.375rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{
                    width: '100%', padding: '0.625rem 2.5rem 0.625rem 0.75rem',
                    border: '1px solid var(--color-stone-300)',
                    borderRadius: 6, fontSize: '0.875rem',
                    background: 'white', color: 'var(--color-stone-900)',
                    outline: 'none', boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-teal-500)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-stone-300)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-stone-400)', padding: 2,
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{
                padding: '0.625rem 0.75rem',
                background: '#fee2e2',
                color: '#991b1b',
                borderRadius: 6,
                fontSize: '0.875rem',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--color-teal-600)',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '0.5rem',
              }}
            >
              <LogIn size={16} />
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div style={{
            marginTop: '1.25rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: 'var(--color-stone-600)',
          }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'var(--color-teal-600)', fontWeight: 500 }}>
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
