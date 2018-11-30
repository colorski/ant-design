import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Radio, Input, Icon, Tooltip, Button, Modal } from 'antd';
import _ from 'underscore';
import { logType } from '../data/log';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';
import { momentDays } from '../utils/momentTimes';
import LeftTime from './LeftTime';
import './WriteLog.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class WriteLog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: '1',
      content: '',

      visible: true,
    }
  }

  render () {

    const { Content } = Layout;
    const userName = this.props.userName?this.props.userName:window.sessionStorage.getItem('userName'); //正常情况下取 this.props.userName
    const { dailySummary, onSubmit, todayLog } = this.props;
    
    const type = todayLog?todayLog.type:null;
    const content = todayLog?todayLog.content:null;

    const _dailySummary = dailySummary && [...dailySummary]
    const dSummary1 = _dailySummary && _dailySummary.splice(0,4);
    const dSummary2 = _dailySummary && _dailySummary.splice(0,3);
    const dSummary3 = _dailySummary && _dailySummary.splice(0,2);

    const _type = this.state.type?this.state.type:type;
    const _content = this.state.content?this.state.content:content;

    return <Layout className="layout ski-layout">
      <Header />

      <Content className="ski-log">
        <div className="ski-user-header">
          <h1><Icon type="edit" /> 工作日志</h1>
          <span>剩余：<LeftTime endTo="24:00:00" /> <Tooltip title="截至今晚 24:00:00"><Icon type="info-circle-o" style={{color:'#999'}} /></Tooltip></span>
        </div>

        <Row gutter={16}>
          <Col span={14} >
            <div className="ski-col">
              <div className="ski-log-head">
                <p>{userName}, 工作一天辛苦了！</p>
                <RadioGroup size="small" defaultValue={type?type:this.state.type} onChange={(e)=>this.onHandleChangeType(e)}>
                  {
                    _.map(logType, (i)=><RadioButton value={i.id} key={i.id}>{i.name}</RadioButton>)
                  }
                </RadioGroup>
              </div>
              <div className="ski-log-form">
                <span>标题<Tooltip title="标题不可修改！"><Icon type="info-circle-o" /></Tooltip>：</span>
                <Input value={`${momentDays(0)}工作日志`} disabled />
              </div>
              <div className="ski-log-form">
                <span>内容<Tooltip title="内容为必填项！"><Icon type="info-circle-o" /></Tooltip>：</span>
                <textarea rows="6" placeholder="请填写..." defaultValue={content?content:this.state.content} onChange={(e)=>this.onHandleChangeContent(e)}></textarea>
              </div>
              <div style={{textAlign:'right'}}><Button type="primary" onClick={()=>onSubmit(_type, _content)}>提交</Button></div>
            </div>
          </Col>
          <Col span={10}>
            <div className="ski-col">
              <div className="ski-log-head">
                <p>当日工作汇总</p>
              </div>
              <div className="ski-log-summary">
                <Row gutter={16}>
                  {
                    _.map(dSummary1, (d)=><Col className="gutter-row" span={6} key={d.id}>{d.title}</Col>)
                  }
                </Row>
                <Row gutter={16}>
                  {
                    _.map(dSummary1, (d)=><Col className="gutter-row" span={6} key={d.id}><strong>{d.num}</strong> 个</Col>)
                  }
                </Row>
              </div>
              <div className="ski-log-summary">
                <Row gutter={16}>
                  {
                    _.map(dSummary2, (d)=><Col className="gutter-row" span={6} key={d.id}>{d.title}</Col>)
                  }
                </Row>
                <Row gutter={16}>
                  {
                    _.map(dSummary2, (d)=><Col className="gutter-row" span={6} key={d.id}><strong>{d.num}</strong> 个</Col>)
                  }
                </Row>
              </div>
              <div className="ski-log-summary">
                <Row gutter={16}>
                  {
                    _.map(dSummary3, (d)=><Col className="gutter-row" span={d.id==='09'?16:6} key={d.id}>{d.title}</Col>)
                  }
                </Row>
                <Row gutter={16}>
                  {
                    _.map(dSummary3, (d)=><Col className="gutter-row" span={d.id==='09'?16:6} key={d.id}><strong>{d.num}</strong>{d.id==='09'?' 元':' 个'}</Col>)
                  }
                </Row>
              </div>
            </div>
          </Col>
        </Row>

      </Content>

      {content && this.renderModal()}

      <Footer />
    </Layout>
  }

  renderModal () {
    return <Modal
      visible={this.state.visible}
      title="提示"
      onCancel={this.handleCancel}
      footer={[
        <Link to='/home' key="go"><Button type="primary">去看看</Button></Link>,
        <Button key="ok" type="primary" style={{marginLeft: '10px'}} onClick={this.handleCancel}>知道了</Button>,
      ]}
    >
      <p style={{textAlign: 'center', fontSize: '30px', color: 'green', margin: 0}}><Icon type="check-circle-o" /></p>
      <p style={{textAlign: 'center', color: 'green'}}>今日日志已提交！</p>
      <p style={{textAlign: 'center'}}>您可以在 <b>“系统首页”</b> - <b>“简报”</b> - <b>“工作日志”</b> 里看到最新的日志列表！</p>
      <p style={{textAlign: 'center'}}>如果刷新页面，此数据就没了哦^_^</p>
    </Modal>
  }

  onHandleChangeType = (e) => {
    this.setState({type: e.target.value})
  }
  onHandleChangeContent = (e) => {
    this.setState({content: e.target.value})
  }

  handleCancel = () => {
    this.setState({visible: false})
  }

  componentDidMount () {
    //this.props.onInit();
    setTimeout(()=>{this.props.onInit()},500)
  }
}