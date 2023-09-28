import { type Login, type Token } from '../model/Auth'
const axios = require('axios')
const authValidator = require('../validator/authValidator')
axios.defaults.baseURL = process.env.API_URL

module.exports.URL = '/api/login'

module.exports.login = async function (login: Login): Promise<Token> {
    const error: string = authValidator.validateLogin(login)

    if (error !== null && error !== '') {
        throw new Error(error)
    }

    try {
        const response = await axios.post(this.URL, login, {
            validateStatus: function (status: number) {
                return status <= 302 // Reject only if the status code is greater than 302
            },
        })

        return response.data
    } catch (e) {
        console.error(e)
        if (e.response.status === 401) {
            throw new Error('Login details are invalid, please try again.')
        } else if (e.response.status === 500) {
            throw new Error('Server error, please try again in a moment.')
        } else {
            throw new Error('Login failed, please try again.')
        }
    }
}
