/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 *  View using a drop down list and a slider class for 
 * the weather app
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */
import { WeatherView } from '../weather-view.js';

/**
 * View using a drop down list and a slider 
 * component of the weather app.
 */
export class DropDownSliderWeatherView extends WeatherView {
  private daysSliderContainer: HTMLDivElement;
  private static readonly availableLocations: string[] = [
    'Tenerife', 'Madrid',
    'Barcelona', 'Sevilla',
    'Valencia'
  ];

  /**
   * Creates a new View object creating all the elements in the HTML.
   */
  constructor() {
    const app: HTMLDivElement = document.getElementById('root')! as HTMLDivElement;
    const title: HTMLHeadingElement = WeatherView.createElement('h1')! as HTMLHeadingElement;
    title.textContent = 'Weather Forecast';
    const weatherList = WeatherView.createElement('ul', 'weather-list')! as HTMLUListElement;
    const locationSelect = DropDownSliderWeatherView.createDropdownList();
    const daysSliderContainer = DropDownSliderWeatherView.createSlider();
    const submitButton = WeatherView.createElement('button')! as HTMLButtonElement;
    submitButton.textContent = 'Submit';
    app.append(title, locationSelect, daysSliderContainer,
      submitButton, weatherList);
    super(app, title, weatherList, locationSelect, daysSliderContainer, submitButton);
    // Updates the slider text value
    this.daysSliderContainer = daysSliderContainer;
    this.getNumberOfDaysElement().addEventListener('input', (event: Event) => {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      this.updateSliderTextValue(target.value);
    });
  }

  /**
   * Updates the slider text value
   */
  private updateSliderTextValue(displayValue: string): void {
    this.daysSliderContainer.querySelector('.slider-value')!.textContent = displayValue;
  }

  /**
   * Get the slider element
   * @returns slider element
   */
  public override getNumberOfDaysElement(): HTMLInputElement {
    // We prefix the class name with a dot to tell the querySelector
    // that we are looking for a class name.
    return this.daysSliderContainer.querySelector('.slider')!;
  }

  /**
   * Creates a slider to select the number of days to forecast
   * @returns slider element
   */
  private static createSlider(): HTMLDivElement {
    const sliderContainer: HTMLDivElement = WeatherView.createElement('div')! as
      HTMLDivElement;
    const labelTitle: HTMLLabelElement = WeatherView.createElement('label')! as
      HTMLLabelElement;
    labelTitle.textContent = 'Select the numbers of days: ';
    sliderContainer.append(labelTitle);
    const slider: HTMLInputElement = WeatherView.createElement('input', 'slider')! as
      HTMLInputElement;
    slider.type = 'range';
    slider.min = '1';
    slider.max = '10';
    slider.value = '5';
    slider.step = '1';
    sliderContainer.append(slider);
    const sliderValue: HTMLLabelElement = WeatherView.createElement('label',
      'slider-value')! as HTMLLabelElement;
    sliderValue.textContent = slider.value;
    sliderContainer.append(sliderValue);
    return sliderContainer;
  }

  /**
   * Creates a dropdown list with the locations
   * @returns dropdown list with the locations
   */
  private static createDropdownList(): HTMLSelectElement {
    const selectElement: HTMLSelectElement = WeatherView.createElement('select')! as
      HTMLSelectElement;
    const optionTitle: HTMLLabelElement = WeatherView.createElement('label')! as
      HTMLLabelElement;
    optionTitle.textContent = 'Select a location: ';
    selectElement.append(optionTitle);
    for (const location of DropDownSliderWeatherView.availableLocations) {
      const option: HTMLOptionElement = WeatherView.createElement('option')! as
        HTMLOptionElement;
      option.value = location;
      option.text = location;
      selectElement.append(option);
    }
    return selectElement;
  }
}
