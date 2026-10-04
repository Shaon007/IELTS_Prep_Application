import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// Custom Vite plugin to stream local Cambridge IELTS audio MP3 files
function ieltsAudioPlugin() {
  const audioDir = path.resolve(__dirname, '../IELTS_Cambridge')

  return {
    name: 'ielts-audio-streamer',
    configureServer(server: any) {
      server.middlewares.use('/audio', (req: any, res: any, next: any) => {
        try {
          const decodedUrl = decodeURIComponent(req.url || '')
          let relPath = decodedUrl.replace(/^\//, '')
          let filePath = path.join(audioDir, relPath)

          // Smart resolution: if requested like /audio/c18-test-1 or /audio/c15-t2-l
          if (!fs.existsSync(filePath)) {
            const match = relPath.match(/(?:c|cambridge_?)(\d+)[-_]?(?:t|test)?(\d+)?/i)
            if (match) {
              const series = match[1]
              const testNum = match[2] || '1'
              const folder = `cambridge_${series}`
              const filename = `Cambridge_IELTS_${series}_-_Listening_Test_${testNum}.mp3`
              const candidate = path.join(audioDir, folder, filename)
              if (fs.existsSync(candidate)) {
                filePath = candidate
              }
            }
          }

          if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            return next()
          }

          const stat = fs.statSync(filePath)
          const fileSize = stat.size
          const range = req.headers.range

          res.setHeader('Content-Type', 'audio/mpeg')
          res.setHeader('Accept-Ranges', 'bytes')

          if (range) {
            const parts = range.replace(/bytes=/, '').split('-')
            const start = parseInt(parts[0], 10)
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
            const chunksize = end - start + 1
            const stream = fs.createReadStream(filePath, { start, end })

            res.writeHead(206, {
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Content-Length': chunksize,
            })
            stream.pipe(res)
          } else {
            res.writeHead(200, {
              'Content-Length': fileSize,
            })
            fs.createReadStream(filePath).pipe(res)
          }
        } catch (err) {
          next(err)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ieltsAudioPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    fs: {
      allow: ['..'],
    },
  },
})
