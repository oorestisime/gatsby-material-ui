const sharp = require('sharp')
const glob = require('glob')
const fs = require('fs-extra')

const matches = glob.sync('src/md/**/*.{png,jpg,jpeg}')

Promise.all(
  matches.map(async match => {
    const stream = sharp(match)
    const info = await stream.metadata()

    if (info.width < 1000) {
      return
    }

    const optimizedName = match.replace(/(\..+)$/, (match, ext) => {
      return `-optimized${ext}`
    })

    await stream.resize(1000).jpeg({ quality: 70 }).toFile(
      optimizedName
    )

    return fs.rename(optimizedName, match)
  })
)