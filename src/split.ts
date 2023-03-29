import { Split } from 'actions/ffmpeg'
import { GetVideoStream } from 'actions/youtube'
import { ReadStream } from 'fs'
import { CONFIG } from 'utils/config'

console.log('Running in', CONFIG.NODE_ENV, 'mode')

Run()

async function Run() {
  const youtubeId = 'ql082HLTndA'
  const stream = await GetVideoStream(youtubeId, 'highestaudio')
  if (!stream) return
  await Split(stream as ReadStream, [
    { id: '1', start: 10, end: 20 },
    { id: '2', start: 50, end: 100 },
    { id: '3', start: 120, end: 200 },
  ])

  // Livepeer HLS - ETHPorto test
  // await Split('https://livepeercdn.studio/recordings/77180430-07d8-46e9-a85c-92bcdbdab138/index.m3u8', [
  //   { id: 'rekt', start: 1410, end: 1804 },
  //   { id: 'polkamarkets', start: 1863, end: 2903 },
  // ])
}
