import ffmpeg from 'fluent-ffmpeg'
import { Readable } from 'stream'
import { CONFIG } from 'utils/config'

export async function ToMp3(id: string, stream: Readable, bitrate = CONFIG.BITRATE) {
  console.log('Convert to mp3', id)

  try {
    ffmpeg(stream).audioBitrate(bitrate).format('mp3').save(`${CONFIG.OUTPUT_FOLDER}/mp3/${id}.mp3`).on('error', console.error)
  } catch (error) {
    console.log('Unable to convert to mp3', id, error)
  }
}
