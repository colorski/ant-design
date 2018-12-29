import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render () {
    return <div style={{textAlign:'center',padding:'2rem'}}>
      <p>ops~！页面不存在！请确保地址正确！</p>
      <Link to='/'>返回首页</Link>
    </div>
  }
}