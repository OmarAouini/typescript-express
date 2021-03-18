import express from 'express';
import * as articleController from "./article.controller";
const articleRouter = express.Router();

//routes
articleRouter.get('/', articleController.findAll)
articleRouter.get('/:id', articleController.findOne)
articleRouter.post('/', articleController.create)
articleRouter.put('/:id', articleController.update)
articleRouter.delete('/:id', articleController.delete)
articleRouter.delete('/', articleController.deleteAll)

export default articleRouter;