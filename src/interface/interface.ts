import mongoose, { Document } from 'mongoose';

export interface IPost extends Document {
    title: string;
    content: string;
    user: mongoose.Types.ObjectId;
}
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    posts: mongoose.Types.ObjectId[];
}
export interface IProduct extends Document {
    category: 'lavash' | 'shurva' | 'burger' | 'xot-dog' | 'pizza' | 'ichimlik';
    img?: string;
    title: string;
    description: string;
    price: number;
    discount?: number;
    count?: number;
}


export interface IClient extends Document {
    imgLink: string;
    href: string;
}