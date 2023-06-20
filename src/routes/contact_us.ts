import methods from '../controllers/contact_us.js'
import express, { Application, Request, Response } from 'express'
const { GET_CONTACTUS, POST_CONTACTUS, PUT_CONTACTUS, DELETE_CONTACTUS } = methods
const contact_us: Application = express()
contact_us.get('/contacts',GET_CONTACTUS)
contact_us.get('/contacts/:id',GET_CONTACTUS)
contact_us.post('/contacts', POST_CONTACTUS)
contact_us.put('/contacts/:id', PUT_CONTACTUS)
contact_us.delete('/contacts/:id', DELETE_CONTACTUS)

export {contact_us}
