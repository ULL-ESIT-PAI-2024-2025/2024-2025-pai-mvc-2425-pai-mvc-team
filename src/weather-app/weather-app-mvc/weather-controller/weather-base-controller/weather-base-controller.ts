/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 * 
 * Controller that uses an HTML slider for the number of days and a select 
 * element to set the location
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../../weather-model/weather-model.js';
import { WeatherView } from '../../weather-view/weather-view.js';
import { WeatherController } from '../weather-controller.js';

/**
 * Weather controller component that uses a view with a slider and a select 
 * element
 */
export class WeatherBaseController extends WeatherController {
  /**
   * Creates a weather controller listening to the view and updating the model
   * @param model - The model of the weather app.
   * @param view - The view of the weather app.
   */
  constructor(model: WeatherModel, view: WeatherView) {
    super(model, view);
    this.view.getNumberOfDaysElement().addEventListener('input', this.handleNumberOfDaysElement);
    this.view.getLocationElement().addEventListener('change', this.handleLocationElement);
    this.view.getSumbitChangesElement().addEventListener('click', this.handleSumbitChangesElement);
  }

  /**
   * Handles the slider event, setting the number of days in the model and 
   * updating the slider text value
   * @param event event
   */
  protected override handleNumberOfDaysElement = (event: Event): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const numberOfDays: number = parseInt(target.value);
    this.model.setDays(numberOfDays);
  }

  /**
   * Handles the location select event, setting the location in the model
   * @param event event to handle
   */
  protected override handleLocationElement = (event: Event): void => {
    const target: HTMLSelectElement = event.target as HTMLSelectElement;
    const location: string = target.value;
    this.model.setLocation(location);
  }
}