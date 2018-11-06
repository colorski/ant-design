import { connect } from 'react-redux'
import Login from '../components/Login'
import { getStorageData, login } from '../actions/login'

export default connect(function(state){
  return {
    userName: state.login.userName,
    passWord: state.login.passWord,
    logged: state.login.logged
  }
}, function(dispatch){
  return {
    onGetStorageData () {
      dispatch(getStorageData())
    },
    onLogin (userName, passWord) {
      dispatch(login(userName, passWord))
    }
  }
})(Login)
