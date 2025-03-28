/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc Interface for data providers
 */

/**
 * Represents a generic data provider interface that fetches data of a specific type.
 *
 * @template T - The type of data that this provider fetches.
 */
export interface DataProvider<T> {
  fetchData(): Promise<T>;
}
