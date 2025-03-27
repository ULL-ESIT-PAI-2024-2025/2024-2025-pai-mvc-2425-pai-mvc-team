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

import { WeatherController } from "../weather-controller/weather-controller.js";
import { WeatherControllerApi } from "../weather-controller/weather-controller-api/weather-controller-api.js";
import { WeatherModel } from "../weather-model/weather-model.js";
import { ApiWeatherModel } from "../weather-model/api-weather-model/api-weather-model.js"; 
import { WeatherView } from "../weather-view/weather-view.js";
import { DropDownSliderWeatherView } from "../weather-view/drop-down-slider-weather-view/drop-down-slider-weather-view.js";


/**
 * @brief Main function. Emulates the main function in C++.
 */
async function main(): Promise<void> {
  const model: WeatherModel = new ApiWeatherModel();
  const view: WeatherView = new DropDownSliderWeatherView();
  const controller: WeatherController = new WeatherControllerApi(model, view);
  console.log(controller);
}

main();