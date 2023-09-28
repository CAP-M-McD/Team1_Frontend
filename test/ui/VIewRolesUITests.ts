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

        await driver.findElements(By.id('job-family-0')).then(function (
            elements: any
        ) {
            expect(elements).to.have.lengthOf.greaterThan(0)
        })
    })
})

describe('View Job Spec Test', async () => {
    let driver: ThenableWebDriver

    beforeEach(async () => {
        driver = BuildDriver()
    })

    afterEach(async () => {
        await driver.quit()
    })

    it('View the job specification', async () => {
        // @ts-expect-error/ignoring this error
        await driver.get(process.env.UI_TEST_URL)

        await driver.findElement(By.id('jobs')).click()
        await driver.findElement(By.id('view-0')).click()

        await driver.findElements(By.id('jobFamily')).then(function (
            elements: any
        ) {
            expect(elements).to.have.lengthOf.greaterThan(0)
        })
    })
})
