import { connect } from 'react-redux'
import Home from '../components/Home'
import { init } from '../actions/home'

export default connect(function(state){
  return {
    briefing: state.home.briefing,
    indicators: state.home.indicators,
    echarts: state.home.echarts,
    userName: state.login.userName,
    todayLog: state.log.todayLog,
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    }
  }
})(Home)
