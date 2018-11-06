import { message } from 'antd';

export const RECEIVE_LOGIN_DATA = 'login/RECEIVE_LOGIN_DATA'

export const LOGGED = 'login/LOGGED'
export const LOGIN_NAME = 'login/LOGIN_NAME'
export const LOGIN_PASSWORD = 'login/LOGIN_PASSWORD'

const storage = window.localStorage;

export const getStorageData = () => (dispatch) =>{
  dispatch({type: LOGIN_NAME, userName: storage.getItem('userName')})
  dispatch({type: LOGIN_PASSWORD, passWord: storage.getItem('passWord')})
  //dispatch({type: LOGGED, logged: storage.getItem('logged')})
}

export const login = (userName, passWord) => (dispatch) => {
  if(!userName){
    message.warning('请输入用户名！');
    return false;
  }
  if(!passWord){
    message.warning('请输入密码！');
    return false;
  }

  dispatch({type: LOGIN_NAME, userName: userName})
  dispatch({type: LOGIN_PASSWORD, passWord: passWord})
  dispatch({type: LOGGED, logged: true})

  storage.setItem('userName',userName)
  storage.setItem('passWord',passWord)

}
