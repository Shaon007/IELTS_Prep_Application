import { useEffect, useRef, useState, useCallback } from 'react'
import { calculateTimeRemaining, formatTime } from '@/lib/scoring'

interface UseExamTimerOptions {
  startedAt: string         // ISO timestamp from server
  timeLimitSeconds: number  // total allowed seconds
  onExpire?: () => void     // called when time hits 0
  paused?: boolean          // only valid in practice mode
}

interface TimerState {
  remainingSeconds: number
  formattedTime: string
  isExpired: boolean
  isWarning: boolean  // <= 5 minutes
  isCritical: boolean // <= 1 minute
  percentage: number  // 0-100, how much time remains
}

/**
 * Authoritative exam timer.
 *
 * The remaining time is calculated from server timestamps, NOT from
 * a decrementing counter. This means refreshing the browser cannot
 * reset or gain extra time.
 *
 * The setInterval here is ONLY for triggering re-renders every second.
 * The actual time value is always computed from (now - startedAt).
 */
export function useExamTimer({
  startedAt,
  timeLimitSeconds,
  onExpire,
  paused = false,
}: UseExamTimerOptions): TimerState {
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  const computeState = useCallback((): TimerState => {
    const remaining = paused ? timeLimitSeconds : calculateTimeRemaining(startedAt, timeLimitSeconds)
    const isExpired = remaining <= 0
    const isWarning = remaining <= 5 * 60 && !isExpired
    const isCritical = remaining <= 60 && !isExpired

    return {
      remainingSeconds: Math.max(0, remaining),
      formattedTime: formatTime(Math.max(0, remaining)),
      isExpired,
      isWarning,
      isCritical,
      percentage: Math.max(0, (remaining / timeLimitSeconds) * 100),
    }
  }, [startedAt, timeLimitSeconds, paused])

  const [state, setState] = useState<TimerState>(computeState)
  const expiredRef = useRef(false)

  useEffect(() => {
    if (paused) return

    const tick = () => {
      const newState = computeState()
      setState(newState)

      if (newState.isExpired && !expiredRef.current) {
        expiredRef.current = true
        onExpireRef.current?.()
      }
    }

    tick() // Immediate update
    const interval = setInterval(tick, 500) // 500ms for precision

    return () => clearInterval(interval)
  }, [computeState, paused])

  return state
}

/**
 * Simple countdown timer for section transitions
 */
export function useCountdown(seconds: number, onComplete?: () => void) {
  const [remaining, setRemaining] = useState(seconds)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (remaining <= 0) {
      onCompleteRef.current?.()
      return
    }

    const timeout = setTimeout(() => {
      setRemaining((r) => r - 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [remaining])

  return remaining
}
