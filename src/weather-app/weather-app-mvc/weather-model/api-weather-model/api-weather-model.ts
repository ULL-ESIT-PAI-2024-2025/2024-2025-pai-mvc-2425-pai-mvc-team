/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * Model using an API as data for the weather app
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../weather-model.js';
import { WeatherData } from '../../data-types.js';

/**
 * ApiModel class for the weather app, uses the weatherapi.com API to get
 * the weather data
 */
export class ApiWeatherModel extends WeatherModel {
  private readonly API_KEY: string = '307b0af477e64520b4a103306252703';
  private readonly PAGE_URL: string = 'http://api.weatherapi.com/v1';
  private readonly ENDPOINT: string = '/forecast.json';
  private readonly BASE_URL: string =
    `${this.PAGE_URL}${this.ENDPOINT}?key=${this.API_KEY}`;

  /**
   * Creates a new Model
   */
  constructor() {
    super();
  }

  /**
   * Get the weather data from the API
   * @returns a promise with the weather data
   */
  public override async getData(): Promise<WeatherData> {
    try {
      const URL: string = this.BASE_URL +
        `&q=${this.location}&days=${this.days}`;
      const response = await fetch(URL);
      const json: WeatherData = await response.json();
      this.calculateRainyDays(json);
      return json;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching data.');
    }
  }
}