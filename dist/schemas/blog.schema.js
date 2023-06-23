import { model, Schema } from "mongoose";
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgLink: {
        type: String
    },
}, {
    timestamps: true
});
export default model("Blogs", BlogSchema);
