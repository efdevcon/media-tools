import fs from 'fs'
import { CONFIG } from 'utils/config'

export async function DownloadSlides(id: string) {
  const res = await fetch(`https://docs.google.com/presentation/d/${id}/export/pdf?opts=shs%3D0`)
  const arr = await res.arrayBuffer()
  const buffer = Buffer.from(arr)

  if (buffer.length > 3125) {
    fs.writeFileSync(`${CONFIG.OUTPUT_FOLDER}/${id}.pdf`, buffer)
  } else {
    console.log('Invalid slides', id)
  }
}

export function getSlidesId(url: string): string {
  let id = url
  id = id.replace('https://docs.google.com/presentation/d/', '')
  id = id.replace('/edit?usp=sharing', '')
  id = id.replace('/edit#slide=id.p', '')
  id = id.replace('/edit#slide=id.g13737362dea_0_1', '')
  id = id.replace('/edit?usp=drive_web&ouid=114193972392563644912', '')
  id = id.replace('/edit#slide=id.g14286fcf6b3_0_92', '')
  id = id.replace('/edit#slide=id.p1', '')
  id = id.replace('/edit#slide=id.g1433c566fdb_1_78', '')
  id = id.replace('/edit#slide=id.p1', '')
  id = id.replace('/edit#slide=id.p1', '')
  id = id.replace('/edit', '')

  return id
}
