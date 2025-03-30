/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc code for the web server
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
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
    path.join(__dirname, '../dist/shopping-list-mvc/')
  )
);
app.use(
  '/shopping-list-bad',
  express.static(
    path.join(__dirname, '../dist/shopping-list-bad/')
  )
);
app.use(
  '/shopping-list-function',
  express.static(
    path.join(__dirname, '../dist/shopping-list-function/')
  )
);
app.use(
  '/docs',
  express.static(
    path.join(__dirname, '../docs/')
  )
);
app.use(
  '/resources',
  express.static(
    path.join(__dirname, '../resources/')
  )
);
// Start the server and listens for requests on the specified port
const SERVER = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
