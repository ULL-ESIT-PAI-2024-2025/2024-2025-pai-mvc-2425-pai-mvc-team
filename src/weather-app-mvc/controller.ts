/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Controller class for the weather app
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { Model } from './model.js';
import { View } from './view.js';

/**
 * Controller component of the weather app.
 */
export class Controller {
  /**
   * Creates a new Controller object.
   * @param model - The model of the weather app.
   * @param view - The view of the weather app.
   */
  constructor(private model: Model, private view: View) {
    this.view.getSlider().addEventListener('input', this.handleSlider);
    this.view.getLocationSelect().addEventListener('change', this.handleLocationSelection);
    this.view.getSubmitButton().addEventListener('click', this.displayWeather);
  }

  /**
   * Display the weather forecast data with the given input
   */
  public displayWeather = async (): Promise<void> => {
    const data = await this.model.getData();
    this.view.displayWeather(data);
  }

  /**
   * Handles the slider event, setting the number of days in the model and 
   * updating the slider text value
   * @param event event
   */
  private handleSlider = (event: Event): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const numberOfDays: number = parseInt(target.value);
    this.model.setDays(numberOfDays);
    this.view.updateSliderTextValue(target.value);
  }

  /**
   * Handles the location select event, setting the location in the model
   * @param event event to handle
   */
  private handleLocationSelection = (event: Event): void => {
    const target: HTMLSelectElement = event.target as HTMLSelectElement;
    const location: string = target.value;
    this.model.setLocation(location);
  }
}