// Importando enrutador home
import homeRouter from './domains/home/home.router';

// importando enrutador user
import userRouter from './domains/user/user.router';
import projectsRouter from './domains/projects/projects.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // agregar el enrutado de user
  app.use('/user', userRouter);
  // agregar el enrutado de projects
  app.use('/projects', projectsRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
