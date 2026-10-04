import { countWords } from '@/lib/scoring'
import { useEffect, useRef, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

const AUTOSAVE_DEBOUNCE = 3000 // 3 seconds

interface UseWritingEditorOptions {
  attemptId: string
  writingTaskId: string
  minWords: number
  examMode: boolean
  initialText?: string
}

interface WritingEditorState {
  text: string
  wordCount: number
  isBelowMinimum: boolean
  isWarning: boolean // below 80% of minimum
  saveStatus: 'idle' | 'saving' | 'saved' | 'error' | 'offline'
  lastSavedAt: Date | null
}

export function useWritingEditor({
  attemptId,
  writingTaskId,
  minWords,
  examMode,
  initialText = '',
}: UseWritingEditorOptions) {
  // Load from localStorage first (crash recovery)
  const localKey = `writing-${attemptId}-${writingTaskId}`
  const localText = typeof window !== 'undefined' ? localStorage.getItem(localKey) : null

  const [text, setText] = useState(localText ?? initialText)
  const [saveStatus, setSaveStatus] = useState<WritingEditorState['saveStatus']>('idle')
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isOnlineRef = useRef(navigator.onLine)

  const wordCount = countWords(text)
  const isBelowMinimum = wordCount < minWords
  const isWarning = wordCount < minWords * 0.8 && wordCount > 0

  // Online/offline detection
  useEffect(() => {
    const onOnline = () => { isOnlineRef.current = true }
    const onOffline = () => {
      isOnlineRef.current = false
      setSaveStatus('offline')
    }
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  const saveToServer = useCallback(async (value: string) => {
    if (!isOnlineRef.current) {
      setSaveStatus('offline')
      return
    }

    setSaveStatus('saving')
    try {
      const wc = countWords(value)
      const { error } = await supabase
        .from('writing_responses')
        .upsert({
          attempt_id: attemptId,
          writing_task_id: writingTaskId,
          response_text: value,
          word_count: wc,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'attempt_id,writing_task_id' })

      if (error) throw error
      setSaveStatus('saved')
      setLastSavedAt(new Date())
    } catch {
      setSaveStatus('error')
    }
  }, [attemptId, writingTaskId])

  const handleChange = useCallback((value: string) => {
    // In exam mode, prevent paste from outside (handled at DOM level)
    setText(value)

    // Always save to localStorage immediately (crash recovery)
    localStorage.setItem(localKey, value)

    // Debounce server save
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      saveToServer(value)
    }, AUTOSAVE_DEBOUNCE)
  }, [localKey, saveToServer])

  // Save on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
      if (text !== (localText ?? initialText)) {
        saveToServer(text)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const clearLocalBackup = useCallback(() => {
    localStorage.removeItem(localKey)
  }, [localKey])

  return {
    text,
    handleChange,
    wordCount,
    isBelowMinimum,
    isWarning,
    saveStatus,
    lastSavedAt,
    clearLocalBackup,
  }
}

/**
 * Check if a local writing backup exists (for crash recovery)
 */
export function checkWritingBackup(attemptId: string, writingTaskId: string): string | null {
  const key = `writing-${attemptId}-${writingTaskId}`
  return localStorage.getItem(key)
}
