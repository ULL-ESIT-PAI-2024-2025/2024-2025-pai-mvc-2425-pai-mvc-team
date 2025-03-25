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

/**
 * View component of the shopping list.
 */
export class View {
  private app: HTMLDivElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private todoList: HTMLUListElement;
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
    this.input.placeholder = 'Add product';
    this.input.name = 'product';
    // Submit button
    this.submitButton = this.createElement('button')! as HTMLButtonElement;
    this.submitButton.textContent = 'Submit'
    this.form.append(this.input, this.submitButton)
    // The list of products will be displayed here
    this.todoList = this.createElement('ul', 'todo-list')! as HTMLUListElement;
    this.app.append(this.title, this.form, this.todoList)
    // this._initLocalListeners()
  }

  /**
   * Creates an element with a tag and a class name
   * @param tag tag name
   * @param className class name
   * @returns created element
   */
  private createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag)
    if (className) {
      element.classList.add(className)
    }
    return element;
  }
}