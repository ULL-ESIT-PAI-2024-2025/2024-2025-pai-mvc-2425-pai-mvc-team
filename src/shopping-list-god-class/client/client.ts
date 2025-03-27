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

import { ShoppingList } from "../shopping-list.js";

/**
 * @brief Main function. Emulates the main function in C++.
 */
function main(): void {
  const shoppingList: ShoppingList = new ShoppingList();
  console.log(shoppingList)
}

main();