import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Form, AutoComplete, Input } from 'antd';
import _ from 'underscore';
//import { Link } from 'react-router-dom';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';

const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
    
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

const _webSite = ['.com', '.org', '.net', '.vip'];

export default class UserCenter extends Component {
  render () {
    const { Content } = Layout;
    let basicInfo = _.extend({},{"userName": this.props.userName || window.sessionStorage.getItem('userName')})

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
}

class BasicInfoForm extends Component {
  state = {
    autoCompleteResult: [],
    edit: true
  };
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = _webSite.map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
    console.log(this.state)
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const { basicInfo } = this.props;
    console.log(this.props)

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return <Form>
      <FormItem
        {...formItemLayout}
        label="用户名"
      >
        { basicInfo.userName }
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="员工编号"
      >
        {this.state.edit?getFieldDecorator('jobNumber', {
          rules: [{ required: true, message: '请填写员工编号！' }],
        })(
          <Input placeholder="员工编号" />
        ):'123'}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="部门"
      >
        {this.state.edit?getFieldDecorator('department', {
          rules: [{ required: true, message: '请选择部门！' }],
        })(
          <Input placeholder="员工编号" />
        ):'123'}
      </FormItem>
    </Form>
  }
}
const WrappedBasicInfoForm = Form.create()(BasicInfoForm);