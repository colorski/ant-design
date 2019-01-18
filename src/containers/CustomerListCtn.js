import { connect } from 'react-redux'
import CustomerList from '../components/CustomerList'
import { regClickedCustomerId, handleItemTypeClick, receiveListData, customerItemInfo } from '../actions/customer'

export default connect(function(state){
  return {
    clickedIds: state.customer.clickedIds,
    itemInfo: state.customer.itemInfo,
    selfMoney: 3.00,
  }
}, function(dispatch){
  return {
    onRegClickedCustomerId (id) {
      dispatch(regClickedCustomerId(id))
    },
    onHandleItemTypeClick (id) {
      dispatch(handleItemTypeClick(id))
      dispatch(receiveListData())
    },
    onHandleCustomerItemInfo (itemInfo) {
      dispatch(customerItemInfo(itemInfo))
    }
  }
})(CustomerList)
