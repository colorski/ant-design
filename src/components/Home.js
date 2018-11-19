import React, { Component } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import moment from 'moment';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';


export default class Home extends Component {
  render () {
    const { Content } = Layout;
    const lastSevenDays = moment().subtract(7, 'days').format('YYYY.MM.DD') + '~' + moment().format('YYYY.MM.DD');
    
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        
        <Card title="简报" bordered={false} className="ski-card" extra={<span>近7天（{ lastSevenDays }）</span>}>
          <Row gutter={24}>
            <Col span={4}>
              <Card title="新增客户">12</Card>
            </Col>
            <Col span={4}>
              <Card title="新增联系人">55</Card>
            </Col>
            <Col span={4}>
              <Card title="新增商机">34</Card>
            </Col>
            <Col span={4}>
              <Card title="访客计划">25</Card>
            </Col>
            <Col span={4}>
              <Card title="沟通日志">25</Card>
            </Col>
            <Col span={4}>
              <Card title="工作日志">25</Card>
            </Col>
          </Row>
        </Card>

        <Card title="指标" bordered={false} className="ski-card">
          <Row gutter={24}>
            <Col span={4}>
              <Card title="新增客户">12</Card>
            </Col>
            <Col span={4}>
              <Card title="新增联系人">55</Card>
            </Col>
            <Col span={4}>
              <Card title="新增商机">34</Card>
            </Col>
            <Col span={4}>
              <Card title="访客计划">25</Card>
            </Col>
            <Col span={4}>
              <Card title="新增沟通日志">25</Card>
            </Col>
            <Col span={4}>
              <Card title="工作日志">25</Card>
            </Col>
          </Row>
        </Card>
      </Content>

      <Footer />
    </Layout>
  }
}