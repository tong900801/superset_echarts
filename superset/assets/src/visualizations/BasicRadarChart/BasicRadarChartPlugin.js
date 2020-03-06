// TimeSeriesScatterChartPlugin.js
import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';


const metadata = new ChartMetadata({
  name: t('Basic Radar Chart'),
  description: '',
  credits: ['https://www.echartsjs.com/examples/en/editor.html?c=radar'],
  thumbnail,
});

export default class BasicRadarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./ReactBasicRadarChart.js'),
    });
  }
}

