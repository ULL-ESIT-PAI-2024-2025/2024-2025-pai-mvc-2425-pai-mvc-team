/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 *  Model using a local file as data for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../weather-model.js';
import { WeatherData } from '../../data-types.js';

/**
 * Class that uses local files to get the weather data
 */
export class LocalWeatherModel extends WeatherModel {
  /**
   * Creates a new Model
   */
  constructor() {
    super();
  }

  /**
   * Get the weather data from local storage.
   * The file must be in the resources directory and must be named 
   * <location>-forecast.json
   * @returns a promise with the weather data
   */
  public override async getData(): Promise<WeatherData> {
    const response = await fetch(
      '/resources/' + this.location.toLowerCase() + '-forecast.json'            
    );
    const data: WeatherData = await response.json();
    data.forecast.forecastday = data.forecast.forecastday.slice(0, this.days);
    this.calculateRainyDays(data);
    return data;
  }
}