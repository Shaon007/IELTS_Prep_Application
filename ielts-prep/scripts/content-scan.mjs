#!/usr/bin/env node
/**
 * IELTS Content Scanner
 * Scans the IELTS_Cambridge folder and reports what it finds.
 * Run: node scripts/content-scan.mjs
 *
 * This does NOT modify any database.
 * It reports what content exists and flags any issues.
 */

import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

// Content root — adjust this path to your IELTS folder
const CONTENT_ROOT = join(__dirname, '..', '..', 'IELTS_Cambridge')

const CAMBRIDGE_SERIES_REGEX = /cambridge[_\s-]*ielts[_\s-]*(\d+)/i
const AUDIO_PATTERN = /listening.*test[_\s-]*(\d+)/i

async function scanDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true })
    return entries
  } catch {
    return []
  }
}

async function getFileStat(filePath) {
  try {
    return await stat(filePath)
  } catch {
    return null
  }
}

async function scanBook(folderPath, folderName) {
  const entries = await scanDirectory(folderPath)
  const files = entries.filter(e => e.isFile())

  const pdfs = files.filter(f => extname(f.name).toLowerCase() === '.pdf')
  const mp3s = files.filter(f => extname(f.name).toLowerCase() === '.mp3')

  // Extract series number from folder name
  const seriesMatch = folderName.match(/cambridge[_\s-]*(\d+)/i)
  const seriesNumber = seriesMatch ? parseInt(seriesMatch[1]) : null

  // Analyze audio files
  const audioAnalysis = []
  for (const mp3 of mp3s) {
    const testMatch = mp3.name.match(/test[_\s-]*(\d+)/i)
    const testNumber = testMatch ? parseInt(testMatch[1]) : null
    const fileStat = await getFileStat(join(folderPath, mp3.name))

    audioAnalysis.push({
      filename: mp3.name,
      testNumber,
      sizeMB: fileStat ? (fileStat.size / (1024 * 1024)).toFixed(1) : 'unknown',
      isPerTest: testNumber !== null,
      isPerSection: mp3.name.toLowerCase().includes('section') || mp3.name.toLowerCase().includes('part'),
    })
  }

  // Check for issues
  const warnings = []

  if (pdfs.length === 0) {
    warnings.push('⚠️  No PDF found')
  }
  if (pdfs.length > 2) {
    warnings.push(`⚠️  Multiple PDFs found (${pdfs.length}) — manual review needed`)
  }
  if (mp3s.length === 0) {
    warnings.push('⚠️  No audio files found')
  }
  if (mp3s.length > 4 && !audioAnalysis.some(a => a.isPerSection)) {
    warnings.push(`ℹ️  ${mp3s.length} audio files — check if these are per-section or per-test`)
  }

  // Audio structure analysis
  const isPerTestAudio = audioAnalysis.every(a => a.isPerTest && !a.isPerSection)
  const isPerSectionAudio = audioAnalysis.some(a => a.isPerSection)

  if (isPerTestAudio) {
    warnings.push(
      `ℹ️  Audio is per-test (${mp3s.length} files, 1 per test). ` +
      `Section timestamps must be set manually in admin.`
    )
  }

  return {
    folderName,
    folderPath,
    seriesNumber,
    slug: `cambridge-ielts-${seriesNumber ?? folderName.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`,
    title: `Cambridge IELTS ${seriesNumber ?? folderName} Academic`,
    pdfs: pdfs.map(f => f.name),
    mp3s: mp3s.map(f => f.name),
    audioAnalysis,
    isPerTestAudio,
    isPerSectionAudio,
    warnings,
    testsDetected: Math.max(...audioAnalysis.map(a => a.testNumber ?? 0), 0) || mp3s.length,
  }
}

