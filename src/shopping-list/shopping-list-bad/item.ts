/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Item class
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 * @see {@link https://github.com/taniarascia/mvc}
 */

export class Item {
  private readonly element: HTMLLIElement;
  
  constructor(name: string, id: number) {
    this.element = document.createElement('li');
    this.element.textContent = name;
    this.element.id = id.toString();
    const deleteButton: HTMLButtonElement =
      document.createElement('button')! as HTMLButtonElement;
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    this.element.append(deleteButton);
   }

  /**
   * Get the element
   * @returns The element
   */
  public getElement(): HTMLLIElement {
    return this.element;
  }
}