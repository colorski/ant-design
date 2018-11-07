import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from './Icon';
export default class Home extends Component {
  render () {
    return <div className="main">
      Test Component
      <Link to={{pathname:'/home'}}><Icon type="send" /></Link>
    </div>
  }
}