/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * Specifies the data types used in the application
 * @since Tue 25 Mar 2025 
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 */

/**
 * Weather data type
 */
export type WeatherData = {
  location: LocationData;
  forecast: ForecastData;
};

/**
 * Forecast data type
 */
export type ForecastData = {
  forecastday: ForecastDay[];
};

/**
 * Forecast day data type
 */
export type ForecastDay = {
  date: string;
  day: {
    avgtemp_c: number;
    daily_chance_of_rain: number;
    isRainy: boolean;
  };
};

/**
 * Location data type
 */
export type LocationData = {
  name: string;
  country: string;
  region: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
};