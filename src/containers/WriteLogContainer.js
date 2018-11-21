import { connect } from 'react-redux'
import WriteLog from '../components/WriteLog'
//import { getStorageData, login } from '../actions/login'

export default connect(function(state){
  return {
    userName: state.login.userName,
  }
}, function(dispatch){
  return {
    // onGetStorageData () {
    //   dispatch(getStorageData())
    // },
    // onLogin (userName, passWord) {
    //   dispatch(login(userName, passWord))
    // }
  }
})(WriteLog)
