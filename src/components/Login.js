import React, { Component } from 'react';
import ReactIcon from './ReactIcon';
import { Button,Input } from 'antd';
import './Login.css';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      waiting: false,
      userName: '123456',
      passWord: '123456'
      // userName: this.props.login.userName,
      // passWord: this.props.login.passWord
    }
  }
  render () {
    const { onLogin } = this.props;
    const { userName, passWord } = this.state;
    return <div className="login">
      <div className="login-body">
        <div className="logo"><ReactIcon /></div>
        <div className="li">
          <Input addonBefore="用户名：" defaultValue={userName} />
        </div>
        <div className="li">
          <Input type="password" addonBefore="密码：" defaultValue={passWord} />
        </div>
        <div className="li">
          <Button type="primary" onClick={()=>onLogin(userName, passWord)}>登录</Button>
        </div>
      </div>
      <div className="login-footer">https://github.com/colorski</div>
    </div>
  }
}