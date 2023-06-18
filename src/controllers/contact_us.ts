import { Request, Response } from 'express'
import CSchema from '../schemas/contact_us.js'
import { JWT } from '../utils/jwt.js'
const { VERIFY } = JWT   
export default {
    GET_CONTACTUS: async (req: Request, res: Response) => {
try{
const token: any = req.headers?.token
const id: string = req.params.id
if(typeof token == 'string' && (await VERIFY(token)).id){
if(!id){
return res.send({status: 200, data: await CSchema.find()}) 
}
else if(await CSchema.findById(id)){
 return res.send({status: 200, data: await CSchema.findById(id)})
}
else throw new Error("The message does not exist")
}
else throw new Error('Expired token, please go and login')
}
catch(err: unknown){
  if(err instanceof Error) return res.send({error: err.message, status: 404})
}
    },
    POST_CONTACTUS: async (req: Request, res: Response) => {
        try {
         interface IBody{
            username: string
            description: string
            email: string
            phone: string
         }
         const data: Required<IBody> = req.body
        if(data){
    await CSchema.create(data)
return res.send({data: 'The message has been added', status: 200})        
}
        else throw new Error("The data is not full")
        } catch (err: unknown) {
            if(err instanceof Error) return res.send({error: err.message, stataus: 404})
        }
    },
    PUT_CONTACTUS: async (req: Request, res: Response) => {
        try{
const token: any = req.headers.token
const id: string = req.params.id
interface IBody{
    username: string
    description: string
    email: string
    phone: string
}
const data: Partial<IBody> = req.body
if(typeof token == 'string' && (await VERIFY(token)).id){
    if(await CSchema.findById(id)){
        await CSchema.findByIdAndUpdate(id, data)
        return res.send({data: 'The message has been successfully edited', status: 200})
    }
    else throw new Error('The message does not exist')
}
else throw new Error('The token is expired, please go and login')
        }catch(err: unknown){
            if(err instanceof Error) return res.send({error: err.message, status: 404})
        }
    },
    DELETE_CONTACTUS: async (req: Request, res: Response) => {
        try{
const token: any = req.headers.token
const id: string = req.params.id
if(typeof token == 'string' && (await VERIFY(token)).id){
    if(await CSchema.findById(id)){
        await CSchema.findByIdAndDelete(id)
return res.send({data: 'The message has been successfully deleted'})
    }
    else throw new Error('The message does not exist')
}
else throw new Error('The token is expired, please go and login')
        }catch(err: unknown){
            if(err instanceof Error) return res.send({error: err.message, status: 404})
        }
    }
}