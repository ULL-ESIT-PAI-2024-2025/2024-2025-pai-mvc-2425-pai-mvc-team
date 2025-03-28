import type { Cocktail } from '../../cocktail.ts';
import type { View } from '../../core/view';

export class CocktailAppView implements View<Cocktail[], string> {
  public constructor(
    private searchBar: View<void, string>,
    private cardView: View<Cocktail>
  ) {}

  public onEvent(event: string, callback: (eventInfo: string) => void): void {
    if (event === 'search') this.searchBar.onEvent('submit', callback);
  }

  public render(cocktails: Cocktail[]): HTMLElement {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cocktails-container');

    cocktails.forEach((cocktail) => {
      cardsContainer.appendChild(this.cardView.render(cocktail));
    });

    const container = document.createElement('main');
    container.appendChild(this.searchBar.render());
    container.appendChild(cardsContainer);

    return container;
  }
}
