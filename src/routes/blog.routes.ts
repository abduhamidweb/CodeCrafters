import { Router } from "express";
import { BlogContr } from "../controllers/blog.contr.js";
import adminChecker from "../middleware/admin.checker.js";


const blogRouter: Router = Router();

blogRouter.get('/blogs', BlogContr.GetBlog)
blogRouter.get('/blogs/:id', BlogContr.GetBlog)
blogRouter.post('/blogs',adminChecker, BlogContr.AddBlog)
blogRouter.put('/blogs/:id',adminChecker,  BlogContr.PutBlog)
blogRouter.delete('/blogs/:id',adminChecker,  BlogContr.deleteBlog)

export default blogRouter