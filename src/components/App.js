import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../containers/LoginContainer';
import Global from '../components/Global';

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
        {/* <Route path="workbench" component={Workbench} />
        <Route path="calllog/:schoolId" component={CallLog} />
        <Route path="remind" component={Remind} />
        <Route path="*" component={NotFound}/> */}
      </React.Fragment>
    </BrowserRouter>
  }

  componentDidMount(){
    this.props.onInit()
  }
}

