import concat from 'ffmpeg-concat'
import ffmpeg from 'fluent-ffmpeg'
import { CONFIG } from 'utils/config'
import { createReadStream, ReadStream } from 'fs'
import type editly from 'editly'

const getEditly = async (): Promise<typeof editly> => {
  const lib = await (eval(`import('editly')`) as Promise<{
    default: typeof import('editly')
  }>)
  return lib.default
}

export function ToStream(filepath: string) {
  return createReadStream(filepath, { encoding: 'utf8' })
}

export async function ToMp3(id: string, stream: ReadStream, bitrate = CONFIG.BITRATE) {
  console.log('Convert to mp3', id)

  try {
    ffmpeg(stream).audioBitrate(bitrate).format('mp3').save(`${CONFIG.OUTPUT_FOLDER}/mp3/${id}.mp3`).on('error', console.error)
  } catch (error) {
    console.log('Unable to convert to mp3', id, error)
  }
}

export async function ToMp4(id: string, stream: ReadStream) {
  console.log('Convert to mp4', id)

  try {
    ffmpeg(stream).format('mp4').save(`${CONFIG.OUTPUT_FOLDER}/mp4/${id}.mp4`).on('error', console.error)
  } catch (error) {
    console.log('Unable to convert to mp3', id, error)
  }
}

export async function Concat(inputs: string[], output: string) {
  const editly = await getEditly()
  await editly({
    fast: true,
    keepSourceAudio: true,
    outPath: output,
    defaults: {
      transition: {
        duration: 0.75,
        name: 'directionalwipe', // https://gl-transitions.com/gallery
      },
    },
    clips: inputs.map((input) => ({ layers: [{ type: 'video', path: input }] })),
  })

  // await concat({
  //   output: output,
  //   videos: inputs,
  //   transition: {
  //     name: 'directionalwipe', // Options: fade, directionalwipe, circleopen, squareswire
  //     duration: 750,
  //   },
  // })
}

export async function Split(stream: string | ReadStream, outputs: { id: string; start: number; end: number }[]) {
  console.log('Splitting to', outputs.length, 'videos')

  outputs.forEach((output) => {
    console.log('Split to', output.id, output.start, output.end)

    // TODO: Check if file already exists - if so, skip
    ffmpeg(stream)
      .setStartTime(output.start)
      .setDuration(output.end - output.start)
      .output(`${CONFIG.OUTPUT_FOLDER}/mp4/${output.id}.mp4`)
      .on('end', () => console.log(output.id, 'successfully converted')) // go to next once current run has ended
      .on('error', (e) => console.error('ERROR', e))
      .run()
  })
}
