/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View interface for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherData } from '../data-types.js';
/**
 * View component of the weather app.
 */
export interface WeatherView {
  /**
   * Gets the element that displays the weather data
   * @returns the element that displays the weather data
   */
  getNumberOfDaysElement(): HTMLElement;

  /**
   * Gets the element that displays the weather data
   * @returns the element that displays the weather data
   */
  getLocationElement(): HTMLElement;

  /**
   * Gets the element that displays the weather data
   * @returns the element that displays the weather data
   */
  getSumbitChangesElement(): HTMLElement;

  /**
   * Displays the weather data
   * @param data weather data
   */
  displayWeather(data: WeatherData): void;
}
