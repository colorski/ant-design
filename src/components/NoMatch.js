import React, { Component } from 'react';

export default class NotFound extends Component {
  render () {
    const { goBack } = this.props.history;
    return <div style={{textAlign:'center',padding:'2rem'}}>
      <p>ops~！页面不存在！请确保地址正确！</p>
      <p onClick={ goBack } style={{color:'#1890ff', cursor: 'pointer'}}>← 返回</p>
    </div>
  }
}