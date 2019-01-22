import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import Icon from './Icon';
export default class Home extends PureComponent {
  render () {
    return <div className="main">
      Test PureComponent
      <Link to={{pathname:'/home'}}><Icon type="send" /></Link>
    </div>
  }
}