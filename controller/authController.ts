import { type Application, type Request, type Response } from 'express'
import { type Login } from '../model/Auth'

const authService = require('../service/authService')

module.exports = function (app: Application) {
    app.get('/login', async (req: Request, res: Response) => {
        res.render('login')
    })

    app.post('/login', async (req: Request, res: Response) => {
        const data: Login = req.body

        try {
            const jwtToken = await authService.login(data)

            res.cookie('jwtToken', jwtToken, { httpOnly: true })

            res.redirect('/')
        } catch (e) {
            res.locals.errormessage = e.message

            res.render('login', req.body)
        }
    })
}
