import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/HomeCtn';
import Customer from '../containers/CustomerCtn';
import Login from '../containers/LoginCtn';
import UserCenter from '../containers/UserCenterCtn';
import WriteLog from '../containers/WriteLogCtn';
import ChangePassword from '../containers/ChangePasswordCtn';
import Global from '../components/Global';
import VersionLog from '../components/VersionLog';
import NoMatch from './NoMatch';

export default class extends PureComponent{

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
      <Switch>
        <Route path="/" exact component={ Home }></Route>
        <Route path="/home" component={ Home }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/userCenter" component={ UserCenter } />
        <Route path="/customer" component={ Customer } />
        <Route path="/writeLog" component={ WriteLog } />
        <Route path="/changePassword" component={ ChangePassword } />
        <Route path="/versionLog" component={ VersionLog } />
        <Route path="/nomatch" component={ NoMatch } />
        
        <Redirect to="/nomatch" />
        {/* <Route path="/login" component={Login} /> */}
      </Switch>
    </BrowserRouter>
  }

  componentDidMount(){
    this.props.onInit()
  }
}

