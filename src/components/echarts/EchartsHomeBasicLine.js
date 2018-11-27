import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'underscore';
import { momentDays } from '../../utils/momentTimes';

export default class EchartsHomeBasicLine extends Component {

  render () {
    const { echartsData } = this.props;
    const _legend = _.pluck(echartsData, 'name') //['新增客户', '新增联系人', '新增商机']
    const _series = _.map(echartsData, (d)=>_.extend(d, {type: 'line'}))

    //rang初始化数组
    //如：initArrayRange(8,1) -> [1, 2, 3, 4, 5, 6, 7]
    const initArrayRange = (end, start = 0) => Array.apply(null, Array(end - start)).map((v, i) => i + start);
    const arrAsc = arr => arr.sort((a, b) => a - b);
    const rangeDays = arrAsc(_.map(_.map(initArrayRange(7,0), (i)=>momentDays(i)), (d)=> d.substring(d.length-2)))

    const colors = ['#5793f3', '#d14a61', '#675bba'];
    const getOption = ()=> ({
      color: colors,
      title: {
        text: '近七日新增',
        left: 'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}日: {c}'
      },
      legend: {
          left: 'center',
          data: _legend
      },
      xAxis: {
        type: 'category',
        data: rangeDays
      },
      yAxis: {
        type: 'value'
      },
      series: _series
    })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}