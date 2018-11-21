import React, { Component } from 'react';
import { Layout, Row, Col, Radio, Input } from 'antd';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';
import './WriteLog.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class UserCenter extends Component {
  render () {
    const { Content } = Layout;
    return <Layout className="layout ski-layout">
      <Header />

      <Content className="ski-log">
        <Row gutter={16}>
          <Col span={14} >
            <div className="ski-col">
              <div className="ski-log-head">
                <p>admin, 工作一天辛苦了！</p>
                <RadioGroup defaultValue="1" size="small">
                  <RadioButton value="1">日报</RadioButton>
                  <RadioButton value="2">周报</RadioButton>
                  <RadioButton value="3">月报</RadioButton>
                </RadioGroup>
              </div>
              <Row gutter={16} style={{marginBottom: '20px'}}>
                <Col span={4} style={{lineHeight: '32px', textAlign: 'center'}}>
                  标题：
                </Col>
                <Col span={18}>
                  <Input value="11111" disabled />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={4} style={{textAlign: 'center'}}>
                  内容：
                </Col>
                <Col span={18}>
                  <textarea rows="12"></textarea>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={10}>
            <div className="ski-col">34</div>
          </Col>
        </Row>
      </Content>

      <Footer />
    </Layout>
  }
}