/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View class for the shopping list
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { View } from '../view.js';
import { Model } from '../model.js';
import { Controller } from '../controller.js';

/**
 * @brief Main function. Emulates the main function in C++.
 */
function main(): void {
  const model: Model = new Model();
  const view: View = new View();
  const controller: Controller = new Controller(model, view);
  console.log(controller);
}

main();