import { connect } from 'react-redux'
import Home from '../components/Home'
import { init } from '../actions/home'

export default connect(function(state){
  return {
    briefing: state.home.briefing,
    indicators: state.home.indicators
  }
}, function(dispatch){
  return {
    onInit () {
      dispatch(init())
    }
  }
})(Home)
