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

import type { Cocktail } from '../../cocktail.ts';
import type { View } from '../../core/view';

/**
 * @class CocktailAppView
 * @implements View<Cocktail[], string>
 * @description Manages the UI rendering and event handling for the Cocktail app.
 */
export class CocktailAppView implements View<Cocktail[], string> {
  /**
   * Creates an instance of `CocktailAppView`.
   *
   * @param {View<void, string>} searchBar - The view component responsible for the search bar.
   * @param {View<Cocktail>} cardView - The view component responsible for rendering individual cocktail cards.
   */
  public constructor(
    private searchBar: View<void, string>,
    private cardView: View<Cocktail>
  ) {}

  /**
   * Registers an event listener for user interactions.
   *
   * @param {string} event - The event type (currently supports 'search').
   * @param {(eventInfo: string) => void} callback - The callback function to execute when the event occurs.
   */
  public onEvent(event: string, callback: (eventInfo: string) => void): void {
    if (event === 'search') this.searchBar.onEvent('submit', callback);
  }

  /**
   * Renders the search bar and a list of cocktail cards inside a container element.
   *
   * @param {Cocktail[]} cocktails - The list of cocktails to display.
   * @returns {HTMLElement} The generated HTML structure.
   */
  public render(cocktails: Cocktail[]): HTMLElement {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cocktails-container');

    cocktails.forEach((cocktail) => {
      cardsContainer.appendChild(this.cardView.render(cocktail));
    });

    const container = document.createElement('main');
    container.appendChild(this.searchBar.render());
    container.appendChild(cardsContainer);

    return container;
  }
}
