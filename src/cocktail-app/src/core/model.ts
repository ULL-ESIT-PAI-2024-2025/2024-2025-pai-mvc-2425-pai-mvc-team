export interface Model<T, EventInfo = {}> {
  handle(event: string, eventInfo: EventInfo): void;
  fetchData(): Promise<T>;
}
