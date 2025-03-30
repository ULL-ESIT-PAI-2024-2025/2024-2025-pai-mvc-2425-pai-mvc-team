/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 * 
 * Weather controller interface for the weather app
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../weather-model/weather-model.js';
import { WeatherView } from '../weather-view/weather-view.js';

/**
 * Controller component of the weather app.
 * It have to listen to the view and updates the model.
 */
export abstract class WeatherController {
  constructor(protected model: WeatherModel, protected view: WeatherView) { }

  /**
   * Handles the elements that get the number of days.
   * @param event event to handle.
   */
  protected abstract handleNumberOfDaysElement(event: Event): void;

  /**
   * Handles the elements that get the location
   */
  protected abstract handleLocationElement(event: Event): void;

  /**
   * Handles the elements that submit changes.
   * Display the weather forecast data with the given input.
   */
  protected handleSumbitChangesElement = async (): Promise<void> => {
    const data = await this.model.getData();
    this.view.displayWeather(data);
  }
}