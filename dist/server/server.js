var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
// import { connectToDatabase } from "../db/db.js";
import { contact_us } from "../routes/contact_us.routes.js";
import "../db/mongo.js";
import dotenv from 'dotenv';
dotenv.config();
// import "../db/mongo.js" 
import "../db/mongo.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import "../db/mongo.js";
const app = express();
const PORT = Number(process.env.PORT) || 5000;
import errorMiddleware from "../middleware/errorHandler.js";
import swRouter from "../utils/swagger.js";
import clientRouter from "../routes/client.routes.js";
import blogRouter from "../routes/blog.routes.js";
import projectsRoutes from "../routes/projects.routes.js";
import * as path from 'path';
import usersRouter from "../routes/users.router.js";
import { team } from "../routes/team.routes.js";
app.use(express.json());
app.use(fileUpload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));
app.use(express.static(path.join(process.cwd(), 'src', "public")));
app.use(cors());
app.use('/api', contact_us);
app.use('/api', team);
app.use('/api/docs', swRouter);
app.use('/api', clientRouter);
app.use('/api', blogRouter);
app.use('/api', usersRouter);
app.use('/api', projectsRoutes);
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome to the CodeCrafters campaign API",
            postmen: "https://documenter.getpostman.com/view/24139682/2s93si1pwE"
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}));
app.use(errorMiddleware);
// app.listen(PORT, () => console.log("Server listening on port" + PORT));
app.listen(PORT, () => console.log("Server listening on port" + PORT));
// connectToDatabase().then(() => {
//     app.listen(PORT, () => console.log("Server listening on port" + PORT));
// });     
