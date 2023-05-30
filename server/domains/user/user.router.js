// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './user.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// get 'user/login'
router.get(['/login'], userController.login);

// get 'user/login'
router.get(['/logout'], userController.logout);

// get 'user/login'
router.get(['/register'], userController.register);

// Exporto este tramo de ruta
export default router;
