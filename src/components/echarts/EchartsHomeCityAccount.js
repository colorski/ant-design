import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class EchartsHomeBasicBar extends Component {

  render () {
    const { provinceId, cityData } = this.props;
    const citys = cityData.citys
    const cooperationNum = cityData.account.cooperationNum
    const getOption = ()=> ({
      title: {
          subtext: '省份ID： '+provinceId
      },
      color: ['#5793f3'],
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
      grid: {
          left: '3%',
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
          name:'合作数量',
          type:'bar',
          barWidth: '50%',
          data: cooperationNum
        }
      ]
  })

    return <ReactEcharts 
      option={getOption()}
    />
  }
}