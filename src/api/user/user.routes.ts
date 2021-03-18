import express from 'express';
import * as userController from "./user.controller"
const userRouter = express.Router();

//routes
userRouter.get('/', userController.findAll)
userRouter.get('/:id', userController.findOne)
userRouter.post('/', userController.create)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)
userRouter.delete('/', userController.deleteAll)


export default userRouter;