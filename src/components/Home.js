import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
//import { Link } from 'react-router-dom';
//import Icon from './Icon';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';


export default class Home extends Component {
  render () {
    const { Content } = Layout;
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>

      <Footer />
    </Layout>
  }
}