/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc View using a drop down list and a slider class for 
 * the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */
import { ForecastDay, WeatherData } from '../../data-types.js';
import { WeatherView } from '../weather-view.js';

/**
 * View using a drop down list and a slider 
 * component of the weather app.
 */
export class WeatherFormsView implements WeatherView {
  private app: HTMLDivElement;
  private title: HTMLHeadingElement;
  private weatherList: HTMLUListElement;
  private locationForm: HTMLFormElement;
  private daysForm: HTMLFormElement;
  private submitButton: HTMLButtonElement;
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
    // Form to select the location
    this.locationForm = this.createFormElement('text', 'location', 'Location');
    // Form to select the number of days to forecast
    this.daysForm = this.createFormElement('number', 'days', 'Number of days');
    // Submit button
    this.submitButton = this.createElement('button')! as HTMLButtonElement;
    this.submitButton.textContent = 'Submit';
    // Append all elements to the root element
    this.app.append(this.title, this.locationForm, this.daysForm,
      this.submitButton, this.weatherList);
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
          this.createWeatherImage(forecast);
        listElement.append(image);
        this.weatherList.append(listElement);
      }
    }
  }

  private createFormElement(type: string, name: string, placeholder: string): HTMLFormElement {
    const formElement: HTMLFormElement = this.createElement('form')! as HTMLFormElement;
    const inputElement: HTMLInputElement = this.createElement('input')! as HTMLInputElement;
    inputElement.type = type;
    inputElement.name = name;
    inputElement.placeholder = placeholder;
    const submitButton: HTMLButtonElement = this.createElement('button')! as HTMLButtonElement;
    submitButton.textContent = 'Submit';
    formElement.append(inputElement, submitButton);
    return formElement;
  }

  /**
   * Get the slider element
   * @returns slider element
   */
  public getNumberOfDaysElement(): HTMLFormElement {
    return this.daysForm;
  }

  /**
   * Get the location select element
   * @returns location select element
   */
  public getLocationElement(): HTMLFormElement {
    return this.locationForm;
  }

  /**
   * Get the submit button element
   * @returns submit button element
   */
  public getSumbitChangesElement(): HTMLButtonElement {
    return this.submitButton;
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
   * Create an image element with the weather icon based on the
   * chance to rain
   * @param forecast daily forecast
   * @returns image element with the weather icon
   */
  private createWeatherImage(forecast: ForecastDay): HTMLImageElement {
    const image: HTMLImageElement = this.createElement('img')! as HTMLImageElement;
    const imageSize: number = 100;
    image.src = this.imageBasePath + (forecast.day.isRainy ?
      'rain.png' : 'sun.png');
    image.width = imageSize;
    image.height = imageSize;
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
