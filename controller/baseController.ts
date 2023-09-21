import { type Application, type Request, type Response } from 'express'

module.exports = function (app: Application) {
    app.get('/', async (req: Request, res: Response) => {
        res.render('index')
    })
}
