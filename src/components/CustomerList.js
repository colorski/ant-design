import React, { Component } from 'react';
import { Table, Tooltip, Icon, Popconfirm, notification } from 'antd';
import _ from 'underscore';
import { Link } from 'react-router-dom';

export default class CustomerList extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: {
      order: 'descend',
      columnKey: 'callToday',
    },
  };
  handleTableChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  render () {
    const {data, filterData, clickedIds, onRegClickedCustomerId, onHandleItemTypeClick} = this.props;
    const {type, status, province} = filterData;

    //筛选和排序
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const cutFirst = (p) => {let t = _.map(p, (d)=> {return {text:d.name, value:d.id}}); t.splice(0,1); return t}

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
    
    const sureDelCustomerItem = (id) => {
      notification.open({
        message: 'id：'+id,
        duration: 3,
        style: {
          width: 200,
          marginLeft: 195,
        }
      });
    }

    const cancelDelCustomerItem = (e) => {}

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
          <span onClick={()=>console.log(rec.id)}>联系</span>
          <b>|</b>
          <Popconfirm title="确定要删除？" onConfirm={()=>sureDelCustomerItem(rec.id)} onCancel={()=>cancelDelCustomerItem} okText="确定" cancelText="取消">
            <span>删除</span>
          </Popconfirm>
          {
            !rec.keeper && <span><b>|</b><span onClick={()=>console.log(rec.id)}>保留</span></span>
          }
        </div>
      ),
    }];

    return <div className="customer-table">
      <Table className="collection-table" columns={columns} dataSource={data} onChange={this.handleTableChange} rowKey="id" />
    </div>
  }
}