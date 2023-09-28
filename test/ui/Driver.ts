import {
    Builder,
    Capabilities,
    type ThenableWebDriver,
} from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome'

export function BuildDriver(): ThenableWebDriver {
    const options = new Options()

    if (process.env.RUN_HEADLESS === 'activate') {
        options.headless().windowSize({ height: 1080, width: 1920 })
    } else {
        options.windowSize({ height: 1080, width: 1920 })
    }

    return new Builder()
        .withCapabilities(Capabilities.chrome())
        .setChromeOptions(options)
        .build()
}
