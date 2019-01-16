import React, { Component } from 'react';
import { Table } from 'antd';
import _ from 'underscore';
//import { Link } from 'react-router-dom';

export default class CustomerList extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: {
      order: 'descend',
      columnKey: 'callToday',
    },
  };
  handleTableChange = (pagination, filters, sorter) => {
    console.log(':',filters);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  render () {
    const {data, filterData} = this.props;
    const {type, status, province} = filterData;

    let statusFilterInTable = _.map(status, (d)=> {return {text:d.name, value:d.id}})
    statusFilterInTable.splice(0, 1)

    let typeFilterInTable = _.map(type, (d)=> {return {text:d.name, value:d.id}})
    typeFilterInTable.splice(0, 1)

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [{
      title: '客户ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
    }, {
      title: '客户名称',
      dataIndex: 'name',
    }, {
      title: '所属省份',
      dataIndex: 'province',
      render: (i) => {
        return province[i].name
      }
    }, {
      title: '客户类型',
      dataIndex: 'type',
      key: 'type',
      filters: typeFilterInTable,
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type.includes(value),
      render: (i) => {
        return type[i].name
      }
    }, {
      title: '客户状态',
      dataIndex: 'status',
      key: 'status',
      filters: statusFilterInTable,
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      render: (i) => {
        return status[i].name
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
      dataIndex: 'keeper'
    }, {
      title: '操作',
      dataIndex: 'todo',
      render: (text, record) => (
        <div className="col-todo">123
          {/* <span onClick={()=>this.handleShowCityModal('account', record.id)}>各城市合作量</span>
          <b>|</b>
          <span onClick={()=>this.handleShowCityModal('price', record.id)}>各城市成交价</span> */}
        </div>
      ),
    }];

    return <div className="customer-table">
      <Table className="collection-table" columns={columns} dataSource={data} onChange={this.handleTableChange} rowKey="id" />
    </div>
  }
}