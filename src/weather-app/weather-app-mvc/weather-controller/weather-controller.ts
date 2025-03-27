/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Weather controller interface for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../weather-model/weather-model.js';
import { WeatherView } from '../weather-view/weather-view.js';

/**
 * Controller component of the weather app.
 */
export abstract class WeatherController {
  constructor(protected model: WeatherModel, protected view: WeatherView) {}
  /**
   * Handles the elements that get the number of days
   */
  protected abstract handleNumberOfDaysElement(event: Event): void;
  /**
   * Handles the elements that get the location
   */
  protected abstract handleLocationElement(event: Event): void;
  /**
   * Handles the elements that submit changes
   */
  protected abstract handleSumbitChangesElement(): Promise<void>;
}