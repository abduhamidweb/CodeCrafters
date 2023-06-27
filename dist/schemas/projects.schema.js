import mongoose, { Schema } from 'mongoose';
import isURL from 'validator/lib/isURL.js';
const projectSchema = new Schema({
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
            validator: (value) => isURL(value),
            message: 'Invalid imagelink format'
        }
    },
    projectLink: {
        type: String,
        required: true,
        validate: {
            validator: (value) => isURL(value),
            message: 'Invalid project-link format'
        }
    }
});
const Project = mongoose.model('Project', projectSchema);
export default Project;
