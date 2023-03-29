import fs from 'fs'
import { join } from 'path'

export function GetData(folder: string, fileExtension = '.json') {
  const files: any[] = []
  const dir = join(process.cwd(), folder)
  const items = fs.readdirSync(dir, { withFileTypes: true })

  for (const i of items) {
    if (i.isDirectory()) {
      const subFiles = GetData(join(folder, i.name), fileExtension)
      files.push(...subFiles)
    }

    if (i.isFile() && i.name.endsWith(fileExtension)) {
      const fullPath = join(dir, i.name)
      let file: any = {
        id: i.name.replace(fileExtension, ''),
        fileSize: fs.statSync(fullPath).size,
      }

      if (fileExtension === '.json') {
        const content = fs.readFileSync(fullPath, 'utf-8')
        file = {
          ...file,
          ...JSON.parse(content),
        }
      }
      files.push(file)
    }
  }

  return files
}
