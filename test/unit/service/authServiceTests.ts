import chai = require('chai')
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const expect = chai.expect
const authService = require('../../../service/authService')

describe('authService', function () {
    describe('login', function () {
        it('should return token from response', async () => {
            const mock = new MockAdapter(axios)

            const loginData = { email: 'test@mail.com', password: 'password' }
            const token = 'token'

            mock.onPost(authService.URL, loginData).reply(200, token)

            const results = await authService.login(loginData)

            expect(results).to.equal(token)
        })

        it('should throw exception when http code above 302 is returned', async () => {
            const mock = new MockAdapter(axios)

            const loginData = { email: 'test@mail.com', password: 'password' }

            mock.onPost(authService.URL, loginData).reply(418)

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Login failed, please try again.')
        })

        it('should throw exception when 401 error returned from axios', async () => {
            const mock = new MockAdapter(axios)

            const loginData = { email: 'test@mail.com', password: 'password' }

            mock.onPost(authService.URL, loginData).reply(401)

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal(
                'Login details are invalid, please try again.'
            )
        })

        it('should throw exception when 500 error returned from axios', async () => {
            const mock = new MockAdapter(axios)

            const loginData = { email: 'test@mail.com', password: 'password' }

            mock.onPost(authService.URL, loginData).reply(500)

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal(
                'Server error, please try again in a moment.'
            )
        })

        it('should throw exception email is empty', async () => {
            const loginData = { email: '', password: 'password' }

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Email is empty.')
        })

        it('should throw exception email does not match pattern', async () => {
            const loginData = { email: '@mail.com', password: 'password' }

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Email does not match pattern.')
        })

        it('should throw exception password is empty', async () => {
            const loginData = { email: 'test@mail.com', password: '' }

            let error

            try {
                await authService.login(loginData)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Password is empty.')
        })
    })
})
