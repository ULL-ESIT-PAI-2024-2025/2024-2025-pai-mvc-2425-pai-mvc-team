import { CocktailAppController } from './cocktail-app-controller.ts';
import { CocktailAppView } from './cocktail-app-view.ts';
import { CocktailAppModel } from './cocktail-app-model.ts';
import { SearchBarView } from '../search-bar/search-bar-view.ts';
import { CocktailCardView } from '../cocktail-card/cocktail-card-view.ts';

export class CocktailAppBuilder {
  public build(): CocktailAppController {
    return new CocktailAppController(
      new CocktailAppView(new SearchBarView(), new CocktailCardView()),
      new CocktailAppModel()
    );
  }
}
