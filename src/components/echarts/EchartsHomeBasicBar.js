import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'underscore';

export default class EchartsHomeBasicBar extends Component {

  render () {
    const { echartsData } = this.props;
    const dates = _.map(_.pluck(echartsData, 'date'), (d)=>d+'月')
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
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {},
      legend: {},
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: dates
        }
      ],
      yAxis: [
        {}
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
          name:'完成%',
          type:'line',
          data:percent
        }
      ]
  })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}