import { connect } from 'react-redux'
import ChangePassword from '../components/ChangePassword'
import { changePassword } from '../actions/login'

export default connect(function(state){
  return {
    passWord: state.login.passWord
  }
}, function(dispatch){
  return {
    onChangePassword (passWord) {
      dispatch(changePassword(passWord))
    }
  }
})(ChangePassword)
