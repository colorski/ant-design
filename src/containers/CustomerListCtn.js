import { connect } from 'react-redux'
import CustomerList from '../components/CustomerList'
import { regClickedCustomerId, handleItemTypeClick, receiveListData } from '../actions/customer'

export default connect(function(state){
  return {
    clickedIds: state.customer.clickedIds,
  }
}, function(dispatch){
  return {
    onRegClickedCustomerId (id) {
      dispatch(regClickedCustomerId(id))
    },
    onHandleItemTypeClick (id) {
      dispatch(handleItemTypeClick(id))
      dispatch(receiveListData())
    }
  }
})(CustomerList)
