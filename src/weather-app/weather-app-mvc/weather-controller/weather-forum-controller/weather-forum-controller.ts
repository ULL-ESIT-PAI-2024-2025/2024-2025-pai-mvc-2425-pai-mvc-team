/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Controller that uses the api
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherModel } from '../../weather-model/weather-model.js';
import { WeatherView } from '../../weather-view/weather-view.js';
import { WeatherController } from '../weather-controller.js';

/**
 * WeatherControllerApi component of the weather app.
 */
export class WeatherForumController extends WeatherController {
  /**
   * Creates a new WeatherControllerApi object.
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
   * Display the weather forecast data with the given input
   */
  override handleSumbitChangesElement = async (): Promise<void> => {
    const data = await this.model.getData();
    this.view.displayWeather(data);
  }

  /**
   * Handles the slider event, setting the number of days in the model and 
   * updating the slider text value
   * @param event event
   */
  override handleNumberOfDaysElement = (event: Event): void => {
    event.preventDefault();
    const input: HTMLInputElement = this.view.getNumberOfDaysElement().querySelector('input')!;
    const numberOfDays: number = parseInt(input.value);
    this.model.setDays(numberOfDays);
  }

  /**
   * Handles the location select event, setting the location in the model
   * @param event event to handle
   */
  override handleLocationElement = (event: Event): void => {
    event.preventDefault();
    const input: HTMLInputElement = this.view.getLocationElement().querySelector('input')!;
    const location: string = input.value;
    this.model.setLocation(location);
  }
}