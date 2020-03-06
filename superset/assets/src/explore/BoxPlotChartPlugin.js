import { BoxPlotChartPlugin } from '@superset-ui/preset-chart-xy';
 
new BoxPlotChartPlugin()
  .configure({ key: 'box-plot' })
  .register();