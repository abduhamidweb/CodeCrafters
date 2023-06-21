import { Router,Request,Response } from "express";
import UserController from "../controllers/admin.controller.js"
import middleware from "../middleware/admin.checker.js"

let {adminLogin}=UserController

let admin = Router()
admin.post('/admin-login', adminLogin) 
admin.get('/forTest', middleware, (req: Request, res: Response) => {
    res.send('ok')
})    
export default admin