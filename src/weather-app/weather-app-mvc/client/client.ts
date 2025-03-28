/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View class for the weather app
 * Uncomment the lines below to use the LocalWeatherModel
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */
import { WeatherForumBuilder } from '../weather-controller-builder/weather-forum-builder/weather-forum-builder.js';
import { WeatherBuilder } from '../weather-controller-builder/weather-builder.js';
import { WeatherBaseBuilder } from '../weather-controller-builder/weather-base-builder/weather-base-builder.js';
import { LocalWeatherModel } from '../weather-model/local-weather-model/local-weather-model.js';
import { ApiWeatherModel } from '../weather-model/api-weather-model/api-weather-model.js';

/**
 * @brief Main function. Emulates the main function in C++.
 */
async function main(): Promise<void> {
  // Choose the view and model
  const viewOptionInput: string | null = prompt('Choose an option: 1. Base, 2. Forum');
  const VIEW_OPTION: number | null = viewOptionInput ? parseInt(viewOptionInput) : null;
  const modelOptionInput: string | null = prompt('Choose an option: 1. Remote, 2. Local');
  const MODEL_OPTION: number | null = modelOptionInput ? parseInt(modelOptionInput) : null;

  // Build the desired controller
  let BUILDER: WeatherBuilder = new WeatherBaseBuilder(); // Default
  if (VIEW_OPTION === 1) {
    BUILDER = new WeatherBaseBuilder();
  } else if (VIEW_OPTION === 2) {
    BUILDER = new WeatherForumBuilder();
  }
  // Set the model
  if (MODEL_OPTION === 1) {
    BUILDER.setModel(new ApiWeatherModel());
  } else if (MODEL_OPTION === 2) {
    BUILDER.setModel(new LocalWeatherModel());
  }
  BUILDER.build();
}

main();