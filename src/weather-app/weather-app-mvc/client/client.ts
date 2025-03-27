/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View class for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */
import { WeatherBaseBuilder } from '../weather-controller-builder/weather-base-builder/weather-base-builder.js';
import { LocalWeatherModel } from '../weather-model/local-weather-model/local-weather-model.js';
/**
 * @brief Main function. Emulates the main function in C++.
 */
async function main(): Promise<void> {
  const builder: WeatherBaseBuilder = new WeatherBaseBuilder();
  builder.setModel(new LocalWeatherModel('tenerife-forecast.json'));
  const controller = builder.build();
  console.log(controller);
}

main();