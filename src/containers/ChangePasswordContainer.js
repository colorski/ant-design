import { connect } from 'react-redux'
import ChangePassword from '../components/ChangePassword'
//import { getStorageData, login } from '../actions/login'

export default connect(function(state){
  return {
    passWord: state.login.passWord,
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
})(ChangePassword)
