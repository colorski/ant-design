import React, { Component } from 'react';
import { Layout } from 'antd';

export default class Footer extends Component {
  render () {
    const { Footer } = Layout;

    return <Footer>
      <p>Ant Design ©2018</p>
      <p><a href="https://github.com/colorski/">github.com/colorski</a></p>
    </Footer>
  }
}