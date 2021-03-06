import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import logger from "./utils/logger"
import compression from "compression";
import allRouter  from "./api/routes";
const app = express();
dotenv.config();

//env variables
const port = process.env.PORT;

//middlewares
initMiddleWares(app);

//routes
app.use("/", allRouter);

//404 handler
app.use((req, res) => {
    logger.info("entering 404 handler...")
    return res.status(404).send("404 not found!");
});

//server start
app.listen(port, () => {
    logger.info("starting server application...");
    logger.info(`app is listening on http://localhost:${port}`);
});


function initMiddleWares(app :express.Application): void {
    logger.info("init middlewares...");
    app.use(morgan("dev"));
    app.use(cors({
        origin: ["http://localhost:8080"],
        methods: ["GET", "POST", "PUT", "DELETE"], 
        allowedHeaders: ["Content-Type", "Authorization"]}));
    app.use(helmet());
    app.use(compression());
}
