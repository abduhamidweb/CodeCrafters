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
export default {
    adminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, password } = req.body;
                let users = yield Users.find({ email, password });
                if (users.length) {
                    res.json({ token: JWT.SIGN({ id: users[0]._id }) });
                }
                else {
                    res.status(400).send('Wrong email or password');
                }
            }
            catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });
    }
};
