// import { message } from 'antd';
// import _ from 'underscore';

export const FILTER_TYPE = 'customer/FILTER_TYPE'
export const FILTER_STATUS = 'customer/FILTER_STATUS'
export const FILTER_PROVINCE = 'customer/FILTER_PROVINCE'

export const setFilter = (t,id) => (dispatch) => {
  if(t==='type') dispatch({type: FILTER_TYPE, ftType: id})
  if(t==='status') dispatch({type: FILTER_STATUS, status: id})
  if(t==='province') dispatch({type: FILTER_PROVINCE, province: id})
}

// export const editBaseClick = () => (dispatch,getState) => {
//   dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})
// }

// export const editContactClick = () => (dispatch,getState) => {
//   dispatch({type: EDIT_CONTACT, editContact: !getState().user.editContact})
// }

// export const submitBasicInfo = (values) => (dispatch,getState) => {
//   dispatch({type: USER_BASEINFO, base: values})
//   dispatch({type: EDIT_BASE, editBase: !getState().user.editBase})

//   sessionStorage.setItem('base',JSON.stringify(values))

//   message.success('保存成功！')
// }


// export const handleImageUrl = (url) => (dispatch) => {
//   dispatch({type: USER_PICTURE, pictureUrl: url})

//   sessionStorage.setItem('pictureUrl',url)
// }


