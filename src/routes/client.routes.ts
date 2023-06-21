import express from 'express';
import ClientController from "../controllers/client.contr.js"
import adminChecker from '../middleware/admin.checker.js';

const router = express.Router();
router.post('/clients', adminChecker, ClientController.createClient);
router.get('/clients', ClientController.getAllClients);
router.get('/clients/:id', ClientController.getClientById);
router.put('/clients/:id', adminChecker, ClientController.updateClient);
router.delete('/clients/:id', adminChecker, ClientController.deleteClient);

export default router;