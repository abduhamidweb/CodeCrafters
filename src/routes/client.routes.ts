import express from 'express';
import ClientController from "../controllers/client.contr.js"

const router = express.Router();
router.post('/clients', ClientController.createClient);
router.get('/clients', ClientController.getAllClients);
router.get('/clients/:id', ClientController.getClientById);
router.put('/clients/:id', ClientController.updateClient);
router.delete('/clients/:id', ClientController.deleteClient);

export default router;