import { Application, Request, Response } from "express";

const rolesService = require('../service/rolesService')

module.exports = function(app: Application){

    app.get('/job-roles', async (req: Request, res: Response) => {
        let data = [];

        try{
            data = await rolesService.getJobRoles()
        } catch(e){
            console.error(e);
        }
        console.log(data)
        res.render('view-roles', {Roles: data})

    })
}
