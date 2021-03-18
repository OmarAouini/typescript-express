import express from 'express';
import articleRouter from './article/article.routes';
import userRouter from "./user/user.routes"
const allRouter = express.Router();

//all routers
allRouter.use("/articles", articleRouter);
allRouter.use("/users", userRouter);

export default allRouter;