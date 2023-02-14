import { join } from 'path'
import dotenv from 'dotenv'

dotenv.config()

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  OUTPUT_FOLDER: process.env.OUTPUT_FOLDER || join(process.cwd(), 'output'),
  BITRATE: process.env.BITRATE || 128,

  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
}
