// TimeSeriesScatter.js
import echarts from 'echarts';
import d3 from 'd3';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
}; //检查类型，其中data包含viz.py中返回的数据，width和height为图表宽高

function MixLineBar(element, props) {
    const {
        width,
        height,
        data,
        metric,
        metric2
    } = props;
    console.log(data) //可以检查一下data内容
    console.log(metric.values.map(d => d.x))
    console.log(metric.values.map(d => d.y))
    console.log(metric2.values.map(d => d.x))
    console.log(metric2.values.map(d => d.y))
    //bar
    const y1 = metric.values.map(d => d.y)
    const max_y1 = Math.max(...y1)
    //line
    const y2 = metric2.values.map(d => d.y)
    const max_y2 = Math.max(...y2)
    console.log(max_y1, max_y2)
    //x
    const x = metric.values.map(d => d.x)
    const div = d3.select(element, props);
    var html = '<div id="mix-bar-line" style="height:' + height + 'px; width:' + width + 'px;"></div>';
    div.html(html); //给echarts添加div
    var myChart = echarts.init(document.getElementById('mix-bar-line')); //初始化echarts，接下来的就是echarts内容了
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        legend: {
            data: [metric.key, metric2.key]
        },
        xAxis: [
            {
                type: 'category',
                data: x,
                axisPointer: {
                    type: 'shadow'
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: metric.key,
                data: y1,
                max: max_y1,
                interval: max_y1 / 10,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: metric2.key,
                data: y2,
                max: max_y2,
                interval: max_y2 / 10,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: metric.key,
                type: 'bar',
                data: y1
            },
            {
                name: metric2.key,
                type: 'line',
                yAxisIndex: 1,
                data: y2
            }
        ]
    };

    myChart.setOption(option);
}

MixLineBar.displayName = 'Mix Line Bar';
MixLineBar.propTypes = propTypes;

export default MixLineBar;

