import { ToMp3 } from 'actions/ffmpeg'
import { GetVideoStream } from 'actions/youtube'
import { GetSessions } from 'sources/api'
import { CONFIG } from 'utils/config'

console.log('Running in', CONFIG.NODE_ENV, 'mode')

Run()

async function Run() {
  const sessions = await GetSessions()
  const opening = ['UihMqcj-cqc', 'noXPewi5qOk', 'GGXveC7dn7o', 'iF6_JMf6CDM', 'ql082HLTndA', 'xUAbw3QhP5c', '1C5W7iCLDPY']

  opening.forEach(async (s) => {
    const session = sessions.find((i: any) => i.sources_youtubeId === s)
    if (!session) return
    // if (session.sources_youtubeId === 'xjEK8PrH9kQ' || session.sources_youtubeId === 'FS9PPDSK6wc' || session.sources_youtubeId === 'okaoDabqt_E') return

    const stream = await GetVideoStream(s, 'highestaudio')
    if (!stream) return

    await ToMp3(session.id, stream)
    await new Promise((r) => setTimeout(r, 1000))
  })
}
