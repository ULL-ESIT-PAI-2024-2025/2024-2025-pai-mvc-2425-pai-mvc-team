export interface Controller {
  onUpdate(callback: (element: HTMLElement) => void): void;
  render(): void;
}
