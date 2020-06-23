import express from 'express';
import multer from 'multer';

import UserController from './controllers/UserController';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

const userController = new UserController();
routes.get('/users', userController.index)
routes.post('/users', upload.single('image'), userController.store)

export default routes;