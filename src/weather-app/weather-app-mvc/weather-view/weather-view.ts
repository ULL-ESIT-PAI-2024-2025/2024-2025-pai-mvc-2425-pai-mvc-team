/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 *  View interface for the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

import { WeatherData } from '../data-types.js';
import { ForecastDay } from '../data-types.js';
/**
 * View component of the weather app.
 */
export abstract class WeatherView {
  /**
   * Creates a new View object creating all the elements in the HTML.
   */
  constructor(protected app: HTMLDivElement,
    protected title: HTMLHeadingElement,
    protected weatherList: HTMLElement,
    protected locationElement: HTMLElement,
    protected daysElement: HTMLElement,
    protected submitButton: HTMLElement,
    protected readonly imageBasePath: string = 'resources/'
  ) { }
  /**
   * Gets the element that get the number of days to do the forecast.
   * @returns the element that get the number of days to do the forecast.
   */
  public getNumberOfDaysElement(): HTMLElement {
    return this.daysElement;
  }

  /**
   * Gets the element that get the location to do the forecast.
   * @returns the element that get the location to do the forecast.
   */
  public getLocationElement(): HTMLElement {
    return this.locationElement;
  }

  /**
   * Gets the element that get the submit changes button.
   * @returns the element that get the submit changes button.
   */
  public getSumbitChangesElement(): HTMLElement {
    return this.submitButton;
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
      const baseParagraph: HTMLParagraphElement = WeatherView.createElement('p')! as
        HTMLParagraphElement;
      baseParagraph.textContent = 'No weather data available!';
      this.weatherList.append(baseParagraph);
    } else {
      for (const forecast of weatherData.forecast.forecastday) {
        const listElement: HTMLLIElement = WeatherView.createElement('li')! as
          HTMLLIElement;
        listElement.textContent = this.formatDailyForecast(forecast);
        const image: HTMLImageElement =
          this.createWeatherImage(forecast);
        listElement.append(image);
        this.weatherList.append(listElement);
      }
    }
  }

  /**
   * Create an image element with the weather icon based on the
   * chance to rain
   * @param forecast daily forecast
   * @returns image element with the weather icon
   */
  private createWeatherImage(forecast: ForecastDay): HTMLImageElement {
    const image: HTMLImageElement = WeatherView.createElement('img')! as HTMLImageElement;
    const imageSize: number = 100;
    image.src = this.imageBasePath + (forecast.day.isRainy ?
      'rain.png' : 'sun.png');
    image.width = imageSize;
    image.height = imageSize;
    return image;
  }

  /**
   * Creates an element with a tag and a class name
   * @param tag tag name
   * @param className class name
   * @returns created element
   */
  static createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    return element;
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
