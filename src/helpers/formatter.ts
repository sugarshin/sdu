import * as puppeteer from 'puppeteer-core'

export async function formatDecks(elementHandle: puppeteer.ElementHandle<Element>, username: string): Promise<string> {
  const title = await elementHandle.getProperty('title').then<string>(jsHandle => jsHandle.jsonValue())
  const href = await elementHandle.getProperty('href').then<string>(jsHandle => jsHandle.jsonValue())
  const pathname = ((href || '').match(new RegExp(`/${username}/\([^/]+\)`)) || [])[1]
  return `* ${title}
  * ${href}
  * ${pathname}`
}

export interface DeckJSON {
  title: string
  url: string
  id: string
}
export async function formatDecksWithJSON(elementHandle: puppeteer.ElementHandle<Element>, username: string): Promise<DeckJSON> {
  const title = await elementHandle.getProperty('title').then<string>(jsHandle => jsHandle.jsonValue())
  const href = await elementHandle.getProperty('href').then<string>(jsHandle => jsHandle.jsonValue())
  const pathname = ((href || '').match(new RegExp(`/${username}/\([^/]+\)`)) || [])[1]
  return {
    title,
    url: href,
    id: pathname,
  }
}
