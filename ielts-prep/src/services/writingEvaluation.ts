import { countWords } from '@/lib/scoring'
import type { WritingEvaluation, WritingFeedback } from '@/types'

/**
 * Rule-based writing evaluation.
 *
 * This is NOT a replacement for a human IELTS examiner.
 * It provides objective metrics and structural analysis.
 *
 * All evaluations are clearly marked as AI/automated estimates.
 */

interface TextMetrics {
  wordCount: number
  sentenceCount: number
  avgWordsPerSentence: number
  paragraphCount: number
  uniqueWords: number
  typeTokenRatio: number // lexical diversity
  longSentences: number // > 30 words
  shortSentences: number // < 5 words
  usesConnectives: boolean
  connectives: string[]
  topicSentences: boolean
  hasConclusion: boolean
  repeatedWords: string[]
  complexSentences: number // with subordinate clauses
  passiveVoice: number
}

const CONNECTIVES = [
  'however', 'furthermore', 'moreover', 'in addition', 'on the other hand',
  'in contrast', 'consequently', 'therefore', 'thus', 'as a result',
  'for example', 'for instance', 'in other words', 'in conclusion',
  'to summarize', 'firstly', 'secondly', 'thirdly', 'finally',
  'although', 'despite', 'nevertheless', 'whereas', 'while',
  'not only', 'but also', 'in terms of', 'with regard to',
]

const ACADEMIC_WORDS = [
  'analyze', 'analyse', 'approach', 'area', 'assessment', 'assume',
  'authority', 'available', 'benefit', 'concept', 'context', 'conclude',
  'consequent', 'consider', 'contribute', 'create', 'data', 'define',
  'demonstrate', 'environment', 'establish', 'estimate', 'evidence',
  'function', 'identify', 'impact', 'indicate', 'individual', 'interpret',
  'involved', 'issue', 'major', 'method', 'occur', 'percent', 'period',
  'policy', 'principle', 'process', 'require', 'research', 'respond',
  'section', 'significant', 'similar', 'source', 'specific', 'structure',
  'theory', 'significant', 'vary', 'whereas',
]

function analyzeText(text: string): TextMetrics {
  const words = text.split(/\s+/).filter((w) => w.length > 0)
  const wordCount = countWords(text)

  // Sentence detection
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3)

  const sentenceCount = sentences.length
  const avgWordsPerSentence = sentenceCount > 0 ? wordCount / sentenceCount : 0

  // Paragraphs
  const paragraphs = text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 10)
  const paragraphCount = paragraphs.length

  // Lexical diversity
  const lowerWords = words.map((w) => w.toLowerCase().replace(/[^a-z]/g, ''))
  const uniqueWords = new Set(lowerWords.filter((w) => w.length > 2)).size
  const typeTokenRatio = wordCount > 0 ? uniqueWords / wordCount : 0

  // Long/short sentences
  const longSentences = sentences.filter(
    (s) => s.split(/\s+/).length > 30
  ).length
  const shortSentences = sentences.filter(
    (s) => s.split(/\s+/).length < 5
  ).length

  // Connectives
  const lowerText = text.toLowerCase()
  const foundConnectives = CONNECTIVES.filter((c) => lowerText.includes(c))
  const usesConnectives = foundConnectives.length >= 3

  // Topic sentences (simplistic: first sentence of each paragraph)
  const topicSentences = paragraphCount >= 2

  // Conclusion
  const lastParagraph = paragraphs[paragraphs.length - 1]?.toLowerCase() ?? ''
  const hasConclusion =
    lastParagraph.includes('in conclusion') ||
    lastParagraph.includes('to conclude') ||
    lastParagraph.includes('in summary') ||
    lastParagraph.includes('to summarize') ||
    lastParagraph.includes('overall')

  // Repeated words (overuse)
  const wordFreq: Record<string, number> = {}
  lowerWords.forEach((w) => {
    if (w.length > 4) wordFreq[w] = (wordFreq[w] ?? 0) + 1
  })
  const repeatedWords = Object.entries(wordFreq)
    .filter(([, count]) => count > wordCount * 0.03) // > 3% frequency
    .map(([word]) => word)
    .slice(0, 5)

  // Complex sentences (with 'although', 'because', 'which', 'that', 'who', 'where')
  const complexSentences = sentences.filter((s) =>
    /\b(although|because|however|which|that|who|where|when|since|unless|while|whereas)\b/i.test(s)
  ).length

  // Passive voice (simplified detection)
  const passiveVoice = (text.match(/\b(is|are|was|were|been|being)\s+\w+ed\b/gi) ?? []).length

  return {
    wordCount,
    sentenceCount,
    avgWordsPerSentence,
    paragraphCount,
    uniqueWords,
    typeTokenRatio,
    longSentences,
    shortSentences,
    usesConnectives,
    connectives: foundConnectives,
    topicSentences,
    hasConclusion,
    repeatedWords,
    complexSentences,
    passiveVoice,
  }
}

