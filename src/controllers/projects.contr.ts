import { Request, Response } from 'express';
import Project from '../schemas/projects.schema.js';
import { IProject } from '../interface/interface';

class ProjectController {
    public async createProject(req: Request, res: Response): Promise<void> {
        const { ProjectTitle, Description, imagelink, projectLink } :IProject = req.body;
        try {
            const project = new Project({ ProjectTitle, Description, imagelink, projectLink });
            await project.save();
            res.status(201).json(project);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async getAllProjects(req: Request, res: Response): Promise<void> {
        try {
            const projects: IProject[] | null = await Project.find();
            res.status(200).json(projects);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async getProjectById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const project: IProject | null = await Project.findById(id);
            if (!project) {
                res.status(404).json({ error: 'Project not found' });
                return;
            }
            res.status(200).json(project);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async updateProject(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { ProjectTitle, Description, imagelink, projectLink }: IProject = req.body;
        try {
            const project = await Project.findByIdAndUpdate(
                id,
                { ProjectTitle, Description, imagelink, projectLink },
                { new: true }
            );
            if (!project) {
                res.status(404).json({ error: 'Project not found' });
                return;
            }
            res.status(200).json(project);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }

    public async deleteProject(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const project: IProject | null = await Project.findByIdAndDelete(id);
            if (!project) {
                res.status(404).json({ error: 'Project not found' });
                return;
            }
            res.status(204).send(project);
        } catch (error: unknown) {
            res.status(500).json({ success: false, error: (error as Error).message });
        }
    }
}

export default new ProjectController();
