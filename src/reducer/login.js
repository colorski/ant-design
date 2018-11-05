import { combineReducers } from 'redux'
import cr from '../utils/cr'
import {
  GET_USER_NAME,
  GET_PASSWORD
} from '../actions/login'

export default combineReducers({
  userName: cr(null,{
    [GET_USER_NAME]({data}){return data}
  }),
  passWord: cr(null,{
    [GET_PASSWORD]({data}){return data}
  })
})
