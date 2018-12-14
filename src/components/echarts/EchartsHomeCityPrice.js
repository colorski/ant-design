import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class EchartsHomeBasicBar extends Component {

  render () {
    const { provinceId, cityData } = this.props;
    const citys = cityData.citys
    const {maxPrice, ordinaryAveragePrice, heighAveragePrice} = cityData.price
    const getOption = ()=> ({
      title: {
          subtext: '省份ID： '+provinceId
      },
      color: ['#d14a61', '#5793f3', '#675bba'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
          data:['最高价','普通均价','高端均价']
      },
      grid: {
          left: '2%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : citys,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'最高价',
          type:'bar',
          data:maxPrice
        },
        {
          name:'普通均价',
          type:'bar',
          data:ordinaryAveragePrice
        },
        {
          name:'高端均价',
          type:'bar',
          data:heighAveragePrice
        }
      ]
  })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}