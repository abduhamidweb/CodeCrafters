var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Users from '../schemas/admin.schema.js';
import { JWT } from '../utils/jwt.js';
export default (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { token } = req.headers || [];
        let user = yield Users.findById(JWT.VERIFY(token).id);
        if (user) {
            next();
        }
        else {
            res.status(403).send('Forbidden1');
        }
    }
    catch (error) {
        res.status(403).send('Forbidden2');
    }
});
