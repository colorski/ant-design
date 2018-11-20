import React, { Component } from 'react';
import { Layout, Card, Col, Row, Icon, Modal } from 'antd';
import _ from 'underscore';
import moment from 'moment';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';


export default class Home extends Component {
  constructor (props){
    super(props)
    this.state = {
      visible: false
    }
    this.showBriefContnetModal = this.showBriefContnetModal.bind(this);
  }

  render () {
    const { Content } = Layout;
    const lastSevenDays = moment().subtract(7, 'days').format('YYYY.MM.DD') + '~' + moment().format('YYYY.MM.DD');
    
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        
        <Card title="简报" bordered={false} className="ski-card brief" extra={<span>近7天（{ lastSevenDays }）</span>}>
          <Row gutter={24}>
            {this.renderBriefing()}
          </Row>
        </Card>

        <Card title="指标" bordered={false} className="ski-card" extra={<span>（销售指标 / 单位：万元）</span>}>
          <Row gutter={24}>
            {this.renderIndicators()}
          </Row>
        </Card>
      </Content>

      <Footer />

      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      
    </Layout>
  }

  renderBriefing () {
    const { briefing } = this.props;
    return _.map(briefing, (d)=>
      <Col span={4} key={d.id}>
        <Card title={d.title}><b>{d.total}</b><Icon type="right" onClick={this.showBriefContnetModal} /></Card>
      </Col>
    )
  }

  renderIndicators () {
    const { indicators } = this.props;
    return _.map(indicators, (d)=>
      <Col span={6} key={d.id}>
        <Card title={<div className="flex"><p>{d.time}</p><p>目标</p><p>完成率</p></div>}>
          <div className="flex"><p>{d.num}</p><p>{d.aim}</p><p>{`${(d.num/d.aim)*100}%`}</p></div>
        </Card>
      </Col>
    )
  }

  showBriefContnetModal = () => {
    this.setState({visible: true})
  }

  handleOk = () => {
    this.setState({visible: false})
  }

  handleCancel = () => {
    this.setState({ visible: false})
  }

  componentDidMount(){
    this.props.onInit();
  }

}