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

import { CocktailAppController } from './cocktail-app-controller.ts';
import { CocktailAppView } from './cocktail-app-view.ts';
import { CocktailAppModel } from './cocktail-app-model.ts';
import { SearchBarView } from '../search-bar/search-bar-view.ts';
import { CocktailCardView } from '../cocktail-card/cocktail-card-view.ts';

/**
 * @class CocktailAppBuilder
 * @description A builder class for creating instances of `CocktailAppController`.
 */
export class CocktailAppBuilder {
  /**
   * Builds and returns an instance of `CocktailAppController`.
   *
   * @returns {CocktailAppController} A fully initialized `CocktailAppController` instance.
   */
  public build(): CocktailAppController {
    return new CocktailAppController(
      new CocktailAppView(new SearchBarView(), new CocktailCardView()),
      new CocktailAppModel()
    );
  }
}
