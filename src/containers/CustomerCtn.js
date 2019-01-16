import { connect } from 'react-redux'
import Customer from '../components/Customer';

import {setFilter, init} from '../actions/customer';

export default connect(function(state){
  return {
    filterData: state.customer.filterData,
    filter: state.customer.filter,
    data: state.customer.data,
  }
}, function(dispatch){
  return {
    onSetFilter (t,id) {
      dispatch(setFilter(t,id))
    },
    onInit () {
      dispatch(init())
    }
  }
})(Customer)
