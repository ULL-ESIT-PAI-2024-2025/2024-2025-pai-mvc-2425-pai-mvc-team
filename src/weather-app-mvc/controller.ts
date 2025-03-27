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
  private readonly defaultNumberOfDays: number = 5;
  private readonly defaultLocation: string = 'Tenerife';
  /**
   * Creates a new Controller object.
   * @param model - The model of the weather app.
   * @param view - The view of the weather app.
   */
  constructor(private model: Model, private view: View) { }

  /**
   * Display the weather forecast data with the given input
   */
  public async displayWeather(): Promise<void> {
    const days: number = this.askNumberOfDaysToForecast();
    const location: string = this.askLocationToForecast();
    const data = await this.model.getData(days, location);
    this.view.displayWeather(data);
  }

  /**
   * Ask the user for the number of days to forecast
   * @returns the number of days to forecast or the default value
   */
  private askNumberOfDaysToForecast(): number {
    const promptResult: string = prompt('Enter the number of days to forecast') ??
      '';
    return (promptResult === '') ? this.defaultNumberOfDays : parseInt(promptResult);
  }

  /**
   * Ask the user for the location to forecast
   * @returns the location to forecast
   */
  private askLocationToForecast(): string {
    const promptResult: string = prompt('Enter the location to forecast') ?? '';
    return (promptResult === '') ? this.defaultLocation : promptResult;
  }
}
