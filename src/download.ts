import { ToMp4 } from 'actions/ffmpeg'
import { GetVideoStream } from 'actions/youtube'
import { ReadStream } from 'fs'
import { CONFIG } from 'utils/config'

console.log('Running in', CONFIG.NODE_ENV, 'mode')

Run()

async function Run() {
  const youtubeId = 'ql082HLTndA'
  const stream = await GetVideoStream(youtubeId, 'highestaudio')
  if (!stream) return

  await ToMp4(youtubeId, stream as ReadStream)
}
