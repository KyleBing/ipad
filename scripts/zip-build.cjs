const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

const archiveDir = path.join(__dirname, '../archive')
const distDir = path.join(__dirname, '../dist')
const date = new Date().toISOString().slice(0, 10)
const zipPath = path.join(archiveDir, `ipad-${date}.zip`)

if (!fs.existsSync(distDir)) {
  console.error('dist folder not found. Run build first.')
  process.exit(1)
}

if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true })
}

const output = fs.createWriteStream(zipPath)
const archive = archiver('zip', { zlib: { level: 9 } })

output.on('close', () => {
  console.log(`Created ${path.relative(process.cwd(), zipPath)} (${(archive.pointer() / 1024).toFixed(1)} KB)`)
})

archive.on('error', (err) => {
  console.error(err)
  process.exit(1)
})

archive.pipe(output)
archive.directory(distDir, false)
archive.finalize()
