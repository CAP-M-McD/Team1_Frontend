import { describe } from 'mocha'
import { BuildDriver } from './Driver'
import { By, type ThenableWebDriver } from 'selenium-webdriver'
import { expect } from 'chai'

describe('View Roles test', async () => {
    let driver: ThenableWebDriver

    beforeEach(async () => {
        driver = BuildDriver()
    })

    afterEach(async () => {
        await driver.quit()
    })

    it('View and Navigate on View Roles Page', async () => {
        // @ts-expect-error/ignoring this error
        await driver.get(process.env.UI_TEST_URL)

        await driver.findElement(By.id('jobs')).click()

        await driver.findElements(By.id('job-family')).then(function (
            elements: any
        ) {
            expect(elements).to.have.lengthOf.greaterThan(0)
        })
    })
})
