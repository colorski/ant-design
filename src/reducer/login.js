import { combineReducers } from 'redux'
//import _ from 'underscore'
import cr from '../utils/cr'
import {
  LOGIN_NAME,
  LOGIN_PASSWORD,
  LOGGED
} from '../actions/login'

export default combineReducers({
  userName: cr(null,{
    [LOGIN_NAME]({userName}){
      return userName
    }
  }),
  passWord: cr(null,{
    [LOGIN_PASSWORD]({passWord}){
      return passWord
    }
  }),
  logged: cr(false,{
    [LOGGED]({logged}){
      return JSON.parse(logged)
    }
  })
})

