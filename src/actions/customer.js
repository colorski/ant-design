// import { message } from 'antd';
// import _ from 'underscore';
import { filterData } from '../data/filter';
import {customerData} from '../data/customer';

export const FILTER_TYPE = 'customer/FILTER_TYPE'
export const FILTER_STATUS = 'customer/FILTER_STATUS'
export const FILTER_PROVINCE = 'customer/FILTER_PROVINCE'

export const GET_STORAGE_CUSTOMER_LIST = 'customer/GET_STORAGE_CUSTOMER_LIST'
export const CUSTOMER_FILTER_DATA = 'customer/CUSTOMER_FILTER_DATA'

export const setFilter = (t,id) => (dispatch) => {
  if(t==='type') dispatch({type: FILTER_TYPE, ftType: id})
  if(t==='status') dispatch({type: FILTER_STATUS, status: id})
  if(t==='province') dispatch({type: FILTER_PROVINCE, province: id})
}

export const init = () => (dispatch) => {
  dispatch(receiveFilterData())
  dispatch(receiveListData())
}

const receiveListData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_CUSTOMER_LIST, data: customerData || [] })
}
const receiveFilterData = () => (dispatch) =>{
  dispatch({type: CUSTOMER_FILTER_DATA, filterData: filterData || [] })
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


