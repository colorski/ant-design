import { connect } from 'react-redux'
import GlobalToasts from '../components/GlobalToasts'

export default connect(function(state){
  return {
    data: state.global.toast
  }
})(GlobalToasts)