async function main() {
  console.log('═══════════════════════════════════════════')
  console.log('  IELTS Content Scanner')
  console.log('═══════════════════════════════════════════')
  console.log(`📁 Content root: ${CONTENT_ROOT}`)
  console.log()

  const rootEntries = await scanDirectory(CONTENT_ROOT)
  if (rootEntries.length === 0) {
    console.error('❌ Content root not found or empty.')
    console.error(`   Expected: ${CONTENT_ROOT}`)
    console.error('   Check your folder path in scripts/content-scan.mjs')
    process.exit(1)
  }

  const bookFolders = rootEntries.filter(
    e => e.isDirectory() && /cambridge/i.test(e.name)
  )

  const rootFiles = rootEntries.filter(e => e.isFile())
  const rootPdfs = rootFiles.filter(f => extname(f.name).toLowerCase() === '.pdf')
  const rootMp3s = rootFiles.filter(f => extname(f.name).toLowerCase() === '.mp3')

  // Vocabulary PDFs in root
  const vocabPdfs = rootPdfs.filter(f =>
    f.name.toLowerCase().includes('vocab') ||
    f.name.toLowerCase().includes('word') ||
    f.name.toLowerCase().includes('idiom') ||
    f.name.toLowerCase().includes('phrase') ||
    f.name.toLowerCase().includes('mcq')
  )

  console.log('📚 CAMBRIDGE BOOKS FOUND:', bookFolders.length)
  console.log('📄 Root vocabulary PDFs:', vocabPdfs.length)
  console.log()

  const books = []
  let totalAudio = 0
  let totalPdfs = 0
  let allWarnings = []

  for (const folder of bookFolders.sort((a, b) => a.name.localeCompare(b.name))) {
    const book = await scanBook(join(CONTENT_ROOT, folder.name), folder.name)
    books.push(book)
    totalAudio += book.mp3s.length
    totalPdfs += book.pdfs.length
    allWarnings.push(...book.warnings.map(w => `[${book.folderName}] ${w}`))
  }

  // Report
  console.log('BOOKS:')
  console.log('──────────────────────────────────────────')
  for (const book of books) {
    console.log(`\n  📖 ${book.title}`)
    console.log(`     Folder: ${book.folderName}`)
    console.log(`     Series: Cambridge IELTS ${book.seriesNumber ?? '?'}`)
    console.log(`     Tests detected: ${book.testsDetected}`)
    console.log(`     PDFs: ${book.pdfs.length}`)
    console.log(`       ${book.pdfs.join('\n       ')}`)
    console.log(`     Audio: ${book.mp3s.length} files`)
    book.audioAnalysis.forEach(a => {
      console.log(`       ${a.filename} (${a.sizeMB} MB, Test ${a.testNumber ?? '?'})`)
    })
    if (book.warnings.length > 0) {
      book.warnings.forEach(w => console.log(`     ${w}`))
    }
  }

  console.log('\n──────────────────────────────────────────')
  console.log('SUMMARY:')
  console.log(`  Books: ${books.length}`)
  console.log(`  Total tests (estimated): ${books.reduce((s, b) => s + b.testsDetected, 0)}`)
  console.log(`  Total audio files: ${totalAudio}`)
  console.log(`  Total book PDFs: ${totalPdfs}`)
  console.log(`  Vocabulary PDFs (root): ${vocabPdfs.length}`)

  console.log('\nVOCABULARY MATERIALS:')
  vocabPdfs.forEach(f => console.log(`  📄 ${f.name}`))

  if (allWarnings.length > 0) {
    console.log('\n⚠️  WARNINGS:')
    allWarnings.forEach(w => console.log(`  ${w}`))
  }

  console.log('\n──────────────────────────────────────────')
  console.log('AUDIO ARCHITECTURE:')
  console.log('  All audio files are per-FULL-TEST (not per-section).')
  console.log('  You must set section timestamps in the Admin UI.')
  console.log('  Each test has 4 listening sections in a single MP3.')
  console.log('  Use: Admin → Books → [Book] → Audio → Set Timestamps')
  console.log()
  console.log('NEXT STEPS:')
  console.log('  1. Set up Supabase project at https://supabase.com')
  console.log('  2. Run the schema: supabase/schema.sql in the SQL editor')
  console.log('  3. Create .env from .env.example with your project credentials')
  console.log('  4. npm run dev')
  console.log('  5. Register as admin and use the Admin UI to import books')
  console.log('══════════════════════════════════════════')

  // Save scan result as JSON for the import script
  const result = {
    scannedAt: new Date().toISOString(),
    contentRoot: CONTENT_ROOT,
    books: books.map(b => ({
      folderName: b.folderName,
      folderPath: b.folderPath,
      seriesNumber: b.seriesNumber,
      slug: b.slug,
      title: b.title,
      pdfs: b.pdfs,
      mp3s: b.mp3s,
      testsDetected: b.testsDetected,
      isPerTestAudio: b.isPerTestAudio,
      warnings: b.warnings,
    })),
    vocabPdfs: vocabPdfs.map(f => f.name),
    summary: {
      totalBooks: books.length,
      totalAudio,
      totalPdfs,
      vocabPdfs: vocabPdfs.length,
      warnings: allWarnings.length,
    },
  }

  const { writeFile } = await import('fs/promises')
  await writeFile(
    join(__dirname, 'scan-result.json'),
    JSON.stringify(result, null, 2)
  )
  console.log('\n📋 Scan result saved to: scripts/scan-result.json')
}

main().catch(console.error)
