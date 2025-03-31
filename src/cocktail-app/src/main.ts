/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025
 * @desc Controller class for the shopping list
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { CocktailAppBuilder } from './components/cocktail-app/cocktail-app-builder.ts';

function main() {
  const app = new CocktailAppBuilder().build();
  app.onUpdate((element) => {
    document.body.replaceChildren();
    document.body.appendChild(element);
  });
  app.render();
}

main();
