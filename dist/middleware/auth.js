var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JWT } from '../utils/jwt.js';
export default function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                error: 'Token not found'
            });
        }
        try {
            const decodedToken = JWT.VERIFY(token).id;
            next();
        }
        catch (error) {
            return res.status(401).json({
                error: 'Invalid token'
            });
        }
    });
}
