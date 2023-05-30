import createError from 'http-errors';
// import the express library
import express from 'express';
// is a core-mode library to mandge system path
import path from 'path';
// helps to parse client cookies
import cookieParser from 'cookie-parser';
// library to loog http comuntcation
import morgan from 'morgan';

// importing sobroutes

// eslint-disable-next-line import/no-duplicates
// import indexRouter from '@server/routes/index';
// import usersRouter from '@server/routes/users';
// import apiRouter from '@server/routes/api';

// setting webpack modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

// importando el configurador del motor de plantillas
import configTemplateEngine from './config/templateEngine';
// importing webpack configuration
import webpackDevConfig from '../webpack.dev.config';

// impornting winston logger
import log from './config/winston';

// importado enrutador
import router from './router';

// Creando variable del directorio raiz
// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());

// we are creating the express instance
const app = express();

// het the excution node
const nodeEnviroment = process.env.NODE_ENV || 'production';

// deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // start webpack dev server
  console.log(' 🦾Ejecutando en modo desarrollo');
  // adding the key mode with its value development
  webpackDevConfig.mode = nodeEnviroment;

  // seting the port
  webpackDevConfig.devServer.port = process.env.PORT;

  // setting up the HMR(hot module replacement)
  webpackDevConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackDevConfig.entry,
  ];

  // agregar el plugin a la configuracion de desarrollo
  // de webpack
  webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // creating the bundler
  const bundle = webpack(webpackDevConfig);
  // anabling
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackDevConfig.output.publicPath,
    })
  );
  // enabling the webpack  HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🏭 ejecutando en modo produccion');
}

// view engine setup
configTemplateEngine(app);

// Registering middleware
// log all receivedrequests
// eslint-disable-next-line no-undef
app.use(morgan('combined', { stream: log.stream }));
// parse request data into json
app.use(express.json());
// decode url info
app.use(express.urlencoded({ extended: false }));
// parse client cookies into json
app.use(cookieParser());
// set up the estatic file server
app.use(express.static(path.join(__dirname, '../public')));

// registering routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use(apiRouter);
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info(`404 Pagina no encontrada ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.error(`${err.status || 500} - ${err.message}`);
  res.render('error');
});

export default app;
