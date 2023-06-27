import mongoose, { Schema, Document } from 'mongoose';
import isURL from 'validator/lib/isURL.js';
import { IProject } from '../interface/interface';



const projectSchema: Schema = new Schema<IProject>({
    ProjectTitle: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    imagelink: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => isURL(value),
            message: 'Invalid imagelink format'
        }
    },
    projectLink: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => isURL(value),
            message: 'Invalid project-link format'
        }
    }
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;
