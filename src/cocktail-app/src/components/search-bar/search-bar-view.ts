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

import type { View } from '../../core/view.ts';

/**
 * @class SearchBarView
 * @implements View<void, string>
 * @description Represents a search bar component that allows users to input a cocktail name and submit a search query.
 */
export class SearchBarView implements View<void, string> {
  private submitHandler: (text: string) => void;

  /**
   * Creates an instance of `SearchBarView`.
   */
  public constructor() {
    this.submitHandler = (_) => {};
  }

  /**
   * Registers an event listener for search submissions.
   *
   * @param {string} event - The event type (only supports 'submit').
   * @param {(eventInfo: string) => void} callback - The callback function to handle search queries.
   */
  public onEvent(event: string, callback: (eventInfo: string) => void): void {
    if (event === 'submit') this.submitHandler = callback;
  }

  /**
   * Renders the search bar, including an input field and a submit button.
   *
   * @returns {HTMLElement} The generated HTML structure containing the search input and button.
   */
  public render(): HTMLElement {
    // <input class="input is-rounded" type="text" placeholder="Rounded input" />
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search a cocktail recipe...';
    input.classList.add('input', 'is-rounded');

    const submitButton = document.createElement('button');
    submitButton.classList.add('button', 'is-primary');
    submitButton.innerText = 'Search';
    submitButton.addEventListener('click', () => {
      this.submitHandler(input.value);
      input.value = '';
    });

    const container = document.createElement('div');
    container.id = 'search-container';
    container.appendChild(input);
    container.appendChild(submitButton);

    return container;
  }
}
