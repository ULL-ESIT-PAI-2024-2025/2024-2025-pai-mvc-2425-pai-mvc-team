/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * Weather Builder for the Weather API Controller 
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherForumController } from "../../weather-controller/weather-forum-controller/weather-forum-controller.js";
import { WeatherBuilder } from "../weather-builder.js";
import { WeatherFormsView } from '../../weather-view/forms-view/forms-view.js';
import { WeatherView } from "../../weather-view/weather-view.js";

/**
 * Weather Builder for the Weather Forum Controller
 */
export class WeatherForumBuilder extends WeatherBuilder {
  /**
   * Builds the weather app using the WeatherForumController
   * @returns The weather app.
   */
  override build(): WeatherForumController {
    return new WeatherForumController(this.buildModel(), this.buildView());
  }

  /**
   * Builds the view of the weather app using the WeatherFormsView
   * @returns The view of the weather app. 
   */
  override buildView(): WeatherView {
    return new WeatherFormsView();
  }
}