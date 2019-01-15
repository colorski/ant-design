import { connect } from 'react-redux'
import Customer from '../components/Customer';

import {setFilter} from '../actions/customer';

export default connect(function(state){
  return {
    filter: state.customer.filter,
  }
}, function(dispatch){
  return {
    onSetFilter (t,id) {
      dispatch(setFilter(t,id))
    },
    // onLogin (userName, passWord) {
    //   dispatch(login(userName, passWord))
    // }
  }
})(Customer)
