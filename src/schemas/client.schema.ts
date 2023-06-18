import mongoose, { Schema, Document } from 'mongoose';
import isURL from 'validator/lib/isURL.js';
import { IClient } from '../interface/interface';
const clientSchema: Schema = new Schema<IClient>({
    imgLink: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => isURL(value),
            message: 'Invalid imgLink format'
        }
    },
    href: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => isURL(value),
            message: 'Invalid href format'
        }
    }
});

const Client = mongoose.model<IClient>('Client', clientSchema);

export default Client;
