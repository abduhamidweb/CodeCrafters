import { Request, Response } from 'express';
import Client from '../schemas/client.schema.js';

class ClientController {
    public async createClient(req: Request, res: Response): Promise<void> {
        const { imgLink, href } = req.body;
        try {
            const client = new Client({ imgLink, href });
            await client.save();
            res.status(201).json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create client' });
        }
    }

    public async getAllClients(req: Request, res: Response): Promise<void> {
        try {
            const clients = await Client.find();

            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get clients' });
        }
    }

    public async getClientById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const client = await Client.findById(id);

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }

            res.status(200).json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get client' });
        }
    }

    public async updateClient(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { imgLink, href } = req.body;

        try {
            const client = await Client.findByIdAndUpdate(id, { imgLink, href }, { new: true });

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }

            res.status(200).json(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update client' });
        }
    }

    public async deleteClient(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const client = await Client.findByIdAndDelete(id);

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }

            res.status(204).send(client);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete client' });
        }
    }
}

export default new ClientController();