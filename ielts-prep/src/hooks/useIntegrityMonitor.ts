import { useEffect, useRef } from 'react'
import { useExamStore } from '@/stores/examStore'

interface UseIntegrityMonitorOptions {
  enabled: boolean // Only active during exam mode
}

/**
 * Monitors exam integrity events:
 * - Tab visibility changes
 * - Window focus/blur
 * - Fullscreen changes
 * - Copy/paste attempts
 *
 * Does NOT fail the exam on these events — only records them.
 */
export function useIntegrityMonitor({ enabled }: UseIntegrityMonitorOptions) {
  const logEvent = useExamStore((s) => s.logIntegrityEvent)
  const logRef = useRef(logEvent)
  logRef.current = logEvent

  useEffect(() => {
    if (!enabled) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        logRef.current({ type: 'tab_switch', details: 'Tab hidden' })
      }
    }

    const handleBlur = () => {
      logRef.current({ type: 'window_blur', details: 'Window lost focus' })
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        logRef.current({ type: 'fullscreen_exit', details: 'Fullscreen exited' })
      }
    }

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      logRef.current({ type: 'copy_attempt', details: 'Copy prevented' })
    }

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault()
      logRef.current({ type: 'paste_attempt', details: 'Paste prevented' })
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('paste', handlePaste)
    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('paste', handlePaste)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [enabled])
}

/**
 * Warn before leaving during an active exam
 */
export function useBeforeUnloadWarning(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = 'You have an active exam. Leaving will not end your session — your answers are saved.'
      return e.returnValue
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [enabled])
}

/**
 * Request fullscreen for exam mode
 */
export async function requestFullscreen(): Promise<boolean> {
  try {
    await document.documentElement.requestFullscreen()
    return true
  } catch {
    return false
  }
}

export function exitFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {})
  }
}

export function isFullscreenAvailable(): boolean {
  return !!document.documentElement.requestFullscreen
}
