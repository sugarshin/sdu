import * as puppeteer from 'puppeteer-core'

import * as selectors from '../constants/selectors'
import {SIGNIN} from '../constants/urls'

export const SPEAKER_DECK_SESSION_COOKIE_KEY = '_secure_speakerd_session'

export interface Options {
  timeout?: number
}

export async function signin(username: string, password: string, page: puppeteer.Page, options: Options = {}): Promise<void> {
  const opts = {timeout: 10000, ...options}
  await page.goto(SIGNIN)
  await page.type(selectors.signinFormUsername, username)
  await page.type(selectors.signinFormPassword, password)
  const submitButton = await page.$(selectors.siginFormSubmitButton)
  if (submitButton) {
    await Promise.all([
      page.waitForNavigation({timeout: opts.timeout, waitUntil: 'networkidle2'}),
      submitButton.click(),
    ])
  } else {
    throw new Error(`not found element: \`${selectors.siginFormSubmitButton}\``)
  }
}
