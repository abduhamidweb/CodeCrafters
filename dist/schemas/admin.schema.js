import mongoose, { Schema } from 'mongoose';
const usersSchema = new Schema({
    name: String,
    email: String,
    password: String
});
const users = mongoose.model('users', usersSchema);
export default users;
