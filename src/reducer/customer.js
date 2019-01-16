import { combineReducers } from 'redux'
import cr from '../utils/cr'
import {
  FILTER_TYPE,
  FILTER_STATUS,
  FILTER_PROVINCE,
  GET_STORAGE_CUSTOMER_LIST,
  CUSTOMER_FILTER_DATA
} from '../actions/customer'

export default combineReducers({
  filter: combineReducers({
    ftType: cr('0',{
      [FILTER_TYPE]({ftType}){
        return ftType
      }
    }),
    status: cr('0',{
      [FILTER_STATUS]({status}){
        return status
      }
    }),
    province: cr('0',{
      [FILTER_PROVINCE]({province}){
        return province
      }
    }),
  }),
  filterData: cr({},{
    [CUSTOMER_FILTER_DATA]({filterData}){
      return filterData
    }
  }),
  data: cr([],{
    [GET_STORAGE_CUSTOMER_LIST]({data}){
      return data
    }
  }),
  
})

