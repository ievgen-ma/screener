import { Request, Response, NextFunction } from "express";

const requireLogin = (req:Request, res:Response, next:NextFunction) => {
    if(!req.session!.passport.user){
        return res.status(401).send({error: 'You must login'})
    }
    next()
}

export {requireLogin}