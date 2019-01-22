import React, { PureComponent } from 'react';
import ReactIcon from './ReactIcon';
import { Button, Input } from 'antd';
import './Login.css';

export default class Login extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      userName: this.props.userName,
      passWord: this.props.passWord
    }
    this.handleChangeUserName =  this.handleChangeUserName.bind(this);
    this.handleChangeUserPwd = this.handleChangeUserPwd.bind(this);
  }

  render () {
    const { onLogin, userName, passWord } = this.props;

    const _userName = this.state.userName?this.state.userName:userName;
    const _passWord = this.state.passWord?this.state.passWord:passWord;

    return <div className="login" onKeyUp={e=> e.keyCode===13 && onLogin(_userName, _passWord)}>
      <div className="login-body">
        <div className="logo"><ReactIcon /></div>
        <div className="li">
          <Input addonBefore="用户名：" defaultValue={userName} onChange={this.handleChangeUserName} placeholder="输入你的名字试试" />
        </div>
        <div className="li">
          <Input type="password" addonBefore="密码：" defaultValue={passWord} onChange={this.handleChangeUserPwd} />
        </div>
        <div className="li">
          <Button type="primary" onClick={()=>onLogin(_userName, _passWord)}>登录</Button>
        </div>
      </div>
      <div className="login-footer">https://github.com/colorski</div>
    </div>
  }

  handleChangeUserName (e){
    const _v = e.target.value;
    this.setState(()=>({userName: _v}));
  }
  handleChangeUserPwd (e) {
    const _v = e.target.value;
    this.setState(()=>({passWord: _v}));
  }

  componentDidMount () {
    this.props.onGetStorageData()
    //setTimeout(()=>{this.props.onGetStorageData()},500)
  }

}
