import { NextFunction, Request, Response } from 'express';
import Users from '../schemas/admin.schema.js';
import { JWT } from '../utils/jwt.js';
export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        let { token } = req.headers || [];
        let user = await Users.findById(JWT.VERIFY(token as string).id);
        if (user) {
            next()
        } else {
            res.status(403).send('Forbidden1')
        }
    } catch (error) {
        res.status(403).send('Forbidden2')
    }
}  