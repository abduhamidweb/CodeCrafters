import { Request, Response } from 'express';
import Users from '../schemas/admin.schema.js';
import { JWT } from '../utils/jwt.js';
export default {
    async adminLogin(req: Request, res: Response){  
        try {
            let { email, password } = req.body;  
            let users = await Users.find({ email, password });
            if (users.length) {
                res.json({ token: JWT.SIGN({ id: users[0]._id }) })  
            } else {
                res.status(400).send('Wrong email or password') 
            }
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
}
}  