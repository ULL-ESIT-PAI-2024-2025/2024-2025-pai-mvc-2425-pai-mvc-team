import type { Controller } from '../../core/controller';
import type { Cocktail } from '../../cocktail';
import type { View } from '../../core/view';
import type { Model } from '../../core/model';

export class CocktailAppController implements Controller {
  private items: Cocktail[] = [];
  private renderCallback: (element: HTMLElement) => void = () => {};

  private handleSearch(query: string): void {
    this.model.handle('search', query);
    this.model.fetchData().then((result) => {
      this.items = result;
      this.render();
    });
  }

  public constructor(
    protected view: View<Cocktail[], string>,
    protected model: Model<Cocktail[], string>
  ) {
    this.view.onEvent('search', (query: string) => this.handleSearch(query));
  }

  public onUpdate(callback: (element: HTMLElement) => void): void {
    this.renderCallback = callback;
  }

  public render(): void {
    this.renderCallback(this.view.render(this.items));
  }
}
