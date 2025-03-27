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
  constructor(private model: Model, private view: View) { }
}
