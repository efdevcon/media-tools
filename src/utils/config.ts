import { join } from 'path'
import dotenv from 'dotenv'

dotenv.config()

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  API_BASE_URL: process.env.API_BASE_URL || 'https://api.devcon.org',
  INPUT_FOLDER: process.env.INPUT_FOLDER || join(process.cwd(), 'input'),
  OUTPUT_FOLDER: process.env.OUTPUT_FOLDER || join(process.cwd(), 'output'),
  BITRATE: process.env.BITRATE || 128,

  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
}

export const tracks = [
  'Cryptoeconomics',
  'Developer Infrastructure',
  'Governance & Coordination',
  'Layer 1 Protocol',
  'Layer 2s',
  'Opportunity & Global Impact',
  'Security',
  'Staking & Validator Experience',
  'UX & Design',
  'ZKPs: Privacy, Identity, Infrastructure, & More',
]
