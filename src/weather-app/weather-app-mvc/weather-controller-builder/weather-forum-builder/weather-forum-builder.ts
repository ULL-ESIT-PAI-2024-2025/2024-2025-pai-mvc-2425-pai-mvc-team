/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Weather Builder for the Weather API Controller 
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherForumController } from "../../weather-controller/weather-forum-controller/weather-forum-controller.js";
import { WeatherBuilder } from "../weather-builder.js";

/**
 * Weather Builder for the Weather API Controller
 */
export class WeatherForumBuilder extends WeatherBuilder {
  override build(): WeatherForumController {
    return new WeatherForumController(this.model, this.view);
  }
}