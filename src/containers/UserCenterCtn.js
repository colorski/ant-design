import { connect } from 'react-redux'
import UserCenter from '../components/UserCenter'
//import { init } from '../actions/home'

export default connect(function(state){
  return {
    // briefing: state.home.briefing,
    // indicators: state.home.indicators,
    // echarts: state.home.echarts,
    userName: state.login.userName,
    // todayLog: state.log.todayLog,
  }
}, function(dispatch){
  return {
    // onInit () {
    //   dispatch(init())
    // }
  }
})(UserCenter)
