import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'underscore';

export default class EchartsHomeBasicBar extends Component {

  render () {
    const { echartsData } = this.props;
    const dates = _.map(_.pluck(echartsData, 'date'), (d)=>d)
    const finished = _.pluck(echartsData, 'finished')
    const aim = _.pluck(echartsData, 'aim')
    const percent = _.map(_.zip(_.pluck(echartsData,'finished'), _.pluck(echartsData,'aim')), (d)=>Math.round((d[0]/d[1])*100))

    const colors = ['#5793f3', '#d14a61', '#675bba'];
    const getOption = ()=> ({
      color: colors,
      title: {
        text: '本年度销售',
        left: 'left'
      },
      tooltip: {
        trigger: 'axis',
        formatter: "{b} <br/>{a0} : {c0}万<br/>{a1} : {c1}万",
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {},
      legend: {
        data: ['完成', '目标', '完成率'],
        selected: {
          '完成率': false
        }
      },
      xAxis: [
        {
          type: 'category',
          name: '（月份）',
          axisTick: {
            alignWithLabel: true
          },
          data: dates
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '（单位 万元）'
        }
      ],
      series: [
        {
          name:'完成',
          type:'bar',
          data:finished
        },
        {
          name:'目标',
          type:'line',
          data:aim
        },
        {
          name:'完成率',
          type:'line',
          data:percent,
          label:{
            show: true,
            formatter:'{c}%'
          }
        }
      ]
  })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}