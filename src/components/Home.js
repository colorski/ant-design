import React, { Component } from 'react';
import { Layout, Card, Col, Row, Icon } from 'antd';
import moment from 'moment';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';


export default class Home extends Component {
  render () {
    const { Content } = Layout;
    const lastSevenDays = moment().subtract(7, 'days').format('YYYY.MM.DD') + '~' + moment().format('YYYY.MM.DD');
    const cardTitle = (txt) => <div className="flex"><p>{txt}</p><p>目标</p><p>完成率</p></div>
    
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        
        <Card title="简报" bordered={false} className="ski-card brief" extra={<span>近7天（{ lastSevenDays }）</span>}>
          <Row gutter={24}>
            <Col span={4}>
              <Card title="新增客户"><b>12</b><Icon type="right" /></Card>
            </Col>
            <Col span={4}>
              <Card title="新增联系人"><b>12</b><Icon type="right" /></Card>
            </Col>
            <Col span={4}>
              <Card title="新增商机"><b>12</b><Icon type="right" /></Card>
            </Col>
            <Col span={4}>
              <Card title="访客计划"><b>12</b><Icon type="right" /></Card>
            </Col>
            <Col span={4}>
              <Card title="沟通日志"><b>12</b><Icon type="right" /></Card>
            </Col>
            <Col span={4}>
              <Card title="工作日志"><b>12</b><Icon type="right" /></Card>
            </Col>
          </Row>
        </Card>

        <Card title="指标" bordered={false} className="ski-card" extra={<span>（销售指标 / 单位：万元）</span>}>
          <Row gutter={24}>
            <Col span={6}>
              <Card title={cardTitle('今日')}><div className="flex"><p>12</p><p>12</p><p>100%</p></div></Card>
            </Col>
            <Col span={6}>
              <Card title={cardTitle('本周')}><div className="flex"><p>12</p><p>12</p><p>100%</p></div></Card>
            </Col>
            <Col span={6}>
              <Card title={cardTitle('本月')}><div className="flex"><p>12</p><p>12</p><p>100%</p></div></Card>
            </Col>
            <Col span={6}>
              <Card title={cardTitle('本年')}><div className="flex"><p>12</p><p>12</p><p>100%</p></div></Card>
            </Col>
          </Row>
        </Card>
      </Content>

      <Footer />
    </Layout>
  }
}