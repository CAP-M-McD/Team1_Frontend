import { Application, Request, Response } from "express";

const express = require('express')
const router = express.Router()


router.get('/', async (req:Request, res:Response) => {     
    res.render('view-roles') 
});
module.exports = router


// module.exports = function(app: Application){

//     app.get('/job-roles', async (req: Request, res: Response) => {
//         let data = [];

//         try{
//             data = await rolesService.getJobRoles()
//         } catch(e){
//             console.error(e);
//         }
//         console.log(data)
//         res.render('view-roles', {Roles: data})

//     })
// }
