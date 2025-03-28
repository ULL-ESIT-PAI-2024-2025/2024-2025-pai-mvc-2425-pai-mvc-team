/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc View of BarChart Component
 */

import { BarChartData } from './bar-chart-data.ts';

/**
 * Represents a bar chart view that renders data as a bar chart using an HTML canvas.
 */
export class BarChartView {
  /**
   * Creates an instance of the BarChartView with the specified properties.
   *
   * @param height - The height of the bar chart in pixels.
   * @param width - The width of the bar chart in pixels.
   * @param textColor - The color of the text labels.
   * @param chartColor - A function that determines the bar color based on its height.
   * @param renderLabel - A boolean indicating whether to display labels above the bars.
   */
  public constructor(
    private height: number,
    private width: number,
    private textColor: string,
    private chartColor: (height: number) => string,
    private renderLabel: boolean
  ) {}

  /**
   * Normalizes the dataset to fit within the specified pixel height.
   *
   * @param data - The dataset to normalize.
   * @param pxHeight - The pixel height to scale the data to.
   * @returns {BarChartData} - The normalized dataset.
   *
   * The normalization process adjusts each bar's height relative to the maximum value.
   */
  private normalize(data: BarChartData, pxHeight: number): BarChartData {
    const max = data.map(({ height }) => height).reduce((maxHeight, height) => Math.max(maxHeight, height));
    return data.map(({ height, label }) => ({
      height: (height * pxHeight) / max,
      label,
    }));
  }

  /**
   * Renders the bar chart as an HTML canvas element.
   *
   * @param data - The dataset to render.
   * @returns {HTMLElement} - The generated canvas element containing the bar chart.
   *
   * The rendering process:
   * - Creates an HTML canvas.
   * - Normalizes the dataset.
   * - Draws each bar using `fillRect()`.
   * - Optionally renders labels above the bars.
   */
  public render(data: BarChartData): HTMLElement {
    const canvas = document.createElement('canvas');
    canvas.height = this.height;
    canvas.width = this.width;
    const columnWidth = Math.round(canvas.width / data.length / 2);

    const context = canvas.getContext('2d')!;
    const normalizedData = this.normalize(data, canvas.height);
    const marginTopPx = 40;
    let x = 0;
    context.strokeStyle = this.textColor;
    for (const { height, label } of normalizedData) {
      context.fillStyle = this.chartColor(height);
      context.fillRect(x, canvas.height + marginTopPx - height, columnWidth, height);
      this.renderLabel && context.strokeText(label, x, 20);
      x += columnWidth * 2;
    }

    return canvas;
  }
}
