export interface Cocktail {
  name: string;
  alcoholic: boolean;
  instructions: string;
  image: string;
  ingredients: { name: string; measure: string }[];
}
