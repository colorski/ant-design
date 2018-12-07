import { connect } from 'react-redux'
import App from '../components/App'
import {registerMessagers, getDeptTree, getPosition} from '../actions/global'

export default connect(function(state){
  return {
    logged: state.login.logged,
  }
}, function(dispatch){
  return {
    onInit(){
      dispatch(registerMessagers())
      dispatch(getDeptTree())
      dispatch(getPosition())
    }
  }
})(App)
