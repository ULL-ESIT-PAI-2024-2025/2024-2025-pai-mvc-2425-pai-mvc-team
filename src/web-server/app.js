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

const API_KEY = '307b0af477e64520b4a103306252703';
const BASE_URL = 'http://api.weatherapi.com/v1';
const ENDPOINT = 	'/forecast.json';
const LOCATION = 'Tenerife';
const DAYS = 10;

// URL for the weather API

// define a route for fetching data
// When a GET request is made to the '/data' endpoint, the code inside the callback function will be executed. 
// The function uses node-fetch to make a request to an external API, then sends the response as JSON to the client.
app.get('/data', async (req, res) => {
  try {
    const URL = `${BASE_URL}${ENDPOINT}?key=${API_KEY}&q=${LOCATION}&days=${DAYS}`;
    const response = await fetch(URL);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data.');
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname));
app.use(
  '/weather-app-mvc', 
  express.static(
    path.join(__dirname, '../../dist/src/weather-app-mvc/')
  )
);

app.use(
  '/fetch-data', 
  express.static(
    path.join(__dirname, '../../dist/src/fetch-data/')
  )
);
// Start the server and listens for requests on the specified port
const SERVER = app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://10.6.128.30:' + app.get('port'));
});
