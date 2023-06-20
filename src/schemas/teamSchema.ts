import { Schema,model,Types } from "mongoose";


const TeamSchema = new Schema({
    name: {
        type: String,
        maxLength: [30, 'The username should consist maximum 30 words'],
        required: true
    },
    social_link: {
        type: String
    },
    imgLink: {
        type: String
    },
    description: {
        type: String,
        minLength: [5, 'You must write at least five words']
    }
})

export default model('team', TeamSchema)