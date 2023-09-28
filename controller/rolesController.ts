import { type Application, type Request, type Response } from 'express'
import { type Role } from '../model/Role'

const rolesService = require('../service/rolesService')

module.exports = function (app: Application) {
    app.get('/job-roles', async (req: Request, res: Response) => {
        let data = []

        try {
            data = await rolesService.getJobRoles()
        } catch (e) {
            console.error(e)
        }
        res.render('view-roles', { roles: data })
    })

    app.get('/job-specification/:id', async (req: Request, res: Response) => {
        let data: Role
        try {
            data = await rolesService.getSpecificationById(req.params.id)
            res.render('job-specification', { role: data })
        } catch (e) {
            console.error(e)
        }
    })
}
