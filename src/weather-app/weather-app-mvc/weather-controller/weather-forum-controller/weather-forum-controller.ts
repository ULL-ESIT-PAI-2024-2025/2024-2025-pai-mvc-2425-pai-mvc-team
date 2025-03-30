/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 * 
 * Controller that uses the api
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
 * Weather controller component that uses a view with a forum for the number of 
 * days and the location
 */
export class WeatherForumController extends WeatherController {
  /**
   * Creates a new weather controller listening to the view and updating the 
   * model
   * @param model - The model of the weather app.
   * @param view - The view of the weather app.
   */
  constructor(model: WeatherModel, view: WeatherView) {
    super(model, view);
    this.view.getNumberOfDaysElement().addEventListener('submit', this.handleNumberOfDaysElement);
    this.view.getLocationElement().addEventListener('submit', this.handleLocationElement);
    this.view.getSumbitChangesElement().addEventListener('click', this.handleSumbitChangesElement);
  }

  /**
   * Handles the number of days form event, setting the number of days in the
   * model
   * @param event event
   */
  protected override handleNumberOfDaysElement = (event: Event): void => {
    event.preventDefault();
    const input: HTMLInputElement = this.view.getNumberOfDaysElement().querySelector('input')!;
    const numberOfDays: number = parseInt(input.value);
    this.model.setDays(numberOfDays);
  }

  /**
   * Handles the location select event, setting the location in the model
   * @param event event to handle
   */
  protected override handleLocationElement = (event: Event): void => {
    event.preventDefault();
    const input: HTMLInputElement = this.view.getLocationElement().querySelector('input')!;
    const location: string = input.value;
    this.model.setLocation(location);
  }
}