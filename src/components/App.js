import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/HomeCtn';
import Login from '../containers/LoginCtn';
import UserCenter from '../containers/UserCenterCtn';
import WriteLog from '../containers/WriteLogCtn';
import ChangePassword from '../containers/ChangePasswordCtn';
import Global from '../components/Global';
import Customer from '../components/Customer';
import VersionLog from '../components/VersionLog';
import Test from './Test';

export default class extends Component{

  render(){
    return <div className="app">
      {this.renderApp()}
      <Global/>
    </div>
  }
  renderApp(){
    const logged = window.sessionStorage.getItem('logged')
    if(!logged) return <Login />
    return this.renderRouter()
  }

  renderRouter(){
    return <BrowserRouter>
      <React.Fragment>
        <Route path="/" exact component={ Home }></Route>
        <Route path="/home" component={ Home }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/userCenter" component={ UserCenter } />
        <Route path="/customer" component={ Customer } />
        <Route path="/writeLog" component={ WriteLog } />
        <Route path="/changePassword" component={ ChangePassword } />
        <Route path="/versionLog" component={ VersionLog } />
        <Route path="/test" component={Test} />
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    </BrowserRouter>
  }

  componentDidMount(){
    this.props.onInit()
  }
}

