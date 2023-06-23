var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TSchema from '../schemas/teamSchema.js';
import { JWT } from '../utils/jwt.js';
const { VERIFY } = JWT;
export default {
    GET_TEAM: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            if (!id)
                return res.send({ data: yield TSchema.find(), status: 200 });
            else if (id && (yield TSchema.findById(id)))
                return res.send({ data: yield TSchema.findById(id), status: 200 });
            else
                throw new Error('The data does not exist');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    }),
    POST_TEAM: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.token;
            const data = req.body;
            if ((yield VERIFY(token)).id) {
                if (data) {
                    yield TSchema.create(data);
                    return res.send({ data: 'The data has been added', status: 200 });
                }
                else
                    throw new Error('The data is not full, please fill the requirements');
            }
            else
                throw new Error('Please go and register, the token expired');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    }),
    PUT_TEAM: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.token;
            const id = req.params.id;
            const data = req.body;
            if ((yield VERIFY(token)).id) {
                if (id && (yield TSchema.findById(id))) {
                    yield TSchema.findByIdAndUpdate(id, data);
                    return res.send({ data: 'The data has been updated', status: 200 });
                }
                else
                    throw new Error('The data does not exist');
            }
            else
                throw new Error("The token expired");
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    }),
    DELETE_TEAM: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.token;
            const id = req.params.id;
            if ((yield VERIFY(token)).id) {
                if (id && (yield TSchema.findById(id))) {
                    yield TSchema.findByIdAndDelete(id);
                    return res.send({ data: 'The data has been deleted', status: 200 });
                }
                else
                    throw new Error('The data does not exist');
            }
            else
                throw new Error('The token expired, please go and login');
        }
        catch (err) {
            if (err instanceof Error)
                return res.send({ error: err.message, status: 404 });
        }
    })
};
