import { connect } from 'react-redux'
import UserCenter from '../components/UserCenter'
import { init } from '../actions/user'

export default connect(function(state){
  const session = window.sessionStorage
  return {
    base: state.user.base,
    contact: state.user.contact,
    picture: state.user.picture,
    userName: state.login.userName || session.getItem('userName'),
    deptTree: state.global.deptTree,
    position: state.global.position,
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    }
  }
})(UserCenter)
