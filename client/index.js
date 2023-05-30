// import './styles/style.css';

// console.log('🎉 Estilos cargados correctamente 🎉');

// // ES6 CODE
// // Default Parameters
// const show = (msg = 'No message given') => {
//   console.log(msg);
// };

// show();

// // ES6 CODE
// // Async Await
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('Calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();
// cargando los estilos
/* eslint-disable no-console */
import './styles/style.css';
/* eslint-disable */
// Importandoe Estilos de Materialize CSS
import 'materialize-css/dist/css/materialize.css';
// Importando scripts de Materialize
import 'materialize-css/dist/js/materialize';
/* eslint-enable */

// Inicializando Scripts de Materialize para interactividad
M.AutoInit();

console.log('Webpack Working Middleware!!! 📦');
