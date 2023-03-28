import fetch from 'cross-fetch'
import { CONFIG } from 'utils/config'

export async function GetSessions() {
  console.log('Fetching sessions from Devcon API')
  const response = await fetch(`${CONFIG.API_BASE_URL}/sessions?size=2000`)
  const result = await response.json()
  return result.data
}
