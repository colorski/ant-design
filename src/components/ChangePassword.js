import React, { Component } from 'react';
import { Layout, Icon, Tooltip, Form, Input, Button, message } from 'antd';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';

const FormItem = Form.Item;

export default class ChangePassword extends Component {
  render () {

    const { Content } = Layout;

    const { passWord, onChangePassword } = this.props;
    const _pwd = passWord?passWord:window.sessionStorage.getItem('passWord');

    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="ski-user-header">
          <h1><Icon type="code-o" /> 修改密码</h1>
          <span>
            <Tooltip placement="left" title={'当前密码为：'+ _pwd}>
              <Icon type="smile-o" style={{cursor: 'pointer'}} />
            </Tooltip>
          </span>
        </div>

        <div className="ski-user-con">
          <WrappedPasswordForm onChangePassword={onChangePassword} />
        </div>
        

      </Content>

      <Footer />
    </Layout>
  }

}

class PasswordForm extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    const sessionStorage = window.sessionStorage;
    const oldPassword = sessionStorage.getItem('passWord');
    const { onChangePassword } = this.props;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.password_old !== oldPassword){
          message.error('旧密码不正确！');
          return false;
        }
        if(values.password_1 !== values.password_2){
          message.error('两次密码不一致！');
          return false;
        }
        onChangePassword(values.password_2);
        sessionStorage.setItem('passWord', values.password_2)

        message.success('密码修改成功！请重新登录！')

        setTimeout(()=>(window.location.href="/login"),1000)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 6,
          offset: 9,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          {...formItemLayout}
          label="旧密码"
        >
          {getFieldDecorator('password_old', {
            rules: [{
              required: true, message: '请输入旧密码!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="新密码"
        >
          {getFieldDecorator('password_1', {
            rules: [{
              required: true, message: '请输入新密码!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('password_2', {
            rules: [{
              required: true, message: '请确认新密码!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提 交
          </Button>
        </FormItem>
      </Form>
    );
  }

}

const WrappedPasswordForm = Form.create()(PasswordForm);

