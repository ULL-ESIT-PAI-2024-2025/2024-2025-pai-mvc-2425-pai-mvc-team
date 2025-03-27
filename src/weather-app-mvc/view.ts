/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View class for the weather app
 * @see {@link https://github.com/taniarascia/mvc}
 */
import { WeatherData } from './data-types.js';

/**
 * View component of the weather app.
 */
export class View {
  private app: HTMLDivElement;
  private title: HTMLHeadingElement;
  private weatherList: HTMLUListElement;

  /**
   * Creates a new View object. Creating all the elements in the HTML.
   */
  constructor() {
    // The root element
    this.app = document.getElementById('root')! as HTMLDivElement;
    // The title of the app
    this.title = this.createElement('h1')! as HTMLHeadingElement;
    this.title.textContent = 'Weather Forecast';
    // The list of weather data will be displayed here
    this.weatherList = this.createElement('ul', 'weather-list')! as HTMLUListElement;
    this.app.append(this.title, this.weatherList);
  }

  /**
   * Creates an element with a tag and a class name
   * @param tag tag name
   * @param className class name
   * @returns created element
   */
  private createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  /**
   * Display the weather forecast data
   * @param weatherData weather data to display
   */
  public displayWeather(weatherData: WeatherData): void {
    // Delete all nodes
    while (this.weatherList.firstChild) {
      this.weatherList.removeChild(this.weatherList.firstChild);
    }

    // Show default message if no data
    if (weatherData.forecast.forecastday.length === 0) {
      const baseParagraph: HTMLParagraphElement = this.createElement('p')! as
        HTMLParagraphElement;
      baseParagraph.textContent = 'No weather data available!';
      this.weatherList.append(baseParagraph);
    } else {
      
      for (const forecast of weatherData.forecast.forecastday) {
        const listElement: HTMLLIElement = this.createElement('li')! as
          HTMLLIElement;
        listElement.textContent = 
          `${forecast.date}: ${forecast.day.icon}`;
        this.weatherList.append(listElement);
      }
    }
  }
}
