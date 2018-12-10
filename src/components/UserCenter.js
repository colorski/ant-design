import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Form, Input, Cascader, DatePicker, Radio, Button, Select, AutoComplete } from 'antd';// AutoComplete,
import _ from 'underscore';
//import { Link } from 'react-router-dom';
import moment from 'moment';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const sexArr = [{id:1, text:'男'},{id:2, text:'女'}]

//const _webSite = ['.com', '.org', '.net', '.vip'];

export default class UserCenter extends Component {
  render () {
    const { Content } = Layout;
    const { userName, deptTree, positionTree, base, contact, onEditBaseClick, editBase, onSubmitBasicInfo, editContact, onSubmitContact, onEditContactClick } = this.props;

    let basicInfo = _.extend(_.extend({},{userName, deptTree, positionTree}), base)

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
            <h3>基本信息
              {
                !editBase && <Icon type="edit" onClick={onEditBaseClick} title="编辑" />
              }
            </h3>
            <div className="center-row">
              <WrappedBasicInfoForm basicInfo={basicInfo} editBase={editBase} onSubmitBasicInfo={onSubmitBasicInfo} />
            </div>
          </Col>
          <Col lg={8} md={24}>
            <h3>联系方式
              {
                !editContact && <Icon type="edit" onClick={onEditContactClick} title="编辑" />
              }
            </h3>
            <div className="center-row">
              <WrappedContactForm contact={contact} editContact={editContact} onSubmitContact={onSubmitContact} />
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

  handleSubmitBasicInfo = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          birthday: fieldsValue['birthday'].format('YYYY-MM-DD')
        }
        this.props.onSubmitBasicInfo(values);
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { userName, jobNumber, department, deptTree, position, positionTree, sex, birthday } = this.props.basicInfo;
    const { editBase } = this.props;

    const prefixJobNumber = <span style={{ width: 60 }}>ski-</span>;
    const _positionTree = positionTree!==null&&positionTree;

    const renderDepartment = (department) => {
      const dp1 = department && department[0], dp2 = department && department[1], dp3 = department && department[2]

      const dpt1 = _.compact(_.map(deptTree, (d)=>{if(d.value===dp1) return d.label}))[0]
      const posChildren = _.compact(_.map(deptTree, (d)=>{if(d.value===dp1) return d.children}))[0]
      const dpt2 = _.compact(_.map(posChildren, (d)=>{if(d.value===dp2) return d.label}))[0]
      const posChildren3 = _.compact(_.map(posChildren, (d)=>{if(d.value===dp2) return d.children}))[0]
      const dpt3 = _.compact(_.map(posChildren3, (d)=>{if(d.value===dp3) return d.label}))[0]

      return dpt1 +' / '+ dpt2 + renderPt(dpt3)
    }

    const renderPt = (dpt) => dpt!==undefined?' / '+dpt:''

    const renderPosition = (position) => {
      const p1 = position && position[0], p2 = position && position[1]
      const pt1 = _.compact(_.map(_positionTree, (d)=>{if(d.value===p1) return d.label}))[0]
      const posChildren = _.compact(_.map(_positionTree, (d)=>{if(d.value===p1) return d.children}))[0]
      const pt2 = _.compact(_.map(posChildren, (d)=>{if(d.value===p2) return d.label}))[0]

      return pt1+' / '+pt2
    }
    const renderSex = (sex) => _.map(sexArr, (d)=>{if(sex===d.id)return d.text})

    return <Form onSubmit={this.handleSubmitBasicInfo}>
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
        {editBase?getFieldDecorator('jobNumber', {
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
        {editBase?getFieldDecorator('department', {
          initialValue: department,
          rules: [{type: 'array', required: true, message: '请选择部门！' }],
        })(
          <Cascader options={deptTree} />
        ):renderDepartment(department)}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="岗位"
      >
        {editBase?getFieldDecorator('position', {
          initialValue: position,
          rules: [{required: true, message: '请选择岗位！' }],
        })(
          _positionTree!==null&&<Cascader options={_positionTree} />
        ):renderPosition(position)}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="性别"
      >
        {editBase?getFieldDecorator('sex', {
          initialValue: sex,
          rules: [{ required: true, message: '请选择性别！' }],
        })(
          <RadioGroup>
            {
              _.map(sexArr, (d)=><Radio value={d.id} key={d.id}>{d.text}</Radio>)
            }
          </RadioGroup>
        ):renderSex(sex)}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="生日"
      >
        {editBase?getFieldDecorator('birthday', {
          initialValue: moment(birthday, 'YYYY-MM-DD'),
          rules: [{ type: 'object', required: true, message: '请选择生日！' }],
        })(
          <DatePicker />
        ):birthday}
      </FormItem>

      {editBase && <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">保 存</Button>
      </FormItem>}
      
    </Form>
  }
}
const WrappedBasicInfoForm = Form.create()(BasicInfoForm);

//联系方式
class ContactForm extends Component {
  state = {
    autoCompleteResult: [],
  };

  handleSubmitContact = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmitContact(values);
      }
    });
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.cn', '.net', '.vip', '.org'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const { editContact } = this.props;
    const contact = this.props.contact!==null && this.props.contact;
    const { phone, wechat, qq, email, website, address } = contact && contact;
    
    const prePhone = phone && phone.split('-');
    const _phone = prePhone && prePhone[1];
    const prefixPhone = getFieldDecorator('prePhone', {
      initialValue: prePhone && prePhone[0],
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const prefixWeb = <span style={{ width: 60 }}>www.</span>;

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return <Form onSubmit={this.handleSubmitContact}>

      <FormItem
        {...formItemLayout}
        label="手机"
      >
        {editContact?getFieldDecorator('phone', {
          initialValue: _phone,
          rules: [{ required: true, message: '请填写手机号码！' }],
        })(
          <Input addonBefore={prefixPhone} placeholder="手机号码" />
        ):phone}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="微信"
      >
        {editContact?getFieldDecorator('wechat', {
          initialValue: wechat,
          rules: [{required: true, message: '请填写微信号！' }],
        })(
          <Input placeholder="微信号" />
        ):wechat}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="QQ"
      >
        {editContact?getFieldDecorator('qq', {
          initialValue: qq,
          rules: [{required: true, message: '请填写QQ号！' }],
        })(
          <Input placeholder="QQ号" />
        ):qq}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Email"
      >
        {editContact?getFieldDecorator('email', {
          initialValue: email,
          rules: [{required: true, message: '请填写邮箱！' }],
        })(
          <Input placeholder="邮箱地址" />
        ):email}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="网址"
      >
        {editContact?getFieldDecorator('website', {
          initialValue: website,
          rules: [{ required: true, message: '请填写网址！' }],
        })(
          <AutoComplete
            dataSource={websiteOptions}
            onChange={this.handleWebsiteChange}
          >
            <Input addonBefore={prefixWeb} placeholder="网址" />
          </AutoComplete>
        ):'www.'+website+'/'}
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="地址"
      >
        {editContact?getFieldDecorator('address', {
          initialValue: address,
          rules: [{ required: true, message: '请填写地址！' }],
        })(
          <Input placeholder="地址" />
        ):address}
      </FormItem>

      {editContact && <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">保 存</Button>
      </FormItem>}

    </Form>
  }
}
const WrappedContactForm = Form.create()(ContactForm);







