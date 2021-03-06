import { message } from 'antd';

export const RECEIVE_LOGIN_DATA = 'login/RECEIVE_LOGIN_DATA'

export const LOGGED = 'login/LOGGED'
export const LOGIN_NAME = 'login/LOGIN_NAME'
export const LOGIN_PASSWORD = 'login/LOGIN_PASSWORD'

//从session获取数据
const storage = window.sessionStorage;
export const getStorageData = () => (dispatch) =>{
  dispatch({type: LOGIN_NAME, userName: storage.getItem('userName')==='null'?'':storage.getItem('userName')})
  dispatch({type: LOGIN_PASSWORD, passWord: storage.getItem('passWord')==='null'?'':storage.getItem('passWord')})
  dispatch({type: LOGGED, logged: storage.getItem('logged')==='null'?false:JSON.parse(storage.getItem('logged'))})
}

//登录
export const login = (userName, passWord) => (dispatch) => {
  if(!userName){
    message.warning('请输入用户名！');
    return false;
  }else if(!passWord){
    message.warning('请输入密码！');
    return false;
  }else{
    dispatch({type: LOGIN_NAME, userName: userName})
    dispatch({type: LOGIN_PASSWORD, passWord: passWord})
    dispatch({type: LOGGED, logged: true})
  
    storage.setItem('userName',userName)
    storage.setItem('passWord',passWord)
    storage.setItem('logged',true)

    const location = window.location;
    if(location.pathname === '/login' || location.pathname === '/'){
      window.location.href="/";
    }
    if(location.pathname === '/ant/'){
      window.location.href="/ant/";
    }
  }
}

//修改密码
export const changePassword = (passWord) => (dispatch) => {
  dispatch({type: LOGIN_NAME, userName: null})
  dispatch({type: LOGIN_PASSWORD, passWord: passWord})
  dispatch({type: LOGGED, logged: false})
}