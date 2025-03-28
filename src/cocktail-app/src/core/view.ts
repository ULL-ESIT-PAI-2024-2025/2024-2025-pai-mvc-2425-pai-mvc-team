export interface View<Data, EventInfo = {}> {
  onEvent(event: string, callback: (eventInfo: EventInfo) => void): void;
  render(data: Data): HTMLElement;
}
