/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc BarChart Component Builder
 */

import { DataProvider } from '../data-provider/data-provider.ts';
import { BarChartData } from './bar-chart-data.ts';
import { BarChartModel } from './bar-chart-model.ts';
import { BarChartView } from './bar-chart-view.ts';
import { BarChartController } from './bar-chart-controller.ts';

type BarChartViewParamsStrict = {
  height: number;
  width: number;
  textColor: string;
  chartColor: (height: number) => string;
  renderLabel: boolean;
};

export type BarChartViewParams = {
  height?: number;
  width?: number;
  textColor?: string;
  chartColor?: (height: number) => string;
  renderLabel?: boolean;
};

/**
 * Builder class for constructing a `BarChartController` instance.
 * Provides methods to set the data provider and view options before building the final controller.
 */
export class BarChartBuilder {
  private provider?: DataProvider<BarChartData>;
  private viewOptions: BarChartViewParamsStrict = {
    height: 600,
    width: 1800,
    textColor: 'gray',
    chartColor: (height) => {
      if (height > 400) return 'red';
      if (height > 200) return 'green';
      return 'blue';
    },
    renderLabel: true,
  };

  /**
   * Sets the view options for the bar chart.
   *
   * @param options - Configuration options for the `BarChartView`.
   * @returns {BarChartBuilder} - The builder instance for method chaining.
   */
  public setViewOptions(options: BarChartViewParams): BarChartBuilder {
    this.viewOptions = {
      ...this.viewOptions,
      ...options,
    };
    return this;
  }

  /**
   * Sets the data provider for the bar chart.
   *
   * @param provider - The data provider responsible for supplying `BarChartData`.
   * @returns {BarChartBuilder} - The builder instance for method chaining.
   */
  public setDataProvider(provider: DataProvider<BarChartData>): BarChartBuilder {
    this.provider = provider;
    return this;
  }

  /**
   * Builds and returns a fully configured `BarChartController` instance.
   *
   * @throws {Error} If the data provider is not set before building.
   * @returns {BarChartController} - The constructed bar chart controller.
   */
  build(): BarChartController {
    if (this.provider === undefined) throw new Error('Error: Provider must be provided.');

    const view = new BarChartView(
      this.viewOptions.height,
      this.viewOptions.width,
      this.viewOptions.textColor,
      this.viewOptions.chartColor,
      this.viewOptions.renderLabel
    );
    const model = new BarChartModel(this.provider);
    return new BarChartController(model, view);
  }
}
