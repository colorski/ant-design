import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Col, Row, Icon, Modal, Table, message, Collapse, Alert } from 'antd';
import _ from 'underscore';
import EchartsHomeBasicLine from './echarts/EchartsHomeBasicLine';
import EchartsHomeBasicBar from './echarts/EchartsHomeBasicBar';
import { momentDays, momnetDay } from '../utils/momentTimes';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';

const Panel = Collapse.Panel;

export default class Home extends Component {
  constructor (props){
    super(props)
    this.state = {
      currentBriefId: null,
      visible: false,
      filterDropdownVisible: false,
      data: [],
      searchText: '',
      filtered: false,
    }
  }

  render () {
    const { Content } = Layout;
    const lastSevenDays = momentDays(6) + '~' + momentDays(0);
    const { echarts } = this.props;
    console.log(echarts)

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

        <Card title="图表" bordered={false} className="ski-card">
          <Row gutter={24}>
            <Col span={12}>
              <EchartsHomeBasicLine echartsData={echarts} />
            </Col>
            <Col span={12}>
              <EchartsHomeBasicBar echartsData={echarts} />
            </Col>
          </Row>
        </Card>

      </Content>

      <Footer />

      {this.renderBriefingModal()}
      
    </Layout>
  }

  // 简报
  renderBriefing () {
    const { briefing } = this.props;
    return _.map(briefing, (d)=>
      <Col span={4} key={d.id}>
        <Card title={d.title}><b>{d.total}</b><Icon type="right" index={d.id} onClick={()=>{this.showBriefContnetModal(d.id)}} /></Card>
      </Col>
    )
  }

  renderBriefingModal () {
    const { briefing } = this.props;
    const briefId = this.state.currentBriefId;

    const currentBriefData = _.compact(_.map(briefing, (d)=>{if(d.id===briefId) return d}))
    const data = currentBriefData.length>0?currentBriefData[0].list:[]

    const tit = currentBriefData.length>0?currentBriefData[0].title:'数据'
    const commingSevenDays = `（${momnetDay(0) + '~' + momnetDay(-7)}）`;

    return <Modal
        title={briefId==='004'?`近7天`+tit+commingSevenDays:`近7天`+tit}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        footer={null}
        width={briefId==='003'?1000:600}
      >
        {briefId==='006'?this.renderBriefingModalLog(data):this.renderBriefingModalContent(briefId, data)}
      </Modal>
  }

  renderBriefingModalContent (briefId, data) {
    let columns = [];
    const baseColumns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: 50,
        fixed: 'left'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }
    ];

    switch (briefId) {
      case '001':
        columns.push(...baseColumns, ...[
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Wealth',
            dataIndex: 'wealth',
            key: 'wealth',
          }
        ])
        break;
      case '002':
        columns.push(...baseColumns, ...[
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Componey',
            dataIndex: 'componey',
            key: 'componey',
          }
        ])
        break;
      case '003':
        columns.push(...baseColumns, ...[
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Componey',
            dataIndex: 'componey',
            key: 'componey',
          },
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            fixed: 'right',
            width: 70,
            render: (text, record)=><span style={{color: '#1890ff', cursor: 'pointer'}} onClick={()=>{ message.info('进入商机详情页，id为：'+record.id) }}>详情 <Icon type='right' size='small' style={{fontSize: '12px'}} /></span>
          }
        ])
        break;
      case '004':
        columns = [
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 90
          },
          {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            width: 50
          },
          {
            title: 'Linkman',
            dataIndex: 'linkman',
            key: 'linkman',
            width: 70
          },
          {
            title: 'Wechat',
            dataIndex: 'wechat',
            key: 'wechat',
            width: 100
          },
          {
            title: 'Detail',
            dataIndex: 'detail',
            key: 'detail',
          },
        ]
        break;
  
      default:
        break;
    }

    return <Table columns={columns} dataSource={data} rowKey={data => data.id} size="small" />;
    
  }

  renderBriefingModalLog (data) {
    const { userName, todayLog } = this.props;
    if(todayLog) data=[todayLog].concat(data)

    return <div>
      {!todayLog && <Alert message={<div>{"今日工作日志未填写！"} <Link to="/writeLog">去填写 <Icon type="right" style={{fontSize: '12px'}} /></Link></div>} type="warning" closable style={{marginBottom: '10px'}} />}
      <Collapse defaultActiveKey={[data[0].id]} className='ski-collapse'>
        {
          _.map(data, (d)=>
            <Panel header={`${d.date}工作日志`} key={d.id}>
              <p>{d.content}</p>
              <div className="foot">
                <p>作者：{userName?userName:d.author}</p>
                <p>创建时间：{d.createTime}</p>
              </div>
            </Panel>
          )
        }
      </Collapse>
    </div>
  }

  showBriefContnetModal = (id) => {
    this.setState({
      currentBriefId: id,
      visible: true
    })
  }

  // 指标
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

  handleCancel = () => {
    this.setState({ visible: false})
  }

  componentDidMount(){
    this.props.onInit();
  }

}