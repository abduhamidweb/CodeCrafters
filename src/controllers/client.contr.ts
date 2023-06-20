import { Request, Response } from 'express';
import Client from '../schemas/client.schema.js';
import { IClient } from '../interface/interface';

class ClientController {
    public async createClient(req: Request, res: Response): Promise<void> {
        const { imgLink, href }: IClient = req.body;
        try {
            const client = new Client({ imgLink, href });
            await client.save();
            res.status(201).json(client);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async getAllClients(req: Request, res: Response): Promise<void> {
        try {
            const clients: IClient[] | null = await Client.find();

            res.status(200).json(clients);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async getClientById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const client: IClient | null = await Client.findById(id);

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }

            res.status(200).json(client);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async updateClient(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { imgLink, href }: IClient = req.body;

        try {
            const client = await Client.findByIdAndUpdate(id, { imgLink, href }, { new: true });

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }
            res.status(200).json(client);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async deleteClient(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const client: IClient | null = await Client.findByIdAndDelete(id);

            if (!client) {
                res.status(404).json({ error: 'Client not found' });
                return;
            }

            res.status(204).send(client);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }
}

export default new ClientController();