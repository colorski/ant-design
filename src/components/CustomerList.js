import React, { Component } from 'react';
import { Table, Tooltip, Icon, Popconfirm, Modal, Button, Alert } from 'antd';
import _ from 'underscore';
import { Link } from 'react-router-dom';

export default class CustomerList extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: {
      order: 'descend',
      columnKey: 'callToday',
    },

    contactVisible: false,
    keepVisible: false,
    keepLoading: false,
  };
  handleTableChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  render () {
    const {data, filterData, clickedIds, itemInfo, selfMoney, onRegClickedCustomerId, onHandleItemTypeClick, onHandleCustomerItemInfo} = this.props;
    const {contactVisible, keepVisible, keepLoading} = this.state;
    const {type, status, province} = filterData;

    //筛选和排序
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const cutFirst = (p) => {let t = _.map(p, (d)=> {return {text:d.name, value:d.id}}); t.splice(0,1); return t}

    //表格头部提示信息
    const headNameTips = () => {
      return <Tooltip placement="right" title="点击过的置灰，保留一天">
        <span>客户名称 <Icon type="info-circle-o" style={{color:'#b5b5b5'}} /></span>
      </Tooltip>
    }
    const headTypeTips = () => {
      return <Tooltip placement="left" title="点击客户类型亦可筛选">
        <span><Icon type="info-circle-o" style={{color:'#b5b5b5'}} /> 客户类型 </span>
      </Tooltip>
    }

    //联系
    const onContactCustomerItem = (rec) => {
      this.setState({contactVisible: true})
      onHandleCustomerItemInfo(rec)
    }
    const contactCustomerInfo = <div className="contact_customer_info">
      <span>省份：<b>{itemInfo && province && province[itemInfo.province].name}</b></span>
      <span>类型：<b>{itemInfo && type && type[itemInfo.type].name}</b></span>
      <span>状态：<b>{itemInfo && status && status[itemInfo.status].name}</b></span>
      <span>今日拨打：<b>{itemInfo && itemInfo.callToday}</b></span>
      <span>本周拨打：<b>{itemInfo && itemInfo.callWeek}</b></span>
    </div>

    //保留
    const onKeepCustomerItem = (rec) => {
      this.setState({keepVisible: true})
      onHandleCustomerItemInfo(rec)
    }
    const handleKeepSure = () => {
      this.setState({ keepLoading: true });
      const keepMoney = itemInfo && itemInfo.keepPrice-0
      setTimeout(() => {
        if(selfMoney<keepMoney){
          this.setState({ keepLoading: false });
          window.MESSAGER.warn('你的保留费不够！')
        }else{
          this.setState({ keepLoading: false, keepVisible: false });
          window.MESSAGER.success('保留成功！')
        }
      }, 1500);
    }

    const columns = [{
      title: '客户ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
    }, {
      title: headNameTips,
      dataIndex: 'name',
      render: (name, rec) => {
        return <Link to={`/cusomerDetail/${rec.id}`} onClick={()=>onRegClickedCustomerId(rec.id)} style={_.contains(clickedIds, rec.id)?{color: '#999'}:{color: '#1890ff'}}>{name}</Link>
      }
    }, {
      title: headTypeTips, 
      dataIndex: 'type',
      key: 'type',
      filters: cutFirst(type),
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type.includes(value),
      render: (i) => {
        return <span onClick={()=>onHandleItemTypeClick(i)} style={{cursor: 'pointer'}}>{ type[i].name }</span>
      }
    }, {
      title: '客户状态',
      dataIndex: 'status',
      key: 'status',
      filters: cutFirst(status),
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      render: (i) => {
        return status[i].name
      }
    }, {
      title: '所属省份',
      dataIndex: 'province',
      render: (i) => {
        return province[i].name
      }
    }, {
      title: '今日拨打',
      dataIndex: 'callToday',
      sorter: (a, b) => a.callToday - b.callToday,
      sortOrder: sortedInfo.columnKey === 'callToday' && sortedInfo.order,
    }, {
      title: '本周拨打',
      dataIndex: 'callWeek',
      sorter: (a, b) => a.callWeek - b.callWeek,
      sortOrder: sortedInfo.columnKey === 'callWeek' && sortedInfo.order,
    }, {
      title: '保留费',
      dataIndex: 'keepPrice',
      sorter: (a, b) => a.keepPrice - b.keepPrice,
      sortOrder: sortedInfo.columnKey === 'keepPrice' && sortedInfo.order,
    }, {
      title: '保留人',
      dataIndex: 'keeper',
      render: (keeper, rec) => {
        return <span>{keeper?keeper:'-'}</span>
      }
    }, {
      title: '操作',
      dataIndex: 'todo',
      render: (text, rec) => (
        <div className="col-todo">
          <span onClick={()=> onContactCustomerItem(rec)}>联系</span>
          <b>|</b>
          <Popconfirm title="确定要删除？" onConfirm={()=>window.MESSAGER.success('删除的ID:'+rec.id)} okText="确定" cancelText="取消">
            <span>删除</span>
          </Popconfirm>
          {
            !rec.keeper && <span><b>|</b>
              <span onClick={()=> onKeepCustomerItem(rec)}>
              保留
              </span>
            </span>
          }
        </div>
      ),
    }];

    const linkMenColumns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
    }, {
      title: '联系方式',
      dataIndex: 'tel',
      key: 'tel',
    }, {
      title: '操作',
      dataIndex: 'todos',
      render: ()=>{
        return <Icon type="phone" title="拨打" style={{cursor: 'pointer', color: '#52c41a', fontSize: '18px'}} />
      }
    }];

    return <div className="customer-table">
      <Table className="collection-table" columns={columns} dataSource={data} onChange={this.handleTableChange} rowKey="id" />

      {/* 联系 */}
      <Modal
        visible={contactVisible}
        title={`联系学校：${itemInfo && itemInfo.name}`}
        onCancel={()=>this.setState({ contactVisible: false})}
        footer={null}
      >
        <Alert type="info" description={contactCustomerInfo} />
        <Table dataSource={itemInfo && itemInfo.linkMen} columns={linkMenColumns} showHeader={false} pagination={false} rowKey="id" />
      </Modal>

      {/* 保留 */}
      <Modal
        visible={keepVisible}
        title={`保留学校：${itemInfo && itemInfo.name}-[${itemInfo && type[itemInfo.type].name}]`}
        onCancel={()=>this.setState({ keepVisible: false})}
        footer={[
          <Button key="back" onClick={()=>this.setState({ keepVisible: false})}>取消</Button>,
          <Button key="submit" type="primary" loading={keepLoading} onClick={handleKeepSure}>保留</Button>,
        ]}
      >
        <p>所需保留费：<strong style={{color:'#f00'}}>￥{itemInfo && itemInfo.keepPrice}</strong></p>
        <p>本人保留费：<strong>￥{selfMoney}</strong></p>
      </Modal>
    </div>
  }
}