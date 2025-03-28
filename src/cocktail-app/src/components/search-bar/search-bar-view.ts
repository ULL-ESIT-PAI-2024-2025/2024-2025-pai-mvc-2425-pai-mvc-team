import type { View } from '../../core/view.ts';

export class SearchBarView implements View<void, string> {
  private submitHandler: (text: string) => void;

  public constructor() {
    this.submitHandler = (_) => {};
  }

  public onEvent(event: string, callback: (eventInfo: string) => void): void {
    if (event === 'submit') this.submitHandler = callback;
  }

  public render(): HTMLElement {
    // <input class="input is-rounded" type="text" placeholder="Rounded input" />
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search a cocktail recipe...';
    input.classList.add('input', 'is-rounded');

    const submitButton = document.createElement('button');
    submitButton.classList.add('button', 'is-primary');
    submitButton.innerText = 'Search';
    submitButton.addEventListener('click', () => {
      this.submitHandler(input.value);
      input.value = '';
    });

    const container = document.createElement('div');
    container.id = 'search-container';
    container.appendChild(input);
    container.appendChild(submitButton);

    return container;
  }
}
