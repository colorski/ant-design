import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { version } from '../data/version';

export default class Footer extends Component {
  render () {
    const { Footer } = Layout;

    return <Footer>
      <p>Ant Design ©2018<Link to="/versionLog" style={{marginLeft: '20px'}}>当前版本：@{version}</Link></p>
      <p><a href="https://github.com/colorski/" target="_blank" rel="noopener noreferrer">github.com/colorski</a></p>
    </Footer>
  }
}