import TSchema from '../schemas/teamSchema.js'
import { Request, Response } from 'express'
import { JWT } from '../utils/jwt.js'
const { VERIFY } = JWT
export default {
    GET_TEAM: async (req: Request, res: Response) => {
     try {
        const id: string = req.params.id
        if(!id) return res.send({data: await TSchema.find(), status: 200})
        else if (id && await TSchema.findById(id)) return res.send({data: await TSchema.findById(id), status: 200})
    else throw new Error('The data does not exist') 
    } catch (err: unknown) {
        if(err instanceof Error) return res.send({error: err.message, status: 404})
     }   
    },
    POST_TEAM: async (req: Request, res: Response) => {
        try {
            const token: any = req.headers.token
            interface IBody{
                name: string
                social_link: string
                description: string
                imgLink: string
            }
            const data: Required<IBody> = req.body
            if((await VERIFY(token)).id){
            if(data){
                await TSchema.create(data)
            return res.send({data: 'The data has been added', status: 200}) 
            }
            else throw new Error('The data is not full, please fill the requirements')
        }
            else throw new Error('Please go and register, the token expired')
        } catch (err: unknown) {
            if(err instanceof Error) return res.send({error: err.message, status: 404})
        }
    },
    PUT_TEAM: async (req: Request, res: Response) => {
        try {
            const token: any = req.headers.token
            const id: string = req.params.id
            interface IBody{
                name: string
                social_link: string
                description: string
                imgLink: string
            }
            const data: Partial<IBody> = req.body
            if((await VERIFY(token)).id){
if(id && await TSchema.findById(id)){
await TSchema.findByIdAndUpdate(id, data)
return res.send({data: 'The data has been updated', status: 200})
}
else throw new Error('The data does not exist')
            }
            else throw new Error("The token expired")
        } catch (err: unknown) {
            if(err instanceof Error) return res.send({error: err.message, status: 404})
        }
    },
    DELETE_TEAM: async (req: Request, res: Response) => {
        try {
            const token: any = req.headers.token
            const id: string = req.params.id
            if((await VERIFY(token)).id){
if(id && await TSchema.findById(id)){
    await TSchema.findByIdAndDelete(id)
    return res.send({data: 'The data has been deleted', status: 200})
}
else throw new Error('The data does not exist')
            }
            else throw new Error('The token expired, please go and login')
        } catch (err: unknown) {
            if(err instanceof Error) return res.send({error: err.message, status: 404})
        }
    }
}