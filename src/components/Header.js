import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import ReactIcon from './ReactIcon';
export default class Header extends Component {
  render () {
    const { userName } = this.props;
    const { Header } = Layout;
    
    return <Header>
      <ReactIcon className="logo" />

      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="2">customer</Menu.Item>
        <Menu.Item key="3">admin</Menu.Item>
      </Menu>
      
      <p>欢迎：{ userName }</p>
    </Header>
  }
}