import fetch from 'cross-fetch'

export async function GetSessions() {
  console.log('Fetching sessions from Devcon API')
  const response = await fetch('https://devcon-api.onrender.com/sessions/')
  const result = await response.json()
  return result.data
}
