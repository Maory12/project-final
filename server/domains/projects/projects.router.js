// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectsController from './projects.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// get 'proyectos/projects'
router.get(['/'], projectsController.projects);
// get 'proyectos/add'
router.get(['/add'], projectsController.add);

// Exporto este tramo de ruta
export default router;
