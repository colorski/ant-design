import { combineReducers } from 'redux' //from 'redux-immutable'注意：这里用的是redux-immutable，目的是统一数据格式都为immutable对象
import global from '../reducer/global'
// import homeReducer from '../Home/reducer'
// import topNavReducer from '../TopNav/reducer'
// import scrollTopReducer from '../ScrollTop/reducer'

export default combineReducers({
  global
  // user: userReducer,
  // home: homeReducer,
  // city: topNavReducer,
  // common: scrollTopReducer
});


