//import md5 from 'md5'
//import {get, post} from 'act/req'
import { message } from 'antd';
import mac from '../utils/mac'
export const GET_USER_NAME = 'login/GET_USER_NAME'
export const GET_PASSWORD = 'login/GET_PASSWORD'

//const receiveLoginData = mac(RECEIVE_LOGIN_DATA, 'data')






// export const onLogin = (name, password) => (dispatch) => {
  
//   if(!name){
//     message.warning('请输入用户名！');
//     return dispatch({type: LOGIN_FAIL}) 
//   }
//   if(!password){
//     message.warning('请输入密码！');
//     return dispatch({type: LOGIN_FAIL}) 
//   }
//   //dispatch(geLoginDataFromStorage())
// }

// export const geLoginDataFromStorage = () => (dispatch) => {
//   dispatch(get('/api/conf/get', {id:1}, (err, data) =>{
//     const _data = data.root
//     if(err){
//       XK_MESSAGER.error(err.message || '获取奖励规则信息失败')
//       dispatch(close())
//     }else{
//       dispatch(receiveLoginData(_data));
//     }
//   }))
// }