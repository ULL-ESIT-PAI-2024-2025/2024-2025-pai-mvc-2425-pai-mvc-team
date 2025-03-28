/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Weather Builder 
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherController } from "../weather-controller/weather-controller.js";
import { WeatherModel } from "../weather-model/weather-model.js";
import { ApiWeatherModel } from "../weather-model/api-weather-model/api-weather-model.js";
import { WeatherView } from "../weather-view/weather-view.js";
import { DropDownSliderWeatherView } from "../weather-view/drop-down-slider-weather-view/drop-down-slider-weather-view.js";

/**
 * @brief WeatherBuilder class. 
 */
export abstract class WeatherBuilder {
  protected model: WeatherModel;
  protected view: WeatherView;

  constructor() {
    this.model = new ApiWeatherModel();
    this.view = new DropDownSliderWeatherView();
  }

  /**
   * @brief Builds the weather app.
   * @returns The weather app.
   */
  public abstract build(): WeatherController;

  /**
   * @brief Sets the model.
   * @param model The model.
   */
  public setModel(model: WeatherModel): void {
    this.model = model;
  }

  /**
   * @brief Sets the view.
   * @param view The view.
   */
  public setView(view: WeatherView): void {
    this.view = view;
  }
}