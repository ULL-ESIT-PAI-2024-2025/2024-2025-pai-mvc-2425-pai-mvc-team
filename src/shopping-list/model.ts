/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Model class for the shopping list
 * @see {@link https://github.com/taniarascia/mvc}
 */

/**
 * Model component of the shopping list.
 */
export class Model {
  private items: string[];
  /**
   * Creates a new Model, with an empty array of items.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds an item to the shopping list.
   * @param item - The item to add to the list.
   */
  public addItem(item: string): void {
    this.items.push(item);
  }

  /**
   * Removes an item from the shopping list.
   * @param item - The item to remove from the list.
   */
  public removeItem(item: string): void {
    this.items = this.items.splice(this.items.indexOf(item), 1)
  }

  /**
   * Returns the shopping list.
   * @returns The shopping list.
   */
  public getItems(): string[] {
    return this.items;
  }
}