import { describe } from 'mocha'
import { BuildDriver } from './Driver'
import { By, type ThenableWebDriver } from 'selenium-webdriver'
import { expect } from 'chai'

describe('Auth Login Test', async () => {
    const email: string = process.env.ADMIN_UI_EMAIL as string
    const password: string = process.env.ADMIN_UI_PASSWORD as string
    let driver: ThenableWebDriver

    beforeEach(async () => {
        driver = BuildDriver()
    })

    afterEach(async () => {
        await driver.quit()
    })

    it('View and Navigate on Login Page With Invalid And Valid Passwords Through Nav Button', async () => {
        // @ts-expect-error/ignoring this error
        await driver.get(process.env.UI_TEST_URL)

        await driver.findElement(By.id('login')).click()

        // Test bad email
        await driver.findElement(By.id('email')).sendKeys('bademail.com')
        await driver.findElement(By.id('password')).sendKeys('Password123')
        await driver
            .findElement(By.className('btn hero-login float-right'))
            .click()
        await driver
            .findElement(By.className('alert alert-danger'))
            .getText()
            .then(function (value) {
                expect(value).equal('Email does not match pattern.')
            })
        await driver.findElement(By.id('email')).clear()
        await driver.findElement(By.id('password')).clear()

        // Test invalid password
        await driver.findElement(By.id('email')).sendKeys(email)
        await driver.findElement(By.id('password')).sendKeys('wrongPassword')
        await driver
            .findElement(By.className('btn hero-login float-right'))
            .click()
        await driver
            .findElement(By.className('alert alert-danger'))
            .getText()
            .then(function (value) {
                expect(value).equal(
                    'Login details are invalid, please try again.'
                )
            })
        await driver.findElement(By.id('email')).clear()
        await driver.findElement(By.id('password')).clear()

        // Test valid login
        await driver.findElement(By.id('email')).sendKeys(email)
        await driver.findElement(By.id('password')).sendKeys(password)
        await driver
            .findElement(By.className('btn hero-login float-right'))
            .click()
        await driver
            .findElement(By.id('indexLogin'))
            .getText()
            .then(function (value) {
                expect(value).equal('Log in to view jobs')
            })
    })
})
