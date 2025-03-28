/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc Provider for India population data
 */

import { DataProvider } from './data-provider.ts';

export type IndiaPopulationData = [
  {
    page: number;
    pages: number;
    per_page: number;
    total: number;
    sourceid: string;
    lastupdated: string;
  },
  {
    indicator: {
      id: 'SP.POP.TOTL';
      value: 'Population, total';
    };
    country: {
      id: 'IN';
      value: 'India';
    };
    countryiso3code: 'IND';
    date: string; // The year
    value: number;
  }[]
];

/**
 * A data provider class for fetching population data of India from the World Bank API.
 *
 * This class implements the `DataProvider` interface for the `IndiaPopulationData` type.
 * It retrieves population data for India using the World Bank API endpoint for the
 * `SP.POP.TOTL` indicator, which represents the total population.
 *
 * @example
 * ```typescript
 * const provider = new IndiaPopulationDataProvider();
 * provider.fetchData().then(data => {
 *   console.log(data);
 * }).catch(error => {
 *   console.error(error);
 * });
 * ```
 *
 * @throws {Error} Throws an error if the API request fails or the response is not successful.
 */
export class IndiaPopulationDataProvider implements DataProvider<IndiaPopulationData> {
  public async fetchData(): Promise<IndiaPopulationData> {
    const response = await fetch(
      'https://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json'
    );
    if (!response.ok) throw new Error('Error: Could not get the data from the server');
    const data: IndiaPopulationData = await response.json();
    return data;
  }
}
