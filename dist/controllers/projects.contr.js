var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Project from '../schemas/projects.schema.js';
class ProjectController {
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ProjectTitle, Description, imagelink, projectLink } = req.body;
            try {
                const project = new Project({ ProjectTitle, Description, imagelink, projectLink });
                yield project.save();
                res.status(201).json(project);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    getAllProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project.find();
                res.status(200).json(projects);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    getProjectById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const project = yield Project.findById(id);
                if (!project) {
                    res.status(404).json({ error: 'Project not found' });
                    return;
                }
                res.status(200).json(project);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ProjectTitle, Description, imagelink, projectLink } = req.body;
            try {
                const project = yield Project.findByIdAndUpdate(id, { ProjectTitle, Description, imagelink, projectLink }, { new: true });
                if (!project) {
                    res.status(404).json({ error: 'Project not found' });
                    return;
                }
                res.status(200).json(project);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const project = yield Project.findByIdAndDelete(id);
                if (!project) {
                    res.status(404).json({ error: 'Project not found' });
                    return;
                }
                res.status(204).send(project);
            }
            catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }
}
export default new ProjectController();
