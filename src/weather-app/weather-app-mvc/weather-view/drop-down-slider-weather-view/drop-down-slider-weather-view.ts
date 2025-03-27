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
export class DropDownSliderWeatherView implements WeatherView {
  private app: HTMLDivElement;
  private title: HTMLHeadingElement;
  private weatherList: HTMLUListElement;
  private locationSelect: HTMLSelectElement;
  private daysSliderContainer: HTMLDivElement;
  private submitButton: HTMLButtonElement;
  private readonly imageBasePath: string = 'resources/';
  private readonly availableLocations: string[] = [
    'Tenerife', 'Madrid',
    'Barcelona', 'Sevilla',
    'Valencia'
  ];

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
    // Drop down menu to select the location
    this.locationSelect = this.createDropdownList();
    // Slider to select the number of days to forecast
    this.daysSliderContainer = this.createSlider();
    // Updates the slider text value
    this.getNumberOfDaysElement().addEventListener('input', (event: Event) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      this.updateSliderTextValue(target.value);
    });
    // Submit button
    this.submitButton = this.createElement('button')! as HTMLButtonElement;
    this.submitButton.textContent = 'Submit';
    // Append all elements to the root element
    this.app.append(this.title, this.locationSelect, this.daysSliderContainer,
      this.submitButton, this.weatherList);
  }

  /**
   * Display the weather forecast data
   * @param weatherData weather data to display
   */
  public displayWeather(weatherData: WeatherData): void {
    this.updateSliderTextValue(this.getNumberOfDaysElement().value);
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

  /**
   * Updates the slider text value
   */
  private updateSliderTextValue(displayValue: string): void {
    this.daysSliderContainer.querySelector('.slider-value')!.textContent =
      displayValue;
  }

  /**
   * Get the slider element
   * @returns slider element
   */
  public getNumberOfDaysElement(): HTMLInputElement {
    // We prefix the class name with a dot to tell the querySelector
    // that we are looking for a class name.
    return this.daysSliderContainer.querySelector('.slider')!;
  }

  /**
   * Get the location select element
   * @returns location select element
   */
  public getLocationElement(): HTMLSelectElement {
    return this.locationSelect;
  }

  /**
   * Get the submit button element
   * @returns submit button element
   */
  public getSumbitChangesElement(): HTMLButtonElement {
    return this.submitButton;
  }

  /**
   * Creates a slider to select the number of days to forecast
   */
  private createSlider(): HTMLDivElement {
    const sliderContainer: HTMLDivElement = this.createElement('div')! as
      HTMLDivElement;
    const labelTitle: HTMLLabelElement = this.createElement('label')! as
      HTMLLabelElement;
    labelTitle.textContent = 'Select the numbers of days: ';
    sliderContainer.append(labelTitle);
    const slider: HTMLInputElement = this.createElement('input', 'slider')! as
      HTMLInputElement;
    slider.type = 'range';
    slider.min = '1';
    slider.max = '10';
    slider.value = '5';
    slider.step = '1';
    sliderContainer.append(slider);
    const sliderValue: HTMLLabelElement = this.createElement('label',
      'slider-value')! as HTMLLabelElement;
    sliderValue.textContent = slider.value;
    sliderContainer.append(sliderValue);
    return sliderContainer;
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
   * Creates a dropdown list with the locations
   * @returns dropdown list with the locations
   */
  private createDropdownList(): HTMLSelectElement {
    const selectElement: HTMLSelectElement = this.createElement('select')! as
      HTMLSelectElement;
    const optionTitle: HTMLLabelElement = this.createElement('label')! as
      HTMLLabelElement;
    optionTitle.textContent = 'Select a location: ';
    selectElement.append(optionTitle);
    for (const location of this.availableLocations) {
      const option: HTMLOptionElement = this.createElement('option')! as
        HTMLOptionElement;
      option.value = location;
      option.text = location;
      selectElement.append(option);
    }
    return selectElement;
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
