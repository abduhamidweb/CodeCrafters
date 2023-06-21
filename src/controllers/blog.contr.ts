import blogSchema from "../schemas/blog.schema.js";
import { Request, Response } from "express";

export class BlogContr{
    constructor(){}

   static async  GetBlog(req : Request, res : Response){
    try {
        let {id} = req.params;
        if(id){
          let findById = await blogSchema.findById(id);
          if(findById == null){
            throw new Error(`Not Found ${id} - blog`)
          }
          res.send({
            status : 200,
            message : `${id} - blog`,
            success : true,
            data : findById
          })
        }else{
          res.send({
            status : 200,
            message : 'All Blogs',
            success : true,
            data : await blogSchema.find()
          })
        }
    } catch (error : any) {
        res.send({
            status : 400,
            success : false,
            message : `Error: ${error.message}`
        })
    }
   }

   static async AddBlog(req : Request, res : Response){
    try {
        let {title, description, imgLink} = req.body;
        if(!title || !description || !imgLink){
            throw new  Error(`Data is incomplated`)
        }
            let newBlog = await blogSchema.create({title,description, imgLink})
            res.send({
                status : 201,
                message : 'Ok, Successfuly added blog',
                success : true,
                data : newBlog
            })
      
    } catch (error : any) {
        res.send({
            status : 400,
            success : false,
            message : `Error: ${error.message}`
        })
    }
   }


   static async PutBlog(req : Request, res : Response){
    try {
        let {title, description, imgLink} = req.body;
        const {id} = req.params;
        if(!title && !description && !imgLink){
            throw new  Error(`You are not sent nothing data!`)
        }
        const checkExists = await blogSchema.findById(id)
        if(checkExists == null){
            throw new Error(`Not Found ${id} - blog`)
        }
            let updatedData = await blogSchema.findByIdAndUpdate(id, {title,description, imgLink}, {new : true})
            res.send({
                status : 201,
                message : 'Ok, Successfuly added blog',
                success : true,
                data : updatedData
            })
        
    } catch (error : any) {
        res.send({
            status : 400,
            success : false,
            message : `Error: ${error.message}`
        })
    }
   }

   static async deleteBlog(req : Request, res : Response){
    try {
        let {id} = req.params;
        const checkExists = await blogSchema.findById(id)
        if(checkExists == null){
            throw new Error(`Not Found ${id} - blog`)
        }
        let deletedBlog = await blogSchema.findByIdAndDelete(id)
        res.send({
            status : 200,
            message : `Successfuly deleted ${id} - blog`,
            success : true,
            data : deletedBlog
        })
    } catch (error: any) {
        res.send({
            status : 400,
            success : false,
            message : `Error: ${error.message}`
        })
    }
   }
}

