import React, { Component } from 'react';
import { Layout } from 'antd';
//import { Link } from 'react-router-dom';
//import Icon from './Icon';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';


export default class UserCenter extends Component {
  render () {
    const { Content } = Layout;
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div style={{ background: '#fff', padding: 0, minHeight: 280 }}>userCenter</div>
      </Content>

      <Footer />
    </Layout>
  }
}