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
export class WeatherFormsView extends WeatherView {
  /**
   * Creates a new View object creating all the elements in the HTML.
   */
  constructor() {
    const app: HTMLDivElement = document.getElementById('root')! as HTMLDivElement;
    const title: HTMLHeadingElement = WeatherView.createElement('h1')! as HTMLHeadingElement;
    title.textContent = 'Weather Forecast';
    const weatherList: HTMLUListElement = WeatherView.createElement('ul', 'weather-list')! as HTMLUListElement;
    const locationForm: HTMLFormElement = WeatherFormsView.createFormElement('text', 'location', 'Location');
    const daysForm: HTMLFormElement = WeatherFormsView.createFormElement('number', 'days', 'Number of days');
    const submitButton: HTMLButtonElement = WeatherView.createElement('button')! as HTMLButtonElement;
    submitButton.textContent = 'Submit';
    app.append(title, locationForm, daysForm, submitButton, weatherList);
    super(app, title, weatherList, locationForm, daysForm, submitButton);
  }

  /**
   * Creates a form element
   * @param type Type of the form element
   * @param name Name of the form element
   * @param placeholder Text to show in the form element
   * @returns Returns the form element
   */
  private static createFormElement(type: string, name: string, placeholder: string): HTMLFormElement {
    const formElement: HTMLFormElement = WeatherView.createElement('form')! as HTMLFormElement;
    const inputElement: HTMLInputElement = WeatherView.createElement('input')! as HTMLInputElement;
    inputElement.type = type;
    inputElement.name = name;
    inputElement.placeholder = placeholder;
    const submitButton: HTMLButtonElement = WeatherView.createElement('button')! as HTMLButtonElement;
    submitButton.textContent = 'Submit';
    formElement.append(inputElement, submitButton);
    return formElement;
  }
}
