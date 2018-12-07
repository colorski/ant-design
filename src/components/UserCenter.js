import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Form, Input, Cascader, Select } from 'antd';// AutoComplete,
import _ from 'underscore';
//import { Link } from 'react-router-dom';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';

const FormItem = Form.Item;
const Option = Select.Option;
//const AutoCompleteOption = AutoComplete.Option;
    
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

//const _webSite = ['.com', '.org', '.net', '.vip'];

export default class UserCenter extends Component {
  render () {
    const { Content } = Layout;
    const { userName, deptTree, position, base } = this.props;
    let basicInfo = _.extend(_.extend({},{userName, deptTree, position}), base)
    console.log(basicInfo)

    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="ski-user-header">
          <h1><Icon type="user" /> 个人中心</h1>
        </div>

        <div className="ski-user-con">
        <Row gutter={24}>
          <Col lg={8} md={24}>
            <h3>基本信息</h3>
            <div className="center-row">
              <WrappedBasicInfoForm basicInfo={basicInfo} />
            </div>
          </Col>
          <Col lg={8} md={24}>
            <h3>联系方式</h3>
            <div className="center-row">
              
            </div>
          </Col>
          <Col lg={8} md={24}>
            <h3>头像信息</h3>
            <div className="center-row">
              
            </div>
          </Col>
        </Row>
        </div>
      </Content>

      <Footer />
    </Layout>
  }
  
  componentDidMount () {
    this.props.onInit()
  }

}

//基本信息
class BasicInfoForm extends Component {
  state = {
    //autoCompleteResult: [],
    prefixPosition: null,
    edit: true
  };
  // handleWebsiteChange = (value) => {
  //   let autoCompleteResult;
  //   if (!value) {
  //     autoCompleteResult = [];
  //   } else {
  //     autoCompleteResult = _webSite.map(domain => `${value}${domain}`);
  //   }
  //   this.setState({ autoCompleteResult });
  //   console.log(this.state)
  // }

  render () {
    const { getFieldDecorator } = this.props.form;
    //const { autoCompleteResult } = this.state;
    const { userName, jobNumber, department, deptTree, position } = this.props.basicInfo;

    const prefixJobNumber = <span style={{ width: 60 }}>ski-</span>;

    let _prefixPosition = department&&department[0];

    return <Form>
      <FormItem
        {...formItemLayout}
        label="用户名"
      >
        <span className="ant-form-text">{ userName }</span>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="工号"
      >
        {this.state.edit?getFieldDecorator('jobNumber', {
          initialValue: jobNumber,
          rules: [{ required: true, message: '请填写工号！' }],
        })(
          <Input addonBefore={prefixJobNumber} placeholder="员工编号" />
        ):'ski-'+jobNumber}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="部门"
      >
        {this.state.edit?getFieldDecorator('department', {
          initialValue: department,
          rules: [{type: 'array', required: true, message: '请选择部门！' }],
        })(
          <Cascader options={deptTree} />
        ):department}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="岗位"
      >
        {this.state.edit?<div style={{display: 'flex', margin: '3px 0'}}>
          <Select style={{width:'100px'}} value={_prefixPosition}>
            {
              _.map(position, (d)=> <Option key={d.id} value={d.id}>{d.name}</Option>)
            }
          </Select>
          <Select placeholder="请选择岗位！" style={{marginLeft: '-1px'}}>
            <Option value="china">China</Option>
            <Option value="use">U.S.A</Option>
          </Select>
        </div>:'123'}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="性别"
      >
        {this.state.edit?getFieldDecorator('sex', {
          rules: [{ required: true, message: '请选择性别！' }],
        })(
          <Input placeholder="性别" />
        ):'123'}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="生日"
      >
        {this.state.edit?getFieldDecorator('birthday', {
          rules: [{ required: true, message: '请选择生日！' }],
        })(
          <Input placeholder="出生日期" />
        ):'123'}
      </FormItem>
    </Form>
  }
}
const WrappedBasicInfoForm = Form.create()(BasicInfoForm);







