import { Schema,model,Types } from "mongoose";


const ContactUsSchema = new Schema({
    username: {
        type: String,
        maxLength: [30, 'The username should consist maximum 30 words'],
        required: true
    },
    email: {
        type: String,
        maxLength: [50, 'The email should contain maximum 50 words'],
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        minLength: [5, 'You must write at least five words']
    }
})

export default model('contact_us', ContactUsSchema)