import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        <Menu.Item key="userCenter"><Link to="/userCenter">个人中心</Link></Menu.Item>
        <Menu.Item key="writeLog"><Link to="/writeLog">工作日志</Link></Menu.Item>
        <Menu.Item key="changePassword"><Link to="/changePassword">修改密码</Link></Menu.Item>
        <Menu.Item key="" disabled>其它内容</Menu.Item>
      </Menu>
    )
    
    return <Header>
      <div className="logo">
        <Link to="/"><ReactIcon /></Link>
      </div>

      <Menu
        onClick={memuClickEvent}
        mode="horizontal"
        defaultSelectedKeys={arrPathname}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home"><Link to="/home">系统首页</Link></Menu.Item>
        <Menu.Item key="customer"><Link to="/customer">客户管理</Link></Menu.Item>
      </Menu>

      <Link to="/userCenter"><Avatar className="user-head" src={ pictureUrl && pictureUrl } icon={ !pictureUrl && "user"} /></Link>
      
      <Dropdown overlay={userCenterMenu} placement="bottomRight">
        <p>欢迎：{ userName } <Icon type="down" /></p>
      </Dropdown>
      
    </Header>
  }
}