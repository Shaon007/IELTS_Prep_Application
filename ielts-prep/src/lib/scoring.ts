/**
 * IELTS Band Score Conversion
 * Source: Official Cambridge IELTS band score conversion tables
 * Version: cambridge_2024
 *
 * These are the standard conversion tables used by Cambridge Assessment English.
 * Raw scores are converted to band scores on the IELTS 0–9 scale.
 */

// Listening: 40 questions, each worth 1 mark
export const LISTENING_BAND_CONVERSION: Record<number, number> = {
  39: 9.0, 40: 9.0,
  37: 8.5, 38: 8.5,
  35: 8.0, 36: 8.0,
  32: 7.5, 33: 7.5, 34: 7.5,
  30: 7.0, 31: 7.0,
  26: 6.5, 27: 6.5, 28: 6.5, 29: 6.5,
  23: 6.0, 24: 6.0, 25: 6.0,
  18: 5.5, 19: 5.5, 20: 5.5, 21: 5.5, 22: 5.5,
  16: 5.0, 17: 5.0,
  13: 4.5, 14: 4.5, 15: 4.5,
  10: 4.0, 11: 4.0, 12: 4.0,
  8: 3.5, 9: 3.5,
  6: 3.0, 7: 3.0,
  4: 2.5, 5: 2.5,
  3: 2.0,
  2: 1.5,
  1: 1.0,
  0: 0.0,
}

// Reading Academic: 40 questions
export const READING_BAND_CONVERSION: Record<number, number> = {
  39: 9.0, 40: 9.0,
  37: 8.5, 38: 8.5,
  35: 8.0, 36: 8.0,
  33: 7.5, 34: 7.5,
  30: 7.0, 31: 7.0, 32: 7.0,
  27: 6.5, 28: 6.5, 29: 6.5,
  23: 6.0, 24: 6.0, 25: 6.0, 26: 6.0,
  19: 5.5, 20: 5.5, 21: 5.5, 22: 5.5,
  15: 5.0, 16: 5.0, 17: 5.0, 18: 5.0,
  13: 4.5, 14: 4.5,
  10: 4.0, 11: 4.0, 12: 4.0,
  8: 3.5, 9: 3.5,
  6: 3.0, 7: 3.0,
  4: 2.5, 5: 2.5,
  3: 2.0,
  2: 1.5,
  1: 1.0,
  0: 0.0,
}

export const SCORE_CONVERSION_VERSION = 'cambridge_2024'

/**
 * Convert a raw Listening score to IELTS band
 */
export function listeningRawToBand(raw: number): number {
  // Clamp to valid range
  const clamped = Math.max(0, Math.min(40, Math.round(raw)))
  // Find the highest raw score key that is <= clamped
  const keys = Object.keys(LISTENING_BAND_CONVERSION)
    .map(Number)
    .sort((a, b) => b - a)
  for (const key of keys) {
    if (clamped >= key) {
      return LISTENING_BAND_CONVERSION[key]
    }
  }
  return 0
}

/**
 * Convert a raw Reading score to IELTS band
 */
export function readingRawToBand(raw: number): number {
  const clamped = Math.max(0, Math.min(40, Math.round(raw)))
  const keys = Object.keys(READING_BAND_CONVERSION)
    .map(Number)
    .sort((a, b) => b - a)
  for (const key of keys) {
    if (clamped >= key) {
      return READING_BAND_CONVERSION[key]
    }
  }
  return 0
}

/**
 * Calculate overall band from individual section bands
 * IELTS rounds to nearest 0.5
 */
export function calculateOverallBand(
  listening?: number,
  reading?: number,
  writingLow?: number,
  writingHigh?: number
): number | undefined {
  const scores: number[] = []
  if (listening !== undefined) scores.push(listening)
  if (reading !== undefined) scores.push(reading)
  // For writing, use midpoint of estimate
  if (writingLow !== undefined && writingHigh !== undefined) {
    scores.push((writingLow + writingHigh) / 2)
  }
  if (scores.length === 0) return undefined

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length
  // Round to nearest 0.5
  return Math.round(avg * 2) / 2
}

/**
 * Get a descriptive label for a band score
 */
export function bandDescription(band: number): string {
  if (band >= 8.5) return 'Expert'
  if (band >= 7.5) return 'Very Good'
  if (band >= 6.5) return 'Competent'
  if (band >= 5.5) return 'Modest'
  if (band >= 4.5) return 'Limited'
  if (band >= 3.5) return 'Extremely Limited'
  return 'Intermittent'
}

/**
 * Get CSS class for a band score
 */
export function bandColorClass(band: number): string {
  if (band >= 8) return 'band-9'
  if (band >= 7) return 'band-7'
  if (band >= 6) return 'band-6'
  if (band >= 5) return 'band-5'
  if (band >= 4) return 'band-4'
  return 'band-low'
}

/**
 * Count words using IELTS-standard word counting rules
 * - Contractions count as one word (don't = 1)
 * - Hyphenated words count as one word (well-known = 1)
 * - Numbers count as one word (2024 = 1)
 * - Punctuation is not counted
 */
export function countWords(text: string): number {
  if (!text || text.trim() === '') return 0

  // Normalize whitespace
  const normalized = text
    .replace(/[\r\n\t]+/g, ' ')
    .trim()

  if (normalized === '') return 0

  // Split on whitespace and filter empty strings
  const words = normalized
    .split(/\s+/)
    .filter(word => {
      // Remove pure punctuation tokens
      const stripped = word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
      return stripped.length > 0
    })

  return words.length
}

/**
 * Format seconds as MM:SS
 */
export function formatTime(seconds: number): string {
  if (seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Calculate time remaining from server-authoritative timestamps
 */
export function calculateTimeRemaining(
  startedAt: string,
  timeLimitSeconds: number
): number {
  const startMs = new Date(startedAt).getTime()
  const nowMs = Date.now()
  const elapsedSeconds = (nowMs - startMs) / 1000
  return Math.max(0, timeLimitSeconds - elapsedSeconds)
}

/**
 * Default time limits in seconds
 */
export const DEFAULT_TIME_LIMITS = {
  listening: 30 * 60,  // 30 minutes
  reading: 60 * 60,    // 60 minutes
  writing: 60 * 60,    // 60 minutes
} as const

/**
 * Minimum word counts
 */
export const MIN_WORDS = {
  task1: 150,
  task2: 250,
} as const
