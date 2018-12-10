//import { message } from 'antd';
import { user } from '../data/user';

export const INIT = 'user/INIT'
export const GET_USER_DATA = 'user/GET_USER_DATA'
export const USER_BASEINFO = 'user/USER_BASEINFO'
export const USER_CONTACT = 'user/USER_CONTACT'
export const USER_PICTURE = 'user/USER_PICTURE'

export const EDIT_BASE = 'user/EDIT_BASE'

const sessionStorage = window.sessionStorage;

export const init = () => (dispatch) => {
  dispatch(getUserData())
}

//获取用户信息
export const getUserData = () => (dispatch) =>{
  dispatch({type: GET_USER_DATA, data: user || [] })
  dispatch({type: USER_BASEINFO, base: JSON.parse(sessionStorage.getItem('base'))?JSON.parse(sessionStorage.getItem('base')):user.base})
  dispatch({type: USER_CONTACT, contact: user.contact})
  dispatch({type: USER_PICTURE, picture: user.picture})
}

export const editBaseClick = () => (dispatch,getState) => {
  dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})
}

export const submitBasicInfo = (values) => (dispatch,getState) => {
  dispatch({type: USER_BASEINFO, base: values})
  dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})

  sessionStorage.setItem('base',JSON.stringify(values))
}




