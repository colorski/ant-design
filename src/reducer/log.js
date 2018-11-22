import { combineReducers } from 'redux'
//import _ from 'underscore'
import cr from '../utils/cr'
import { LOGIN_NAME } from '../actions/login'
import {
  GET_STORAGE_DAILY_SUMMARY,
  TODAY_LOG,
} from '../actions/log'

export default combineReducers({
  userName: cr(null,{
    [LOGIN_NAME]({userName}){
      return userName
    }
  }),
  dailySummary: cr(null,{
    [GET_STORAGE_DAILY_SUMMARY]({data}){
      return data
    }
  }),
  todayLog: cr(null,{
    [TODAY_LOG]({todayLog}){
      return todayLog
    }
  }),
})

