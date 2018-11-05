import { connect } from 'react-redux'
import Login from '../components/Login'
import { onLogin } from '../actions/login'

export default connect(function(state){
  return {
    data: state.login.logged
  }
}, function(dispatch){
  return {
    onLogins(username, password){
      dispatch(onLogin(username, password))
    },
  }
})(Login)
