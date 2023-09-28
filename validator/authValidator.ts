import { type Login } from '../model/Auth'

module.exports.validateLogin = function (login: Login): string {
    const emailFormat =
        '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$'

    if (login.email === '') {
        return 'Email is empty.'
    }

    if (!login.email.match(emailFormat)) {
        return 'Email does not match pattern.'
    }

    if (login.password === '') {
        return 'Password is empty.'
    }

    return null as any
}
