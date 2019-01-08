import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon, message, Avatar } from 'antd';
import ReactIcon from './ReactIcon';
import { nav } from '../data/nav';

export default class Header extends Component {
  
  render () {
    const userName = window.sessionStorage.getItem('userName');
    const { Header } = Layout;
    let { pictureUrl } = this.props;
    if(pictureUrl === null ){ pictureUrl = window.sessionStorage.getItem('pictureUrl')}

    //通过获取key的值然后setState有问题，通过window.location.pathname获取
    let arrPathname = window.location.pathname.substring(1).split();
    if(!arrPathname[0].length) arrPathname=["home"]

    const memuClickEvent = ({key}) => {
      const navName = nav[key]
      message.info(`${navName}`,1.5);
    }

    const userCenterMenu = (
      <Menu
        onClick={memuClickEvent}
        defaultSelectedKeys={arrPathname}
      >
        <Menu.Item key="changePassword"><NavLink to="/changePassword" activeClassName="active">修改密码</NavLink></Menu.Item>
        <Menu.Item key="" disabled activeClassName="active">系统设置</Menu.Item>
      </Menu>
    )
    
    return <Header>
      <div className="logo">
        <NavLink to="/" activeClassName="active"><ReactIcon /></NavLink>
      </div>

      <Menu
        onClick={memuClickEvent}
        mode="horizontal"
        defaultSelectedKeys={arrPathname}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home"><NavLink to="/home" activeClassName="active">系统首页</NavLink></Menu.Item>
        <Menu.Item key="customer"><NavLink to="/customer" activeClassName="active">客户管理</NavLink></Menu.Item>
        <Menu.Item key="userCenter"><NavLink to="/userCenter" activeClassName="active">个人中心</NavLink></Menu.Item>
        <Menu.Item key="writeLog"><NavLink to="/writeLog" activeClassName="active">工作日志</NavLink></Menu.Item>
      </Menu>

      <NavLink to="/userCenter" activeClassName="active"><Avatar className="user-head" src={ pictureUrl && pictureUrl } icon={ !pictureUrl && "user"} /></NavLink>
      
      <Dropdown overlay={userCenterMenu} placement="bottomRight">
        <p>欢迎：{ userName } <Icon type="down" /></p>
      </Dropdown>
      
    </Header>
  }
}