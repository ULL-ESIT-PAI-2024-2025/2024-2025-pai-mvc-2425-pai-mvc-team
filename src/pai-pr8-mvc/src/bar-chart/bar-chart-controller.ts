/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc BarChart Component
 */

import { BarChartView } from './bar-chart-view.ts';
import { BarChartModel } from './bar-chart-model.ts';

/**
 * Controller for managing the interaction between the bar chart model and view.
 * Responsible for fetching data from the model and rendering it using the view.
 */
export class BarChartController {
  /**
   * Creates an instance of `BarChartController`.
   * @param model - The data model providing the bar chart data.
   * @param view - The view responsible for rendering the bar chart.
   */
  public constructor(private model: BarChartModel, private view: BarChartView) {}

  /**
   * Fetches the bar chart data from the model and renders it using the view.
   *
   * @returns {Promise<HTMLElement>} - A promise resolving to the rendered bar chart (canvas element).
   */
  public async render(): Promise<HTMLElement> {
    return this.view.render(await this.model.getData());
  }
}
