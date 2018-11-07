import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Global from '../components/Global';
import Login from '../containers/LoginContainer';
import Test from './Test';

export default class extends Component{

  render(){
    return <div className="app">
      {this.renderApp()}
      <Global/>
    </div>
  }
  renderApp(){
    if(this.props.logged===null) return null
    if(!this.props.logged) return <Login />

    return this.renderRouter()
  }

  renderRouter(){
    return <BrowserRouter>
      <React.Fragment>
        <Route path="/" exact component={ Home }></Route>
        <Route path="/home" component={ Home }></Route>
        <Route path="/test" component={Test} />
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    </BrowserRouter>
  }

  componentDidMount(){
    this.props.onInit()
  }
}

