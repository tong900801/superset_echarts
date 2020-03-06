// TimeSeriesScatter.js
import echarts from 'echarts';
import d3 from 'd3';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
}; //检查类型，其中data包含viz.py中返回的数据，width和height为图表宽高

function BasicRadarChart(element, props) {
    const {
        width,
        height,
        data,
        metrics,
        metrics2,
        border,
    } = props;
    // console.log(data) 可以检查一下data内容
    const m1 = metrics.values.map(d => d.max)
    const m2 = metrics2.values.map(d => d.max)


    const div = d3.select(element, props);
    var html = '<div id="basic_radar_chart" style="height:' + height + 'px; width:' + width + 'px;"></div>';
    div.html(html); //给echarts添加div
    var myChart = echarts.init(document.getElementById('basic_radar_chart')); //初始化echarts，接下来的就是echarts内容了
    var option = {

        tooltip: {},
        legend: {
            data: [metrics.key, metrics2.key]
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: border.values,
        },
        series: [{
            name: metrics.key + 'VS' + metrics2.key,
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: m1,
                    name: metrics.key
                },
                {
                    value: m2,
                    name: metrics2.key
                }
            ]
        }]
    };

    myChart.setOption(option);
}

BasicRadarChart.displayName = 'Basic Radar Chart';
BasicRadarChart.propTypes = propTypes;

export default BasicRadarChart;

