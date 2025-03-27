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
import { ItemData } from './data-types.js';
/**
 * View component of the shopping list.
 */
export class View {
  private app: HTMLDivElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private itemList: HTMLUListElement;

  /**
   * Creates a new View object. Creating all the elements in the HTML.
   */
  constructor() {
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
  }

  /**
   * Gets the form element (used to assign event listeners
   * in the controller)
   * @returns form element
   */
  public getForm(): HTMLFormElement {
    return this.form;
  }

  /**
   * Gets the input element (used to get the value in the controller)
   * @returns input element
   */
  public getInput(): HTMLInputElement {
    return this.input;
  }

  /**
   * Gets the item list element (used to assign event listeners
   * in the controller)
   * @returns item list element
   */
  public getItemList(): HTMLUListElement {
    return this.itemList;
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
}