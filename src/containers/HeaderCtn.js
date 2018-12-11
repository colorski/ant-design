import { connect } from 'react-redux'
import Header from '../components/Header'

export default connect(function(state){
  return {
    userName: state.login.userName,
    pictureUrl: state.user.pictureUrl,
  }
})(Header)