/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Model class for the shopping list
 * @see {@link https://github.com/taniarascia/mvc}
 */
import { WeatherData } from './data-types.js';
/**
 * Model component of the shopping list.
 */
export class Model {
  private readonly API_KEY: string = '307b0af477e64520b4a103306252703';
  private readonly PAGE_URL: string = 'http://api.weatherapi.com/v1';
  private readonly ENDPOINT: string = '/forecast.json';
  private readonly BASE_URL: string =
    `${this.PAGE_URL}${this.ENDPOINT}?key=${this.API_KEY}`;
  /**
   * Creates a new Model
   */
  constructor() { }

  /**
   * Get the weather data
   * @returns a promise with the weather data
   */
  public async getData(days?: number, location?: string): Promise<WeatherData> {
    try {
      const URL: string = this.BASE_URL + `&q=${location}&days=${days}`;
      const response = await fetch(URL);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while fetching data.');
    }
  }
}