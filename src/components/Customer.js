import React, { Component } from 'react';
import { Layout } from 'antd';
//import { Link } from 'react-router-dom';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';
import FilterList from './FilterList';
import { filterData } from '../data/filter';


export default class Customer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: '0',
      status: '0',
      province: '0',
    }
  }
  render () {
    const { Content } = Layout;
    const { type, status, province } = filterData;
    const { filter } = this.props;
    console.log(this.props.filter)
    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="customer">
          <div className="filter">
            <FilterList title="客户类型" data={type} current={filter.type ? filter.type : this.state.type} />
            <FilterList title="客户状态" data={status} current={filter.status ? filter.status : this.state.status} />
            <FilterList title="所属省份" data={province} current={filter.province ? filter.province : this.state.province} />
          </div>
          <div className="table">
            123
          </div>
        </div>
      </Content>

      <Footer />
    </Layout>
  }
}