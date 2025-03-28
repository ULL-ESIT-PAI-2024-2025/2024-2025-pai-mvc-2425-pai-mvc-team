/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc Model of BarChart Component
 */

import { DataProvider } from '../data-provider/data-provider.ts';
import { BarChartData } from './bar-chart-data.ts';

/**
 * @class
 * @description Modelo de datos para un gráfico de barras.
 */
export class BarChartModel {
  /**
   * @description Constructor de la clase BarChartModel.
   * @param {DataProvider<BarChartData>} provider - Proveedor de datos para el modelo.
   */
  public constructor(private provider: DataProvider<BarChartData>) {}

  /**
   * @description Obtiene los datos del proveedor.
   * @returns {Promise<BarChartData>} Una promesa que resuelve con los datos del modelo de gráfico de barras.
   */
  public getData(): Promise<BarChartData> {
    return this.provider.fetchData();
  }
}
