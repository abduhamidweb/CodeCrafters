const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    if (err instanceof SyntaxError) {
        res.status(400).json({
            error: "Yaroqsiz so'rovnoma",
        });
    }
    else {
        res.status(500).json({
            error: "Server xatosi",
        });
    }
};
export default errorMiddleware;
