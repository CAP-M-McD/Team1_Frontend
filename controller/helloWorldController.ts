import { Application, Request, Response } from "express";

module.exports = function(app: Application){

    app.get('/helloworld', async (req:Request, res: Response)=>{
         res.render('helloWorld')
    })
}
   