import * as puppeteer from 'puppeteer-core'

import {SPEAKER_DECK_SESSION_COOKIE_KEY, SpeakerDeckSession} from './signin'

export async function getSessionCookie(page: puppeteer.Page): Promise<SpeakerDeckSession | null> {
  const cookies = await page.cookies()
  const session = cookies.find(c => c.name === SPEAKER_DECK_SESSION_COOKIE_KEY)
  if (session) {
    return session.value
  }
  return null
}
