import {Command, flags} from '@oclif/command'
import * as Conf from 'conf'
import * as os from 'os'
import * as pMap from 'p-map'
import * as puppeteer from 'puppeteer-core'

import * as selectors from '../constants/selectors'
import {BASE as BASE_URL} from '../constants/urls'
import * as formatter from '../helpers/formatter'
import {signin} from '../helpers/signin'

const chromePaths = require('chrome-paths')

export default class Ls extends Command {
  static description = 'list decks'

  static examples = [
    `$ sdu ls sugarshin
* Foo Title
  * https://speakerdeck.com/sugarshin/foo
  * foo
* Example
  * https://speakerdeck.com/sugarshin/bar
  * bar
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    json: flags.boolean({char: 'j'}),
    all: flags.boolean({char: 'a'}), // not implemented yet
  }

  static args = [
    {
      name: 'username',
      required: false,
    },
  ]

  async run() {
    const {args, flags} = this.parse(Ls)
    const conf = new Conf<string>()
    const username = args.username || conf.get('username')

    if (!username) {
      this.error(new Error('`username` required. $ sdu ls <username> or before $ sdu conf username <username>'))
    }

    const executablePath: string = conf.get('chromium') || chromePaths.chromium
    const browser = await puppeteer.launch({executablePath, headless: !process.env.DISABLED_HEADLESS})
    const page = await browser.newPage()

    const own = !args.username || (args.username === conf.get('username'))
    if (own) {
      const password = conf.get('password')
      if (!password) {
        await browser.close()
        this.error(new Error('`password` required. before run: $ sdu conf password <password>'))
      }
      await signin(username, password, page)
    }

    await Promise.all([
      page.waitForNavigation({waitUntil: 'domcontentloaded'}),
      page.goto(`${BASE_URL}/${username}`),
    ])

    const decks = await page.$$(`${selectors.decksContainer} a[href^="/${username}/"]`)

    if (decks) {
      let log = ''
      if (flags.json) {
        const r = await pMap(decks, d => formatter.formatDecksWithJSON(d, username))
        log = JSON.stringify(r)
      } else {
        const r = await pMap(decks, d => formatter.formatDecks(d, username))
        log = r.join(`${os.EOL}${os.EOL}`)
      }
      this.log(log)
    }
    await browser.close()
  }
}
