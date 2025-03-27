/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025 
 * @desc Gets the player data from the server
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */
import { WeatherData } from '../weather-app-mvc/data-types';
/**
 * Get the player data from the server
 * @returns a promise with the player data
 */
export async function fetchData(): Promise<WeatherData> {
  const response = await fetch('/data');
  const json = await response.json();
  return json;
}


