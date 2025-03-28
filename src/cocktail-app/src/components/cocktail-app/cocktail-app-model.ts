import type { Cocktail } from '../../cocktail';
import type { Model } from '../../core/model';

export class CocktailAppModel implements Model<Cocktail[], string> {
  private filter: string = '';

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

  public handle(event: string, filter: string): void {
    if (event === 'search') this.filter = filter;
  }

  public async fetchData(): Promise<Cocktail[]> {
    if (!this.filter) return [];
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.filter}`
    );
    const json: { drinks: any[] } = await response.json();
    return json.drinks.map(this.transform);
  }
}
