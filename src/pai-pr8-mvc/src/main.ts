/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo Silva González
 * @since Mar 24 2025
 * @desc Main script of the app
 */

import { IndiaPopulationDataAdapter } from './bar-chart/india-population-data-adapter.ts';
import { IndiaPopulationDataProvider } from './data-provider/india-population-provider.ts';
import { BarChartBuilder } from './bar-chart/bar-chart-builder.ts';

async function main() {
  const provider = new IndiaPopulationDataAdapter(new IndiaPopulationDataProvider());
  const barChartBuilder = new BarChartBuilder();
  const barChart = barChartBuilder.setDataProvider(provider).build();
  document.body.appendChild(await barChart.render());
}

main();
