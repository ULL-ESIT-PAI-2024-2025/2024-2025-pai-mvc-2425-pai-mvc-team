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

import type { Controller } from '../../core/controller';
import type { Cocktail } from '../../cocktail';
import type { View } from '../../core/view';
import type { Model } from '../../core/model';

/**
 * @class CocktailAppController
 * @implements Controller
 * @description Controls the flow of data between the `View` and `Model` in the Cocktail app.
 */
export class CocktailAppController implements Controller {
  private items: Cocktail[] = [];
  private renderCallback: (element: HTMLElement) => void = () => {};

  /**
   * Handles search queries by updating the model and re-rendering the view.
   *
   * @param {string} query - The search input provided by the user.
   * @private
   */
  private handleSearch(query: string): void {
    this.model.handle('search', query);
    this.model.fetchData().then((result) => {
      this.items = result;
      this.render();
    });
  }

  /**
   * Constructs a new `CocktailAppController` instance.
   *
   * @param {View<Cocktail[], string>} view - The view component responsible for rendering.
   * @param {Model<Cocktail[], string>} model - The model component handling data operations.
   */
  public constructor(
    protected view: View<Cocktail[], string>,
    protected model: Model<Cocktail[], string>
  ) {
    this.view.onEvent('search', (query: string) => this.handleSearch(query));
  }

  /**
   * Registers a callback function to handle updates to the rendered content.
   *
   * @param {(element: HTMLElement) => void} callback - The function to execute on updates.
   */
  public onUpdate(callback: (element: HTMLElement) => void): void {
    this.renderCallback = callback;
  }

  /**
   * Renders the view with the current cocktail data and triggers the update callback.
   */
  public render(): void {
    this.renderCallback(this.view.render(this.items));
  }
}
