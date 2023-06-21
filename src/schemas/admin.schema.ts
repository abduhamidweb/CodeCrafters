import mongoose, { Schema, Document } from 'mongoose';


const usersSchema: Schema = new Schema({
    name: String,
    email: String,
    password: String
});

const users = mongoose.model('users', usersSchema);

export default users;

