import type { Progress, Recommendation, Profile } from '@/types'

/**
 * Intelligent recommendation engine.
 *
 * Generates explainable, data-driven recommendations based on:
 * - Question type accuracy
 * - Section performance
 * - Band score targets vs current
 * - Completion history
 * - Recent attempt patterns
 */

interface RecommendationInput {
  progress: Progress
  profile: Profile
  recentResults: Array<{
    section: string
    type_scores: Record<string, { correct: number; total: number }>
    section_scores: Record<string, { correct: number; total: number }>
    band?: number
    created_at: string
  }>
}

type NewRecommendation = Omit<Recommendation, 'id' | 'created_at' | 'dismissed_at' | 'completed_at'>

export function generateRecommendations(input: RecommendationInput): NewRecommendation[] {
  const { progress, profile, recentResults } = input
  const recommendations: NewRecommendation[] = []
  const now = new Date()
  const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week

  // ================================================================
  // 1. Listening section performance
  // ================================================================
  const listeningSectionPerf = progress.listening_section_performance
  let worstListeningSection: string | null = null
  let worstListeningAccuracy = 1.0

  for (const [section, rawScore] of Object.entries(listeningSectionPerf)) {
    const score = rawScore as { correct: number; total: number }
    if (score && score.total > 0) {
      const accuracy = score.correct / score.total
      if (accuracy < worstListeningAccuracy) {
        worstListeningAccuracy = accuracy
        worstListeningSection = section
      }
    }
  }

  if (worstListeningSection && worstListeningAccuracy < 0.65) {
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'practice_session',
      title: `Focus: Listening Section ${worstListeningSection}`,
      description: `Your accuracy in Listening Section ${worstListeningSection} is ${Math.round(worstListeningAccuracy * 100)}%. Targeted practice will improve this.`,
      reason: `Section ${worstListeningSection} accuracy: ${Math.round(worstListeningAccuracy * 100)}% across ${listeningSectionPerf[worstListeningSection].total} questions.`,
      priority: 2,
      action_type: 'start_section',
      action_data: { section_type: 'listening', section_number: parseInt(worstListeningSection) },
      expires_at: expiresAt,
    })
  }

  // ================================================================
  // 2. Question type weaknesses
  // ================================================================
  const typePerf = progress.question_type_performance
  const weakTypes: Array<{ type: string; accuracy: number; total: number }> = []

  for (const [qType, rawScore] of Object.entries(typePerf)) {
    const score = rawScore as { correct: number; total: number }
    if (score && score.total >= 5) { // Only recommend if we have enough data
      const accuracy = score.correct / score.total
      if (accuracy < 0.60) {
        weakTypes.push({ type: qType, accuracy, total: score.total })
      }
    }
  }

  // Sort by worst accuracy
  weakTypes.sort((a, b) => a.accuracy - b.accuracy)

  const topWeakTypes = weakTypes.slice(0, 3)
  for (const weak of topWeakTypes) {
    const label = formatQuestionType(weak.type)
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'practice_session',
      title: `Practice: ${label}`,
      description: `Your accuracy on ${label} questions is ${Math.round(weak.accuracy * 100)}%. Focus practice recommended.`,
      reason: `${label} accuracy: ${Math.round(weak.accuracy * 100)}% across ${weak.total} questions attempted.`,
      priority: weak.accuracy < 0.45 ? 1 : 3,
      action_type: 'start_section',
      action_data: { question_type: weak.type, practice_mode: 'practice' },
      expires_at: expiresAt,
    })
  }

  // ================================================================
  // 3. Band gap analysis
  // ================================================================
  const listeningGap = profile.target_listening - (progress.avg_listening_band ?? 0)
  const readingGap = profile.target_reading - (progress.avg_reading_band ?? 0)

  if (listeningGap > 1.0 && progress.listening_attempts > 0) {
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'focus_area',
      title: 'Listening: Significant gap to target',
      description: `You need band ${profile.target_listening} in Listening. Your current average is ${progress.avg_listening_band?.toFixed(1) ?? 'unknown'}. That's a ${listeningGap.toFixed(1)} band gap.`,
      reason: `Target: ${profile.target_listening}. Current average: ${progress.avg_listening_band?.toFixed(1) ?? 'N/A'}`,
      priority: 1,
      action_type: 'start_section',
      action_data: { section_type: 'listening' },
      expires_at: expiresAt,
    })
  }

  if (readingGap > 1.0 && progress.reading_attempts > 0) {
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'focus_area',
      title: 'Reading: Significant gap to target',
      description: `You need band ${profile.target_reading} in Reading. Your current average is ${progress.avg_reading_band?.toFixed(1) ?? 'unknown'}.`,
      reason: `Target: ${profile.target_reading}. Current average: ${progress.avg_reading_band?.toFixed(1) ?? 'N/A'}`,
      priority: 1,
      action_type: 'start_section',
      action_data: { section_type: 'reading' },
      expires_at: expiresAt,
    })
  }

  // ================================================================
  // 4. Vocabulary recommendation (if reading is low)
  // ================================================================
  const hasReadingWeakness =
    (progress.avg_reading_band ?? 9) < profile.target_reading - 0.5

  const hasMatchingHeadingsWeak =
    typePerf['heading_matching']?.total > 0 &&
    typePerf['heading_matching'].correct / typePerf['heading_matching'].total < 0.55

  if (hasReadingWeakness || hasMatchingHeadingsWeak) {
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'vocabulary',
      title: 'Review academic vocabulary',
      description: 'Your Reading performance suggests vocabulary may be a limiting factor. Review the academic word list and passage vocabulary.',
      reason: hasMatchingHeadingsWeak
        ? 'Matching Headings accuracy is low — this often correlates with unfamiliar vocabulary.'
        : `Reading band (${progress.avg_reading_band?.toFixed(1) ?? 'N/A'}) is below your target.`,
      priority: 4,
      action_type: 'vocabulary',
      action_data: {},
      expires_at: expiresAt,
    })
  }

  // ================================================================
  // 5. Writing encouragement
  // ================================================================
  if (progress.writing_attempts === 0 && progress.total_attempts > 0) {
    recommendations.push({
      user_id: profile.id,
      recommendation_type: 'practice_session',
      title: 'Try a Writing task',
      description: `You haven't attempted any Writing tasks yet. Writing is worth 25% of your IELTS score.`,
      reason: 'No writing attempts recorded.',
      priority: 5,
      action_type: 'start_section',
      action_data: { section_type: 'writing' },
      expires_at: expiresAt,
    })
  }

  // ================================================================
  // 6. Declining performance
  // ================================================================
  if (recentResults.length >= 3) {
    const recent = recentResults.slice(0, 3)
    const bands = recent.map((r) => r.band).filter((b): b is number => b !== undefined)
    if (bands.length >= 3) {
      const declining = bands[0] < bands[1] && bands[1] < bands[2]
      if (declining) {
        recommendations.push({
          user_id: profile.id,
          recommendation_type: 'focus_area',
          title: 'Recent performance declining',
          description: `Your scores have been declining over recent attempts (${bands.map(b => b.toFixed(1)).join(' → ')}). Consider reviewing fundamentals and taking a break before attempting again.`,
          reason: `Declining trend: ${bands.map(b => b.toFixed(1)).join(' → ')}`,
          priority: 2,
          action_type: 'start_section',
          action_data: { practice_mode: 'practice' },
          expires_at: expiresAt,
        })
      }
    }
  }

  // Sort by priority (1 = highest)
  return recommendations.sort((a, b) => a.priority - b.priority).slice(0, 5)
}

function formatQuestionType(type: string): string {
  return type
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
