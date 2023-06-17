import {
    Request,
    Response,
    NextFunction
} from 'express';
const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof SyntaxError) {
        res.status(400).json({
            error: "Yaroqsiz so'rovnoma",
        });
    } else {
        res.status(500).json({
            error: "Server xatosi",
        });
    }
};

export default errorMiddleware;
