//剩余时间
import React, { PureComponent } from 'react';

export default class LeftTime extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      leftTime: null
    }
  }

  toDbl = (n) => n<10?'0'+n:''+n;
  count = () => {
    let _endTo = "June 7, 2099 "+this.props.endTo;
    let endTime=new Date(_endTo);
    let startTime = new Date();
    let leftSecond=parseInt((endTime.getTime()-startTime.getTime())/1000, 10);

    if(leftSecond<0){leftSecond=0;}

    let h=this.toDbl(parseInt((leftSecond/3600)%24, 10));
    let m=this.toDbl(parseInt((leftSecond/60)%60, 10));
    let s=this.toDbl(parseInt(leftSecond%60, 10));
    this.setState({
      leftTime: h+'小时'+m+'分'+s+'秒'
    })
  }

  componentDidMount () {
    this.count();
    this.interval = setInterval(() => this.count(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render () {
    return <span>{this.state.leftTime}</span>
  }
}