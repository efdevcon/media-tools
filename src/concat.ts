import concat from 'ffmpeg-concat'
import { join } from 'path'
import { CONFIG } from 'utils/config'

async function run() {
  const out = join(CONFIG.OUTPUT_FOLDER, 'mp4', 'out.mp4')
  const intro = join(CONFIG.INPUT_FOLDER, 'intro.mp4')
  const video = join(CONFIG.INPUT_FOLDER, 'video.mp4')

  await concat({
    output: out,
    videos: [intro, video],
    transition: {
      name: 'directionalwipe', // Options: fade, directionalwipe, circleopen, squareswire
      duration: 750,
    },
  })
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
