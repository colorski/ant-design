import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'underscore';
import { momentDays } from '../../utils/momentTimes';

export default class EchartsHomeBasicBar extends Component {

  render () {
    const { echartsData } = this.props;
    // const _legend = _.pluck(echartsData, 'name') //['新增客户', '新增联系人', '新增商机']
    // const _series = _.map(echartsData, (d)=>_.extend(d, {type: 'line'}))

    var data = [
      [5000, 10000, 6785.71],
      [4000, 10000, 6825],
      [3000, 6500, 4463.33],
      [2500, 5600, 3793.83],
      [2000, 4000, 3060],
      [2000, 4000, 3222.33],
      [2500, 4000, 3133.33],
      [1800, 4000, 3100],
      [2000, 3500, 2750],
      [2000, 3000, 2500],
      [1800, 3000, 2433.33],
      [2000, 2700, 2375],
      [1500, 2800, 2150],
      [1500, 2300, 2100],
      [1600, 3500, 2057.14],
      [1500, 2600, 2037.5],
      [1500, 2417.54, 1905.85],
      [1500, 2000, 1775],
      [1500, 1800, 1650]
    ];
    var dates = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
    var barHeight = 20;
    const getOption = ()=> ({
      // title: {
      //   text: '指标数据',
      //   subtext: '市中心一室月租费'
      // },
      angleAxis: {
        type: 'category',
        data: dates
      },
      tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return dates[id] + '<br>完成：' + data[id][0] + '<br>目标：' + data[id][1] + '<br>完成率：' + data[id][2]+'%';
        }
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        data: data.map(function (d) {
          return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
      }, {
          type: 'bar',
          data: data.map(function (d) {
            return d[1] - d[0];
          }),
          coordinateSystem: 'polar',
          name: '价格范围',
          stack: '最大最小值'
      }, {
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          },
          data: data.map(function (d) {
            return d[2] - barHeight;
          }),
          coordinateSystem: 'polar',
          stack: '均值',
          silent: true,
          z: 10
      }, {
          type: 'bar',
          data: data.map(function (d) {
            return barHeight * 2
          }),
          coordinateSystem: 'polar',
          name: '均值',
          stack: '均值',
          barGap: '-100%',
          z: 10
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
  })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}