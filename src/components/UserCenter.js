import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Form, AutoComplete, Input } from 'antd';
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
              <WrappedBasicInfoForm />
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

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return <Form>
      <FormItem
        {...formItemLayout}
        label="用户名"
      >
        22222
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Website"
      >
        {this.state.edit?getFieldDecorator('website', {
          rules: [{ required: true, message: 'Please input website!' }],
        })(
          <AutoComplete
            dataSource={websiteOptions}
            onChange={this.handleWebsiteChange}
            placeholder="website"
          >
            <Input />
          </AutoComplete>
        ):'123.com'}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Website"
      >
        {this.state.edit?getFieldDecorator('website', {
          rules: [{ required: true, message: 'Please input website!' }],
        })(
          <AutoComplete
            dataSource={websiteOptions}
            onChange={this.handleWebsiteChange}
            placeholder="website"
          >
            <Input />
          </AutoComplete>
        ):'123.com'}
      </FormItem>
    </Form>
  }
}
const WrappedBasicInfoForm = Form.create()(BasicInfoForm);