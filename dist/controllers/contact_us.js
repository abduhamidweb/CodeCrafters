var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CSchema from '../schemas/contact_us.js';
import { JWT } from '../utils/jwt.js';
const { VERIFY } = JWT;
export default {
    GET_CONTACTUS: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.token;
            const id = req.params.id;
            if (typeof token == 'string' && (yield VERIFY(token)).id) {
                if (!id) {
                    return res.send({ status: 200, data: yield CSchema.find() });
                }
                else if (yield CSchema.findById(id)) {
                    return res.send({ status: 200, data: yield CSchema.findById(id) });
                }
                else
                    throw new Error("The message does not exist");
            }
            else
                throw new Error('Expired token, please go and login');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    }),
    POST_CONTACTUS: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            if (data) {
                yield CSchema.create(data);
                return res.send({ data: 'The message has been added', status: 200 });
            }
            else
                throw new Error("The data is not full");
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, stataus: 404 });
        }
    }),
    PUT_CONTACTUS: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.token;
            const id = req.params.id;
            const data = req.body;
            if (typeof token == 'string' && (yield VERIFY(token)).id) {
                if (yield CSchema.findById(id)) {
                    yield CSchema.findByIdAndUpdate(id, data);
                    return res.send({ data: 'The message has been successfully edited', status: 200 });
                }
                else
                    throw new Error('The message does not exist');
            }
            else
                throw new Error('The token is expired, please go and login');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    }),
    DELETE_CONTACTUS: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.token;
            const id = req.params.id;
            if (typeof token == 'string' && (yield VERIFY(token)).id) {
                if (yield CSchema.findById(id)) {
                    yield CSchema.findByIdAndDelete(id);
                    return res.send({ data: 'The message has been successfully deleted' });
                }
                else
                    throw new Error('The message does not exist');
            }
            else
                throw new Error('The token is expired, please go and login');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    })
};
