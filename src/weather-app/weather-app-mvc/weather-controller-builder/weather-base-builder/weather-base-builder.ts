/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 *  Weather Builder for the Weather API Controller 
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherBaseController } from "../../weather-controller/weather-base-controller/weather-base-controller.js";
import { WeatherBuilder } from "../weather-builder.js";

/**
 * Weather Builder for the Weather Base Controller
 */
export class WeatherBaseBuilder extends WeatherBuilder {
  override build(): WeatherBaseController {
    return new WeatherBaseController(this.buildModel(), this.buildView());
  }
}