function estimateLexicalResource(metrics: TextMetrics): number {
  let score = 5.0

  if (metrics.typeTokenRatio > 0.55) score += 1.0
  else if (metrics.typeTokenRatio > 0.45) score += 0.5
  else if (metrics.typeTokenRatio < 0.30) score -= 1.0

  if (metrics.repeatedWords.length > 4) score -= 0.5

  // Cap between 4 and 8 for rule-based
  return Math.max(4, Math.min(8, score))
}

function estimateGrammaticalAccuracy(metrics: TextMetrics): number {
  let score = 5.0

  // Variety in sentence structure
  if (metrics.complexSentences > metrics.sentenceCount * 0.4) score += 1.0
  else if (metrics.complexSentences < metrics.sentenceCount * 0.2) score -= 0.5

  // Too many very long sentences
  if (metrics.longSentences > metrics.sentenceCount * 0.3) score -= 0.5

  // Very short sentences
  if (metrics.shortSentences > metrics.sentenceCount * 0.3) score -= 0.5

  return Math.max(4, Math.min(8, score))
}

function estimateCoherence(metrics: TextMetrics): number {
  let score = 5.0

  if (metrics.usesConnectives) score += 1.0
  else if (metrics.connectives.length === 0) score -= 1.0

  if (metrics.topicSentences) score += 0.5
  if (metrics.hasConclusion) score += 0.5
  if (metrics.paragraphCount >= 4) score += 0.5
  else if (metrics.paragraphCount <= 1) score -= 1.0

  return Math.max(4, Math.min(8, score))
}

function estimateTaskAchievement(
  metrics: TextMetrics,
  minWords: number,
  taskType: 'task1' | 'task2'
): number {
  let score = 5.0

  // Word count impact
  if (metrics.wordCount >= minWords * 1.2) score += 0.5
  else if (metrics.wordCount < minWords) score -= 1.5
  else if (metrics.wordCount < minWords * 1.05) score -= 0.5

  // Structure
  if (taskType === 'task2') {
    if (metrics.paragraphCount >= 4) score += 0.5
    if (metrics.hasConclusion) score += 0.5
  }

  return Math.max(3, Math.min(8, score))
}

/**
 * Perform rule-based writing evaluation
 */
