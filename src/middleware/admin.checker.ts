import { NextFunction, Request, Response } from 'express';
import Users from '../schemas/admin.schema.js';
export default async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        let { token } = req.headers||[] 
        let user = await Users.findById(token)
        if (user) {
            next()
        } else {
            res.status(403).send('Forbidden')
        }
    } catch (error) {
        res.status(403).send('Forbidden')
    }
}  