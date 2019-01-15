import React, { Component } from 'react';
import { Layout } from 'antd';
//import { Link } from 'react-router-dom';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';
import FilterList from './FilterList';
import { filterData } from '../data/filter';


export default class Customer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     type: '0',
  //     status: '0',
  //     province: '0',
  //   }
  // }
  render () {
    const { Content } = Layout;
    const { type, status, province } = filterData;
    const { filter, onSetFilter } = this.props;
    console.log(this.props.filter)
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="customer">
          <div className="filter">
            <FilterList title="客户类型" data={type} current={filter.ftType} onClick={(d)=>onSetFilter('type',d.id)} />
            <FilterList title="客户状态" data={status} current={filter.status} onClick={(d)=>onSetFilter('status',d.id)} />
            <FilterList title="所属省份" data={province} current={filter.province} onClick={(d)=>onSetFilter('province',d.id)} />

            <div className="filter-params">
              <h5>filter params</h5>
              <p>type：<strong>{filter.ftType}</strong></p>
              <p>status：<strong>{filter.status}</strong></p>
              <p>province：<strong>{filter.province}</strong></p>
            </div>

          </div>
          <div className="filter-table">
            123
          </div>
        </div>
      </Content>

      <Footer />
    </Layout>
  }
}