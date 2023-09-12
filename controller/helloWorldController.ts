import { Application, Request, Response } from "express";

const session = require ('express');

module.exports = function(app: Application){

    app.get('/helloworld', async (req:Request, res: Response)=>{
    res.render('helloWorld')
    })
}
   