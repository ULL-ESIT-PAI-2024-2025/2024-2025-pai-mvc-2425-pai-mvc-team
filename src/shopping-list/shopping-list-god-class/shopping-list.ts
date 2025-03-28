/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Shopping list god class
 * @see {@link https://github.com/taniarascia/mvc}
 */

import { ItemData } from './data-types';

/**
 * Shopping list god class.
 */
export class ShoppingList {
  private items: ItemData[];
  private app: HTMLDivElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private itemList: HTMLUListElement;
  /**
   * Creates a new ShoppingList, with an empty array of items.
   */
  constructor() {
    // The items in the shopping list
    this.items = [];
    // The root element
    this.app = document.getElementById('root')! as HTMLDivElement;
    // The title of the app
    this.title = this.createElement('h1')! as HTMLHeadingElement;
    this.title.textContent = 'Shopping List'
    // The form, has a input as a text and a submit button
    this.form = this.createElement('form')! as HTMLFormElement;
    // Input element (text)
    this.input = this.createElement('input')! as HTMLInputElement;
    this.input.type = 'text';
    this.input.placeholder = 'Add item';
    this.input.name = 'item';
    // Submit button
    this.submitButton = this.createElement('button')! as HTMLButtonElement;
    this.submitButton.textContent = 'Submit'
    this.form.append(this.input, this.submitButton)
    // The list of items will be displayed here
    this.itemList = this.createElement('ul', 'item-list')! as HTMLUListElement;
    this.app.append(this.title, this.form, this.itemList)

    // Add event listeners
    this.form.addEventListener('submit', this.handleAddItem);
    this.itemList.addEventListener('click', this.handleDeleteItem);
  }

  /**
   * Adds an item to the shopping list.
   * @param item - The item to add to the list.
   */
  public addItem(item: string): void {
    const newItem: ItemData = {
      name: item,
      id: this.getLastId() + 1,
    };
    this.items.push(newItem);
  }

  /**
   * Removes an item from the shopping list.
   * @param itemId - The id of the item to remove from the list.
   */
  public removeItem(itemId: number): void {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Display the items in the shopping list
   * @param items items to display
   */
  public displayItems(items: ItemData[]): void {
    // Delete all nodes
    while (this.itemList.firstChild) {
      this.itemList.removeChild(this.itemList.firstChild);
    }

    // Show default message
    if (items.length === 0) {
      const baseParagraph: HTMLParagraphElement = this.createElement('p')! as
        HTMLParagraphElement;
      baseParagraph.textContent = 'Nothing to buy! Add a item?'
      this.itemList.append(baseParagraph);
    } else {
      for (const item of items) {
        const listElement: HTMLLIElement = this.createElement('li')! as
          HTMLLIElement;
        listElement.textContent = item.name;
        listElement.id = item.id.toString();
        const deleteButton: HTMLButtonElement =
          this.createElement('button', 'delete')! as HTMLButtonElement;
        deleteButton.textContent = 'Delete';
        listElement.append(deleteButton);
        this.itemList.append(listElement);
      }
    }
  }

  /**
   * Creates an element with a tag and a class name
   * @param tag tag name
   * @param className class name
   * @returns created element
   */
  private createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  /**
   * Returns the last id of the shopping list.
   * @returns The last id of the shopping list.
   */
  private getLastId(): number {
    return this.items[this.items.length - 1]?.id ?? -1;
  }

  /**
   * Handles the deletion of an item.
   * @param event - The event that triggered the deletion.
   */
  private handleDeleteItem = (event: Event): void => {
    const target: HTMLElement = event.target as HTMLElement;
    const id: string | undefined = target.parentElement?.id;
    if (target?.classList?.contains('delete') && id) {
      this.removeItem(parseInt(id!));
      this.displayItems(this.items);
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
    const input: HTMLInputElement = this.input;
    if (input.value) {
      this.addItem(input.value);
      this.displayItems(this.items);
      // Resets the input field
      input.value = '';
    }
  }

}