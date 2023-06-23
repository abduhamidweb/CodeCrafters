import mongoose, { Schema } from 'mongoose';
import isURL from 'validator/lib/isURL.js';
const clientSchema = new Schema({
    imgLink: {
        type: String,
        required: true,
        validate: {
            validator: (value) => isURL(value),
            message: 'Invalid imgLink format'
        }
    },
    href: {
        type: String,
        required: true,
        validate: {
            validator: (value) => isURL(value),
            message: 'Invalid href format'
        }
    }
});
const Client = mongoose.model('Client', clientSchema);
export default Client;
