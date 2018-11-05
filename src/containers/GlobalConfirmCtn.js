import { connect } from 'react-redux'
import _ from 'underscore'
import GlobalConfirm from '../components/GlobalConfirm'
import {closeConfirm} from '../actions/global'

export default connect(function(state){
  const props = state.global.confirm
  return _.extend({type: 'confirm'}, props, {show: !!props})
}, function(dispatch){
  return {
    onClose(){
      dispatch(closeConfirm())
    },
  }
})(GlobalConfirm)