export function evaluateWritingRuleBased(
  text: string,
  minWords: number,
  taskType: 'task1' | 'task2'
): Omit<WritingEvaluation, 'id' | 'writing_response_id' | 'created_at'> {
  const metrics = analyzeText(text)

  const taskAchievement = estimateTaskAchievement(metrics, minWords, taskType)
  const coherenceCohesion = estimateCoherence(metrics)
  const lexicalResource = estimateLexicalResource(metrics)
  const grammaticalAccuracy = estimateGrammaticalAccuracy(metrics)

  const avgBand = (taskAchievement + coherenceCohesion + lexicalResource + grammaticalAccuracy) / 4
  const bandLow = Math.max(4, Math.floor(avgBand * 2) / 2 - 0.5)
  const bandHigh = Math.min(9, Math.ceil(avgBand * 2) / 2 + 0.5)

  // Build specific feedback
  const strengths: string[] = []
  const weaknesses: string[] = []
  const suggestions: string[] = []

  // Word count
  if (metrics.wordCount >= minWords * 1.1) {
    strengths.push(`Good length: ${metrics.wordCount} words (minimum ${minWords}).`)
  } else if (metrics.wordCount < minWords) {
    weaknesses.push(
      `Your response is ${metrics.wordCount} words, below the ${minWords}-word minimum. ` +
      `Examiners may penalize responses that are significantly shorter.`
    )
    suggestions.push(`Develop your ideas further. Add evidence, examples, or counterarguments.`)
  }

  // Paragraphing
  if (metrics.paragraphCount >= 4) {
    strengths.push(`Well-organized: ${metrics.paragraphCount} clear paragraphs.`)
  } else if (metrics.paragraphCount <= 2) {
    weaknesses.push(`Your response has only ${metrics.paragraphCount} paragraph(s). IELTS writing expects clear paragraph structure.`)
    suggestions.push(`Organize your essay into: Introduction → Body Paragraph 1 → Body Paragraph 2 → Conclusion.`)
  }

  // Connectives
  if (metrics.connectives.length >= 5) {
    strengths.push(`Good use of linking words: "${metrics.connectives.slice(0, 3).join('", "')}" etc.`)
  } else if (metrics.connectives.length <= 2) {
    weaknesses.push(`Limited use of cohesive devices. Found only: "${metrics.connectives.join('", "') || 'none'}".`)
    suggestions.push(
      `Use more connectives to link ideas: "Furthermore", "However", "In contrast", "Consequently", "For instance".`
    )
  }

  // Sentence variety
  if (metrics.avgWordsPerSentence > 35) {
    weaknesses.push(
      `Some sentences are very long (average ${Math.round(metrics.avgWordsPerSentence)} words/sentence). ` +
      `This can reduce clarity.`
    )
    suggestions.push(`Break very long sentences into two. Use a variety of sentence lengths.`)
  }

  if (metrics.complexSentences >= metrics.sentenceCount * 0.3) {
    strengths.push(`Good grammatical range: uses complex structures and subordinate clauses.`)
  } else if (metrics.complexSentences < metrics.sentenceCount * 0.15) {
    weaknesses.push(`Most sentences are simple structures. IELTS rewards variety in grammar.`)
    suggestions.push(`Use a mix of simple, compound, and complex sentences. Include clauses with "although", "despite", "which", "that".`)
  }

  // Lexical diversity
  if (metrics.typeTokenRatio > 0.5) {
    strengths.push(`Good lexical variety: relatively few repeated words.`)
  } else if (metrics.repeatedWords.length > 3) {
    weaknesses.push(
      `You over-use certain words: "${metrics.repeatedWords.slice(0, 3).join('", "')}". ` +
      `This limits your lexical score.`
    )
    suggestions.push(`Replace repeated words with synonyms. Use a thesaurus for key topic words.`)
  }

  // Conclusion
  if (taskType === 'task2' && !metrics.hasConclusion) {
    weaknesses.push(`No clear conclusion found. Task 2 essays should end with a concluding paragraph.`)
    suggestions.push(`Add a conclusion starting with "In conclusion," or "To conclude," that restates your main argument.`)
  }

  const feedback: WritingFeedback = {
    strengths,
    weaknesses,
    suggestions,
  }

  return {
    evaluation_source: 'rule_based',
    task_achievement: taskAchievement,
    coherence_cohesion: coherenceCohesion,
    lexical_resource: lexicalResource,
    grammatical_accuracy: grammaticalAccuracy,
    estimated_band_low: bandLow,
    estimated_band_high: bandHigh,
    feedback,
    word_count: metrics.wordCount,
    ai_disclaimer: 'AI ESTIMATE — NOT AN OFFICIAL IELTS SCORE. This evaluation uses automated text analysis and cannot replace a trained IELTS examiner.',
  }
}

/**
 * Evaluate using Google Gemini API
 */
export async function evaluateWritingWithGemini(
  text: string,
  prompt: string,
  taskType: 'task1' | 'task2',
  apiKey: string
): Promise<Omit<WritingEvaluation, 'id' | 'writing_response_id' | 'created_at'>> {
  const systemPrompt = `You are an experienced IELTS examiner evaluating a candidate's writing response.

Evaluate this ${taskType === 'task1' ? 'Task 1' : 'Task 2'} response using the four official IELTS criteria:
1. Task Achievement/Response (0-9)
2. Coherence and Cohesion (0-9)
3. Lexical Resource (0-9)
4. Grammatical Range and Accuracy (0-9)

WRITING TASK:
${prompt}

CANDIDATE'S RESPONSE:
${text}

Respond in JSON format:
{
  "task_achievement": <number 0-9 in 0.5 increments>,
  "coherence_cohesion": <number>,
  "lexical_resource": <number>,
  "grammatical_accuracy": <number>,
  "estimated_band_low": <number>,
  "estimated_band_high": <number>,
  "feedback": {
    "strengths": ["<specific strength with evidence from text>", ...],
    "weaknesses": ["<specific weakness with example from text>", ...],
    "suggestions": ["<actionable suggestion>", ...]
  }
}

Be specific. Quote from the candidate's text. Do not give generic advice.`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.3,
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`)
  }

  const data = await response.json()
  const content = data.candidates?.[0]?.content?.parts?.[0]?.text

  if (!content) throw new Error('No response from Gemini')

  const parsed = JSON.parse(content)

  return {
    evaluation_source: 'gemini',
    task_achievement: parsed.task_achievement,
    coherence_cohesion: parsed.coherence_cohesion,
    lexical_resource: parsed.lexical_resource,
    grammatical_accuracy: parsed.grammatical_accuracy,
    estimated_band_low: parsed.estimated_band_low,
    estimated_band_high: parsed.estimated_band_high,
    feedback: parsed.feedback,
    word_count: countWords(text),
    ai_disclaimer: 'AI ESTIMATE (Gemini) — NOT AN OFFICIAL IELTS SCORE. AI evaluation approximates examiner criteria but cannot replace trained human assessment.',
  }
}
