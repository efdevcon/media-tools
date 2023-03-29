import { Concat } from 'actions/ffmpeg'
import { join } from 'path'
import { CONFIG } from 'utils/config'

async function run() {
  await Concat([join(CONFIG.INPUT_FOLDER, 'intro.mp4'), join(CONFIG.INPUT_FOLDER, 'rekt.mp4')], join(CONFIG.OUTPUT_FOLDER, 'mp4', 'porto-out.mp4'))
}

run()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
