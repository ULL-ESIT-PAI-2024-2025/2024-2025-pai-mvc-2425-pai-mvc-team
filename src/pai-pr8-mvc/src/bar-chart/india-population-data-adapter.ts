/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc Adapter to get India population data in BarChartData format
 */

import { DataProvider } from '../data-provider/data-provider.ts';
import { IndiaPopulationDataProvider } from '../data-provider/india-population-provider.ts';
import { BarChartData } from './bar-chart-data.ts';

/**
 * Adapter to transform India's population data into a format suitable for a bar chart.
 * Implements the `DataProvider<BarChartData>` interface.
 */
export class IndiaPopulationDataAdapter implements DataProvider<BarChartData> {
  /**
   * Class constructor.
   * @param provider - Instance of `IndiaPopulationDataProvider` used to fetch population data.
   */
  public constructor(private provider: IndiaPopulationDataProvider) {}

  /**
   * Fetches and transforms India's population data into the required format for a bar chart.
   *
   * @returns {Promise<BarChartData>} - A promise that resolves with the transformed data.
   *
   * The transformation includes:
   * - Extracting the second entry from the data array (`data[1]`).
   * - Mapping each entry to an object with `height` (population value) and `label` (year as a string).
   * - Sorting the data in ascending order based on the year.
   */
  public async fetchData(): Promise<BarChartData> {
    const data = await this.provider.fetchData();
    return data[1]
      .map(({ date, value }) => ({
        height: value,
        label: date,
      }))
      .sort((a, b) => parseInt(a.label) - parseInt(b.label));
  }
}
