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

import type { Cocktail } from '../../cocktail';
import type { Model } from '../../core/model';

/**
 * @class CocktailAppModel
 * @implements Model<Cocktail[], string>
 * @description Handles data retrieval and transformation for the Cocktail app.
 */
export class CocktailAppModel implements Model<Cocktail[], string> {
  private filter: string = '';

  /**
   * Transforms raw API response data into a `Cocktail` object.
   *
   * @param {any} rawJson - The raw JSON object from the API response.
   * @returns {Cocktail} A formatted `Cocktail` object.
   * @private
   */
  private transform(rawJson: any): Cocktail {
    const ingredientsName = [
      rawJson.strIngredient1,
      rawJson.strIngredient2,
      rawJson.strIngredient3,
      rawJson.strIngredient4,
      rawJson.strIngredient5,
      rawJson.strIngredient6,
      rawJson.strIngredient7,
      rawJson.strIngredient8,
      rawJson.strIngredient9,
      rawJson.strIngredient10,
      rawJson.strIngredient11,
      rawJson.strIngredient12,
      rawJson.strIngredient13,
      rawJson.strIngredient14,
      rawJson.strIngredient15,
    ].filter((value) => value !== null);
    const ingredientsMeasures = [
      rawJson.strMeasure1,
      rawJson.strMeasure2,
      rawJson.strMeasure3,
      rawJson.strMeasure4,
      rawJson.strMeasure5,
      rawJson.strMeasure6,
      rawJson.strMeasure7,
      rawJson.strMeasure8,
      rawJson.strMeasure9,
      rawJson.strMeasure10,
      rawJson.strMeasure11,
      rawJson.strMeasure12,
      rawJson.strMeasure13,
      rawJson.strMeasure14,
      rawJson.strMeasure15,
    ];
    return {
      name: rawJson.strDrink,
      alcoholic: rawJson.strAlcoholic === 'Alcoholic',
      instructions: rawJson.strInstructions,
      image: rawJson.strDrinkThumb,
      ingredients: ingredientsName.map((name, index) => ({
        name,
        measure: ingredientsMeasures[index],
      })),
    };
  }

  /**
   * Handles an event to update the search filter.
   *
   * @param {string} event - The type of event (e.g., 'search').
   * @param {string} filter - The search query input by the user.
   */
  public handle(event: string, filter: string): void {
    if (event === 'search') this.filter = filter;
  }

  /**
   * Fetches cocktail data based on the current search filter.
   *
   * @returns {Promise<Cocktail[]>} A promise resolving to an array of `Cocktail` objects.
   */
  public async fetchData(): Promise<Cocktail[]> {
    if (!this.filter) return [];
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.filter}`
    );
    const json: { drinks: any[] } = await response.json();
    return json.drinks.map(this.transform);
  }
}
