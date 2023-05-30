// Importando la biblioteca
// habdlebars

import { engine as exphbs } from 'express-handlebars';

import path from 'path';

// crea una funcion de configuracion
// que exportaremos por defecto
export default (app) => {
  // Refistrando un nuevo motor de plantillas
  // compatible con consolidatejs
  app.engine(
    'hbs',
    exphbs({
      // definir la extension de la platilla
      extname: '.hbs',
      // estableciendo el layout por defecto
      defaultLayout: 'main',
    })
  );

  // selecionado el motor de la platilla que intregramos
  // anteriormente
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));

  // se retorna la instanacia recibida como argumento
  return app;
};
