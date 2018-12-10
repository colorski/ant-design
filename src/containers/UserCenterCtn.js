import { connect } from 'react-redux'
import UserCenter from '../components/UserCenter'
import { init, editBaseClick, submitBasicInfo } from '../actions/user'

export default connect(function(state){
  const session = window.sessionStorage
  return {
    base: state.user.base,
    contact: state.user.contact,
    picture: state.user.picture,
    userName: state.login.userName || session.getItem('userName'),
    deptTree: state.global.deptTree,
    positionTree: state.global.positionTree,
    editBase: state.user.editBase,
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    },
    onEditBaseClick () {
      dispatch(editBaseClick())
    },
    onSubmitBasicInfo (values) {
      dispatch(submitBasicInfo(values))
    }
  }
})(UserCenter)
