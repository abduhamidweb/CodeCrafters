import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.SECRET_KEY;
export const JWT = {
    SIGN: (payload) => {
        const expiresIn = 60 * 60;
        return jwt.sign(payload, secretKey, { expiresIn });
    },
    VERIFY: (token) => {
        return jwt.verify(token, secretKey);
    }
};
