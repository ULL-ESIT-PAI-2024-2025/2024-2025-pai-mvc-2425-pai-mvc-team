/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Model using a local file as data for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../weather-model.js';
import { WeatherData } from '../../data-types.js';

/**
 * LocalWeatherModel class for the weather app, uses the weatherapi.com API to get
 * the weather data
 */
export class LocalWeatherModel extends WeatherModel {

  /**
   * Creates a new Model
   */
  constructor(private fileRoute: string) {
    super();
  }

  /**
   * Get the weather data from local storage
   * @returns a promise with the weather data
   */
  public override async getData(): Promise<WeatherData> {
    // Get the data from local json file
    const response = await fetch(this.fileRoute);
    const data = await response.json();
    return data;
  }
}