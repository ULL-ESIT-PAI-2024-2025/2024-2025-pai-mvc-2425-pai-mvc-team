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
 * The data of an item in the shopping list.
 */
export type ItemData = {
  name: string;
  id: number;
}

/**
 * Model component of the shopping list.
 */
export class Model {
  private items: ItemData[];
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
  public addItem(item: ItemData): void {
    this.items.push(item);
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
   * Returns the shopping list.
   * @returns The shopping list.
   */
  public getItems(): ItemData[] {
    return this.items;
  }

  /**
   * Returns the last id of the shopping list.
   * @returns The last id of the shopping list.
   */
  public getLastId(): number {
    return this.items[this.items.length - 1]?.id ?? -1;
  }
}