import { message } from 'antd';
import _ from 'underscore';
import { user } from '../data/user';

export const INIT = 'user/INIT'
export const GET_USER_DATA = 'user/GET_USER_DATA'
export const USER_BASEINFO = 'user/USER_BASEINFO'
export const USER_CONTACT = 'user/USER_CONTACT'
export const USER_PICTURE = 'user/USER_PICTURE'

export const EDIT_BASE = 'user/EDIT_BASE'
export const EDIT_CONTACT = 'user/EDIT_CONTACT'

const sessionStorage = window.sessionStorage;
const regMobile = /^((13[0-9]{1}|15[0-35-9]{1}|170|18[0|5-9]{1})+\d{8})$/;
const regEmail = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;


export const init = () => (dispatch) => {
  dispatch(getUserData())
}

//获取用户信息
export const getUserData = () => (dispatch) =>{
  dispatch({type: GET_USER_DATA, data: user || [] })
  dispatch({type: USER_BASEINFO, base: JSON.parse(sessionStorage.getItem('base'))?JSON.parse(sessionStorage.getItem('base')):user.base})
  dispatch({type: USER_CONTACT, contact: JSON.parse(sessionStorage.getItem('contact'))?JSON.parse(sessionStorage.getItem('contact')):user.contact})
  dispatch({type: USER_PICTURE, picture: user.picture})
}

export const editBaseClick = () => (dispatch,getState) => {
  dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})
}

export const editContactClick = () => (dispatch,getState) => {
  dispatch({type: EDIT_CONTACT, editContact: !getState().user.editContact})
}

export const submitBasicInfo = (values) => (dispatch,getState) => {
  dispatch({type: USER_BASEINFO, base: values})
  dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})

  sessionStorage.setItem('base',JSON.stringify(values))

  message.success('保存成功！')
}

export const submitContact = (values) => (dispatch,getState) => {
  if(!values.phone.match(regMobile)){
    message.warn('手机号不正确！请更正！')
    return false;
  }
  if(!values.email.match(regEmail)){
    message.warn('邮箱格式不正确！请更正！')
    return false;
  }
  values.phone = values.prePhone + '-' + values.phone
  values = _.omit(values, 'prePhone')

  dispatch({type: USER_CONTACT, contact: values})
  dispatch({type: EDIT_CONTACT, editContact: !getState().user.editContact})

  sessionStorage.setItem('contact',JSON.stringify(values))

  message.success('保存成功！')
}




