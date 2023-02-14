import { CONFIG } from 'utils/config'

console.log('Running in', CONFIG.NODE_ENV, 'mode')

Run()

async function Run() {
  process.exit(0)
}
