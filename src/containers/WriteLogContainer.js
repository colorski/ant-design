import { connect } from 'react-redux'
import WriteLog from '../components/WriteLog'
import { init, submitLog } from '../actions/log'

export default connect(function(state){
  return {
    userName: state.login.userName,
    dailySummary: state.log.dailySummary,
    todayLog: state.log.todayLog
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    },
    onSubmit (type, content) {
      dispatch(submitLog(type, content))
    }
  }
})(WriteLog)
