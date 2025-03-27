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
import { ForecastDay, WeatherData } from './data-types.js';

/**
 * View component of the weather app.
 */
export class View {
  private app: HTMLDivElement;
  private title: HTMLHeadingElement;
  private weatherList: HTMLUListElement;
  private readonly imageBasePath: string = 'resources/';

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
        listElement.textContent = this.formatDailyForecast(forecast);
        const image: HTMLImageElement =
          this.createWeatherImage(forecast.day.daily_chance_of_rain);
        listElement.append(image);
        this.weatherList.append(listElement);
      }
    }
  }

  /**
   * Create an image element with the weather icon based on the
   * chance to rain
   * @param chanceToRain number between 0 and 1 representing the 
   * chance to rain
   * @returns image element with the weather icon
   */
  private createWeatherImage(chanceToRain: number): HTMLImageElement {
    const image: HTMLImageElement = this.createElement('img')! as HTMLImageElement;
    const rainThreshold: number = 0.5;
    image.src = this.imageBasePath + ((chanceToRain > rainThreshold) ? 
      'rain.jpg' : 'sun.jpg');
    image.width = 100;
    image.height = 100;
    return image;
  }

  /**
   * Format the daily forecast
   * @param forecast daily forecast
   * @returns formatted string with the daily forecast
   */
  private formatDailyForecast(forecast: ForecastDay): string {
    return 'Date: ' + forecast.date + ', ' +
      'Average temperature: ' + forecast.day.avgtemp_c + '°C, ' +
      'Chance of rain: ' + forecast.day.daily_chance_of_rain + '%';
  }
}
