import { combineReducers } from 'redux' //from 'redux-immutable'注意：这里用的是redux-immutable，目的是统一数据格式都为immutable对象
import global from './global'
import login from './login'
import home from './home'
import user from './user'
import log from './log'

export default combineReducers({
  global,
  login,
  home,
  user,
  log
});