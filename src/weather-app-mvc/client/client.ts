/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View class for the shopping list
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { fetchData } from "../../fetch-data/fetch-data.js";
import { WeatherData } from "../../weather-app-mvc/data-types.js";
/**
 * @brief Main function. Emulates the main function in C++.
 */
async function main(): Promise<void> {
  const data: WeatherData = await fetchData();
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
  }

}

main();