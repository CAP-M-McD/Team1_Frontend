import { type Application, type Request, type Response } from 'express'

const rolesService = require('../service/rolesService')

module.exports = function (app: Application) {
    app.get('', async (req: Request, res: Response) => {
        res.render('index')
    })

    app.get('/job-roles', async (req: Request, res: Response) => {
        let data = []

        try {
            data = await rolesService.getJobRoles()
        } catch (e) {
            console.error(e)
        }
        res.render('view-roles', { Roles: data })
    })
}
