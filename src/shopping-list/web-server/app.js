/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc code for the web server
 * @see {@link https://github.com/taniarascia/mvc}
 */


import express from 'express';
import path from 'path';              // provides utilities for working with file and directory paths.
import { fileURLToPath } from 'url';  // Used to convert a file URL to a file path.
import { dirname } from 'path';       // The dirname function from the path module is used to get the directory name of a file path.

const app = express();

//set the port
app.set('port', 8080);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname));
app.use(
  '/shopping-list-mvc', 
  express.static(
    path.join(__dirname, '../../../dist/src/shopping-list/shopping-list-mvc/')
  )
);
app.use(
  '/shopping-list-god-class',
  express.static(
    path.join(__dirname, '../../../dist/src/shopping-list/shopping-list-god-class/')
  )
);
app.use(
  '/shopping-list-function',
  express.static(
    path.join(__dirname, '../../../dist/src/shopping-list/shopping-list-function/')
  )
);
// Start the server and listens for requests on the specified port
const SERVER = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://10.6.128.30:' + app.get('port'));
});
