import { Application, Request, Response } from "express";

module.exports = function(app: Application){

    app.get('/helloworld', async (req:Request, res: Response)=>{
         res.render('helloWorld')
    })

    app.get('/index', async (req:Request, res: Response)=>{
        res.render('index')
   })
}
   