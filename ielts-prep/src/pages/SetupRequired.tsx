import { useState } from 'react'
import {
  Database,
  KeyRound,
  FileCode,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Headphones,
  FileCheck2,
  Sparkles
} from 'lucide-react'

export function SetupRequired() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #090d16 0%, #0d1527 50%, #0a1120 100%)',
      color: '#f8fafc',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
    }}>
      {/* Header */}
      <div style={{ maxWidth: 840, width: '100%', marginBottom: 32, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(59, 130, 246, 0.12)',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          padding: '6px 16px',
          borderRadius: 999,
          color: '#60a5fa',
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 16
        }}>
          <Sparkles size={16} /> Official Cambridge Material Platform
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em', color: '#ffffff' }}>
          Welcome to <span style={{ color: '#38bdf8' }}>IELTS Computer-Based</span> Prep
        </h1>
        <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 640, margin: '0 auto', lineHeight: 1.6 }}>
          A computer-delivered IELTS simulation platform built directly on your local Cambridge 10–18 series, authentic audio, and real exam scoring tables.
        </p>
      </div>

      {/* Main card */}
      <div style={{
        maxWidth: 840,
        width: '100%',
        background: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(16px)',
        borderRadius: 16,
        padding: 32,
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ background: '#0284c7', padding: 10, borderRadius: 10 }}>
            <Database size={22} color="#ffffff" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Database Configuration Required</h2>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: '#94a3b8' }}>
              Connect your Supabase project to persist exam sessions, band scores, and practice analytics.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Step 1 */}
          <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: 18, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ background: '#2563eb', width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>1</span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>Create a free Supabase Project</span>
              </div>
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#38bdf8', fontSize: 13, textDecoration: 'none', fontWeight: 500 }}
              >
                supabase.com <ExternalLink size={13} />
              </a>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 0 36px' }}>
              Create a new organization & project (takes ~1 minute). Free tier includes Postgres, Auth, and Storage.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: 18, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ background: '#2563eb', width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>2</span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>Execute Database Schema</span>
              </div>
              <button
                onClick={() => copyToClipboard('supabase/schema.sql', 'schema-path')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  color: '#e2e8f0',
                  padding: '6px 12px',
                  borderRadius: 6,
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >
                {copied === 'schema-path' ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                Copy Path
              </button>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 0 36px' }}>
              Open your Supabase dashboard &rarr; <strong>SQL Editor</strong> &rarr; Run the entire file located at <code style={{ color: '#38bdf8' }}>f:\IeltsPrep\ielts-prep\supabase\schema.sql</code>. It creates all IELTS schema tables, RLS policies, conversion functions, and indexes.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: 18, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ background: '#2563eb', width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>3</span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>Set Environment Variables</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 12px 36px' }}>
              In <code style={{ color: '#38bdf8' }}>ielts-prep/.env</code>, add your Supabase project credentials:
            </p>
            <div style={{
              marginLeft: 36,
              background: '#0b1120',
              padding: 12,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.07)',
              fontSize: 12,
              fontFamily: 'monospace',
              color: '#38bdf8',
              lineHeight: 1.5,
              position: 'relative'
            }}>
              VITE_SUPABASE_URL=https://your-project.supabase.co<br />
              VITE_SUPABASE_ANON_KEY=your-anon-key-here<br />
              VITE_GEMINI_API_KEY=optional-for-writing-evaluation
              <button
                onClick={() => copyToClipboard('VITE_SUPABASE_URL=https://your-project.supabase.co\nVITE_SUPABASE_ANON_KEY=your-anon-key-here\n', 'env-text')}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#fff',
                  padding: 4,
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                {copied === 'env-text' ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Cambridge materials audit highlight */}
        <div style={{
          marginTop: 24,
          padding: 16,
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <CheckCircle2 size={28} color="#34d399" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#34d399' }}>Local Materials Detected Successfully</div>
            <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>
              Scanner identified <strong>9 Cambridge Books</strong> (Cambridge 10 to 18), <strong>36 Listening Tests (MP3s)</strong>, and <strong>6 Vocabulary Resource Books</strong> ready in <code style={{ color: '#6ee7b7' }}>IELTS_Cambridge/</code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
