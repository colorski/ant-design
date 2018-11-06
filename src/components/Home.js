import React, { Component } from 'react';
import Icon from './Icon';
export default class Home extends Component {
  render () {
    return <div className="main">
      Home Component
      <Icon type="send" onClick={()=>this.fn()} />
    </div>
  }
  fn(){
    window.MESSAGER.warn('请输入用户名！',2);
  }
}