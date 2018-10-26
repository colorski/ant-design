import './App.css'
import React, { Component } from 'react';
import { Router, Route, createBrowserHistory, IndexRoute } from 'react-router-dom';
import Global from 'cpn/Global'
//import NotFound from 'cpn/NotFound'
import Workbench from 'ctn/WorkbenchCtn'
//import CustomerList from 'ctn/CustomerListCtn'
import {pushSiteStas} from 'utils/siteStas'
import {sendRouteEvent} from 'utils/eventCollector'

const browserHistory = createBrowserHistory()
pushSiteStas(window.location.pathname)
sendRouteEvent()
browserHistory.listen((location, action)=>{
  if(action === 'PUSH' || action === 'POP'){
    pushSiteStas(location.pathname, location.search)
    sendRouteEvent()
  }
})
const bkGo = browserHistory.go
browserHistory.go = function(n){
  if(n + browserHistory.length < 1){
    browserHistory.replace('/')
  }else{
    bkGo(n)
  }
}
browserHistory.goBack = function(){
  browserHistory.go(-1)
}
window.XK_HISTORY = browserHistory


export default class extends Component{

  render(){
    return <div className="xkcpn-app">
      {this.renderApp()}
      <Global/>
    </div>
  }
  renderApp(){
    //if(this.props.logged===null) return null
    //if(!this.props.logged) return <Login/>
    return this.renderRouter()

  }

  renderRouter(){
    const {onRouteChange} = this.props
    return <Router history={ browserHistory } onUpdate={onRouteChange}>
      <Route component={ Main }>
       <IndexRoute component={Workbench}/>
         {/* <Route path="workbench" component={Workbench} />
        <Route path="calllog/:schoolId" component={CallLog} />
        <Route path="remind" component={Remind} />
        <Route path="*" component={NotFound}/> */}
      </Route>
    </Router>
  }

  componentDidMount(){
    this.props.onInit()
  }
}

function Main({children}){
  return children
}
