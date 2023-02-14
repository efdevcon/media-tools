import ytdl from 'ytdl-core'

export async function GetVideoInfo(id: string) {
  console.log('Get YouTube video info', id)
  return await ytdl.getInfo(id)
}

export async function GetVideoStream(id: string, quality: 'highestvideo' | 'highestaudio' = 'highestvideo') {
  console.log('Get YouTube video stream', id)

  try {
    return ytdl(id, {
      quality: quality,
    })
  } catch (e) {
    console.log('Unable to fetch video stream', id, e)
  }
}

export async function UpdateMetadata(id: string, session: any) {
  console.log('Update YouTube metadata for', id)
}

export async function UploadThumbnail(id: string, thumbnail: string) {
  console.log('Upload YouTube thumbnail for', id)
}
