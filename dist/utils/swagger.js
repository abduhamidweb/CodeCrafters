import swUiExp from "swagger-ui-express";
import swJsDoc from "swagger-jsdoc";
import { Router } from "express";
const PORT = Number(process.env.PORT) || 5000;
const swRouter = Router();
const swagger = swJsDoc({
    swaggerDefinition: {
        openapi: "3.0.0",
        servers: [
            {
                url: "http://localhost:" + PORT,
                description: "User and Post",
                variables: {
                    port: {
                        enum: [PORT],
                        // default: 5000,
                    },
                },
            },
            {
                url: "http://localhost:5000",
                description: "User and Post",
                variables: {
                    port: {
                        enum: [PORT],
                        // default: 5000,
                    },
                },
            },
        ],
        info: {
            version: "1.0.0",
            title: "User and Post",
            description: "User and Post",
        },
        components: {
            securitySchemes: {
                Token: {
                    type: "apiKey",
                    name: "token",
                    in: "header",
                    description: "access_token",
                },
            },
        },
    },
    apis: [
        `${process.cwd()}/src/swagger/docs/userdoc.yaml`,
    ],
});
swRouter.use("/", swUiExp.serve, swUiExp.setup(swagger));
export default swRouter;
