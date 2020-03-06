// TimeSeriesScatterChartPlugin.js
import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';


const metadata = new ChartMetadata({
  name: t('Mix Line Bar'),
  description: '',
  credits: ['https://www.echartsjs.com/examples/en/editor.html?c=mix-line-bar'],
  thumbnail,
});

export default class MixLineBarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./ReactMixLineBar.js'),
    });
  }
}

