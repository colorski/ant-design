import { connect } from 'react-redux'
import Customer from '../components/Customer';

export default connect(function(state){
  return {
    filter: state.customer.filter,
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
})(Customer)
