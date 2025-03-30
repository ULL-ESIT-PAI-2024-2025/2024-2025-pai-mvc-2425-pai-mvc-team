/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * Model abstract class for the weather app
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherData } from '../data-types.js';

/**
 * Model base abstract class for the weather app
 */
export abstract class WeatherModel {
  protected readonly defaultDays: number = 5;
  protected readonly defaultLocation: string = 'Tenerife';
  protected days: number;
  protected location: string;
  
  /**
   * Creates a new Model
   */
  constructor(protected rainyDayThreeshold = 0.5) {
    this.days = this.defaultDays;
    this.location = this.defaultLocation;
  }

  /**
   * Get the weather data
   * @returns a promise with the weather data
   */
  public abstract getData(): Promise<WeatherData>;

  /**
   * Sets the number of days to get the weather data
   * @param days number of days
   */
  public setDays(days: number) {
    this.days = days;
  }

  /**
   * Sets the location to get the weather data
   * @param location location
   */
  public setLocation(location: string) {
    this.location = location;
  }

  /**
   * Sets the isRainy property of the forecast days based on the 
   * daily_chance_of_rain property of the forecast
   * @param data weather data
   */
  protected calculateRainyDays(data: WeatherData): void {
    for (const forecast of data.forecast.forecastday) {
      forecast.day.isRainy =
        forecast.day.daily_chance_of_rain > this.rainyDayThreeshold * 100;
    }
  }
}