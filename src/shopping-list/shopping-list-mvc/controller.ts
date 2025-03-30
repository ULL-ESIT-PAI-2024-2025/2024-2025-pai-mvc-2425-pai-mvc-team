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

import { Model } from './model.js'
import { View } from './view.js'

/**
 * Controller component of the shopping list.
 */
export class Controller {
  /**
   * Creates a new Controller object.
   * @param model - The model of the shopping list.
   * @param view - The view of the shopping list.
   */
  constructor(private model: Model, private view: View) {
    this.view.displayItems(this.model.getItems());
    // We use Arrow functions since they don't have their own bindings 
    // to this, arguments, or super, see the function example
    // for more details.
    this.view.getForm().addEventListener('submit', this.handleAddItem);
    this.view.getItemList().addEventListener('click', this.handleDeleteItem);
  }

  /**
   * Handles the deletion of an item.
   * @param event - The event that triggered the deletion.
   */
  private handleDeleteItem = (event: Event): void => {
    const target: HTMLElement = event.target as HTMLElement;
    const id: string | undefined = target.parentElement?.id;
    if (target?.classList?.contains('delete') && id) {
      this.model.removeItem(parseInt(id!));
      this.view.displayItems(this.model.getItems());
    }
  }

  /**
   * Handles the addition of a new item.
   * @param event - The event that triggered the addition.
   */
  private handleAddItem = (event: Event): void => {
    // Since we are using a form which contains a submit button.
    // The form is submitted when the button is clicked,
    // we need to prevent the default behavior of sending
    // the form to avoid the page to reload.
    event.preventDefault();
    const input: HTMLInputElement = this.view.getInput();
    if (input.value) {
      this.model.addItem(input.value);
      this.view.displayItems(this.model.getItems());
      // Resets the input field
      input.value = '';
    }
  }
}