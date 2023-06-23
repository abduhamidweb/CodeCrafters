var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Client from '../schemas/client.schema.js';
class ClientController {
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { imgLink, href } = req.body;
            try {
                const client = new Client({ imgLink, href });
                yield client.save();
                res.status(201).json(client);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    getAllClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield Client.find();
                res.status(200).json(clients);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const client = yield Client.findById(id);
                if (!client) {
                    res.status(404).json({ error: 'Client not found' });
                    return;
                }
                res.status(200).json(client);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { imgLink, href } = req.body;
            try {
                const client = yield Client.findByIdAndUpdate(id, { imgLink, href }, { new: true });
                if (!client) {
                    res.status(404).json({ error: 'Client not found' });
                    return;
                }
                res.status(200).json(client);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    deleteClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const client = yield Client.findByIdAndDelete(id);
                if (!client) {
                    res.status(404).json({ error: 'Client not found' });
                    return;
                }
                res.status(204).send(client);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
}
export default new ClientController();
