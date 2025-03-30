/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Shopping list class
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { Item } from './item.js';

/**
 * Shopping list class
 */
export class ShoppingList {
  private itemList: HTMLUListElement;
  private items: Item[];
  private appRoot: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private lastId: number;

  /**
   * Creates a new shopping list
   * @param appRoot - The root element of the application
   * @param itemList - The list of items
   */
  constructor() {
    this.appRoot = document.getElementById('root')!;
    this.itemList = document.createElement('ul');
    this.itemList.className = 'item-list';
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add item';
    this.input.name = 'item';
    this.submitButton = document.createElement('button');
    this.submitButton.textContent = 'Submit';
    this.form.append(this.input, this.submitButton);
    this.appRoot.append(this.form, this.itemList);
    this.items = [];
    this.lastId = 0;
    this.handleUserInput();
  }

  /**
   * Removes an item from the shopping list
   * @param itemId - The id of the item to remove
   */
  private removeItem(itemId: number): void {
    const index = this.items.findIndex(
      (item) => Number(item.getElement().id) === itemId
    );
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  /**
   * Handles user input
   */
  private handleUserInput(): void {
    this.form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const itemName = this.input.value;
      if (itemName) {
        const newItem = new Item(itemName, this.lastId++);
        this.items.push(newItem);
        this.input.value = '';
      }
      this.displayChanges();
    });
    this.itemList.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('delete')) {
        const itemId = parseInt(target.parentElement?.id!);
        const itemToDelete = document.getElementById(itemId.toString());
        if (itemToDelete) {
          this.itemList.removeChild(itemToDelete);
          this.removeItem(itemId);
        }
      }
      this.displayChanges();
    });
  }

  /**
   * Displays the changes in the shopping list
   */
  private displayChanges(): void {
    while (this.itemList.firstChild) {
      this.itemList.removeChild(this.itemList.firstChild);
    }
    if (this.items.length === 0) {
      const baseParagraph: HTMLParagraphElement = document.createElement('p')! as
        HTMLParagraphElement;
      baseParagraph.textContent = 'Nothing to buy! Add a item?'
      this.itemList.append(baseParagraph);
    } else {
      for (const item of this.items) {
        const listElement: HTMLLIElement = item.getElement();
        this.itemList.append(listElement);
      }
    }
  }
}