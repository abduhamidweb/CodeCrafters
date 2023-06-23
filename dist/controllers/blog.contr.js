var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import blogSchema from "../schemas/blog.schema.js";
export class BlogContr {
    constructor() { }
    static GetBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                if (id) {
                    let findById = yield blogSchema.findById(id);
                    if (findById == null) {
                        throw new Error(`Not Found ${id} - blog`);
                    }
                    res.send({
                        status: 200,
                        message: `${id} - blog`,
                        success: true,
                        data: findById
                    });
                }
                else {
                    res.send({
                        status: 200,
                        message: 'All Blogs',
                        success: true,
                        data: yield blogSchema.find()
                    });
                }
            }
            catch (error) {
                res.send({
                    status: 400,
                    success: false,
                    message: `Error: ${error.message}`
                });
            }
        });
    }
    static AddBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title, description, imgLink } = req.body;
                if (!title || !description || !imgLink) {
                    throw new Error(`Data is incomplated`);
                }
                let newBlog = yield blogSchema.create({ title, description, imgLink });
                res.send({
                    status: 201,
                    message: 'Ok, Successfuly added blog',
                    success: true,
                    data: newBlog
                });
            }
            catch (error) {
                res.send({
                    status: 400,
                    success: false,
                    message: `Error: ${error.message}`
                });
            }
        });
    }
    static PutBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { title, description, imgLink } = req.body;
                const { id } = req.params;
                if (!title && !description && !imgLink) {
                    throw new Error(`You are not sent nothing data!`);
                }
                const checkExists = yield blogSchema.findById(id);
                if (checkExists == null) {
                    throw new Error(`Not Found ${id} - blog`);
                }
                let updatedData = yield blogSchema.findByIdAndUpdate(id, { title, description, imgLink }, { new: true });
                res.send({
                    status: 201,
                    message: 'Ok, Successfuly added blog',
                    success: true,
                    data: updatedData
                });
            }
            catch (error) {
                res.send({
                    status: 400,
                    success: false,
                    message: `Error: ${error.message}`
                });
            }
        });
    }
    static deleteBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                const checkExists = yield blogSchema.findById(id);
                if (checkExists == null) {
                    throw new Error(`Not Found ${id} - blog`);
                }
                let deletedBlog = yield blogSchema.findByIdAndDelete(id);
                res.send({
                    status: 200,
                    message: `Successfuly deleted ${id} - blog`,
                    success: true,
                    data: deletedBlog
                });
            }
            catch (error) {
                res.send({
                    status: 400,
                    success: false,
                    message: `Error: ${error.message}`
                });
            }
        });
    }
}
