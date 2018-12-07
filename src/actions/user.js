//import { message } from 'antd';
import { user } from '../data/user';

export const INIT = 'user/INIT'
export const GET_USER_DATA = 'user/GET_USER_DATA'
export const USER_BASEINFO = 'user/USER_BASEINFO'
export const USER_CONTACT = 'user/USER_CONTACT'
export const USER_PICTURE = 'user/USER_PICTURE'

const sessionStorage = window.sessionStorage;

export const init = () => (dispatch) => {
  dispatch(getUserData())
}

//获取用户信息
export const getUserData = () => (dispatch) =>{
  dispatch({type: GET_USER_DATA, data: user || [] })

  dispatch({type: USER_BASEINFO, base: user.base})
  dispatch({type: USER_CONTACT, contact: user.contact})
  dispatch({type: USER_PICTURE, picture: user.picture})
  
  sessionStorage.setItem('user',user)
}

//提交今日工作日志
// export const submitLog = (type, content) => (dispatch) => {
//   if(!type){
//     message.warning('请选择日志类型！');
//     return false;
//   }else if(!content){
//     message.warning('请填写日志内容！');
//     return false;
//   }else{
//     const _todayLog = {
//       id: '100',
//       type: type,
//       content: content,
//       author: sessionStorage.getItem('userName'),
//     }
//     dispatch({type: TODAY_LOG, todayLog: _todayLog})
  
//     sessionStorage.setItem('todayLog',_todayLog)

//     message.success('提交成功！');

//   }
// }




