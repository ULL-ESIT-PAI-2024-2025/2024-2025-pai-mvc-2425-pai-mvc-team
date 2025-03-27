/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Controller class for the shopping list
 * @see {@link https://github.com/taniarascia/mvc}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions}
 */

import { Model } from './model.js'
import { View } from './view.js'
import { ItemData } from './data-types.js'

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
    this.displayChanges(this.model.getItems());
    // This line will cause an error because we are using a callback function, 
    // so the 'this' keyword does not refer to this class scope but the scope
    // in which the function is being called.
    // If we want to use the 'this' keyword to refer to the class scope,
    // we need to bind the function to the class scope or use Arrow functions
    // since they don't have their own bindings to this, arguments, or super
    // this.view.getForm().addEventListener('submit', this.handleAddItem);
    this.view.getForm().addEventListener('submit', this.handleAddItem.bind(this));
    // this.view.getItemList().addEventListener('click', this.handleDeleteItem);
    this.view.getItemList().addEventListener('click', this.handleDeleteItem.bind(this));
  }

  /**
   * Handles the deletion of an item.
   * @param event - The event that triggered the deletion.
   */
  private handleDeleteItem(event: Event): void  {
    const target: HTMLElement = event.target as HTMLElement;
    const id: string | undefined = target.parentElement?.id;
    if (target?.classList?.contains('delete') && id) {
      this.model.removeItem(parseInt(id!));
      this.displayChanges(this.model.getItems());
    }
  }

  /**
   * Handles the addition of a new item.
   * @param event - The event that triggered the addition.
   */
  private handleAddItem(event: Event): void {
    // Since we are using a form which contains a submit button.
    // The form is submitted when the button is clicked,
    // we need to prevent the default behavior of sending
    // the form to avoid the page to reload.
    event.preventDefault();
    const input: HTMLInputElement = this.view.getInput();
    if (input.value) {
      this.model.addItem(input.value);
      this.displayChanges(this.model.getItems());
      // Resets the input field
      input.value = '';
    }
  }


  /**
   * Tells the view to display the items.
   * @param items changed items
   */
  private displayChanges(items: ItemData[]): void {
    this.view.displayItems(items);
  }
}