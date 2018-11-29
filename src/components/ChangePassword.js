import React, { Component } from 'react';
import { Layout, Icon, notification, Form, Input, Button, message } from 'antd';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';

const FormItem = Form.Item;

export default class ChangePassword extends Component {
  render () {

    const { Content } = Layout;

    const { passWord } = this.props;
    const pwdNotification = () => {
      notification.open({
        message: '既然点我了就告诉你当前密码：',
        icon: <Icon type="smile-o" style={{ color: '#108ee9' }} />,
        description: <strong style={{fontSize: '30px', color: '#f00', textAlign: 'center'}}>{passWord || window.sessionStorage.getItem('passWord')}</strong>,
        duration: 5,
      });
    };

    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="ski-user-header">
          <h1><Icon type="code-o" /> 修改密码</h1>
          <span><Icon type="smile-o" style={{cursor: 'pointer'}} onClick={()=>pwdNotification()} /></span>
        </div>

        <div className="ski-user-con">
          <WrappedPasswordForm />
        </div>
        

      </Content>

      <Footer />
    </Layout>
  }

}

class PasswordForm extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    const oldPassword = window.sessionStorage.getItem('passWord');
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        if(values.password_old !== oldPassword){
          message.error('旧密码不正确！');
        }
        if(values.password_1 !== values.password_2){
          message.error('两次密码不一致！');
        }
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
          <Button type="primary" htmlType="submit" style={{display:'block'}}>
            提 交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedPasswordForm = Form.create()(PasswordForm);

