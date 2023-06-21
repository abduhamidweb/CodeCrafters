import { model, Schema, Types, InferSchemaType } from "mongoose";


const BlogSchema = new Schema({
   title : {
    type : String,
    required : true
   },
   description  :{
    type : String
   },
   imgLink : {
    type : String
   },
}, {
    timestamps : true
})


type Blogs = InferSchemaType<typeof BlogSchema>;
export default model<Blogs>("Blogs", BlogSchema);
