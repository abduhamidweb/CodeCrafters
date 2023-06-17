import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();
let dbURI = process.env.DB_URI as string;
export const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB-ga muvaffaqiyatli ulandik');
    } catch (error: unknown) {
        console.error('MongoDB-ga ulanishda xatolik:', error);
    }
};