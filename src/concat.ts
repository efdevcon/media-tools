import { Concat } from 'actions/ffmpeg'
import { join } from 'path'
import { CONFIG } from 'utils/config'

async function run() {
  Concat([join(CONFIG.INPUT_FOLDER, 'intro.mp4'), join(CONFIG.INPUT_FOLDER, 'video.mp4')], join(CONFIG.OUTPUT_FOLDER, 'mp4', 'out.mp4'))
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
