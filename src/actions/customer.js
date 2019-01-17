// import { message } from 'antd';
// import _ from 'underscore';
import moment from 'moment';
import { arrUnique } from '../utils/tools';
import { filterData } from '../data/filter';
import {customerData} from '../data/customer';

export const FILTER_TYPE = 'customer/FILTER_TYPE'
export const FILTER_STATUS = 'customer/FILTER_STATUS'
export const FILTER_PROVINCE = 'customer/FILTER_PROVINCE'

export const GET_STORAGE_CUSTOMER_LIST = 'customer/GET_STORAGE_CUSTOMER_LIST'
export const CUSTOMER_FILTER_DATA = 'customer/CUSTOMER_FILTER_DATA'

export const RECEIVE_CLICKED_IDS = 'customer/RECEIVE_CLICKED_IDS'
export const CLICKED_CUSTOMER_ID = 'customer/CLICKED_CUSTOMER_ID'

export const setFilter = (t,id) => (dispatch) => {
  if(t==='type') dispatch({type: FILTER_TYPE, ftType: id})
  if(t==='status') dispatch({type: FILTER_STATUS, status: id})
  if(t==='province') dispatch({type: FILTER_PROVINCE, province: id})
}

export const init = () => (dispatch) => {
  dispatch(receiveFilterData())
  dispatch(receiveListData())
  dispatch(receiveClickedIds())
}

export const receiveListData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_CUSTOMER_LIST, data: customerData || [] })
}
const receiveFilterData = () => (dispatch) =>{
  dispatch({type: CUSTOMER_FILTER_DATA, filterData: filterData || [] })
}

const receiveClickedIds = () => (dispatch) =>{
  let localCustomerIds = localStorage.getItem('localCustomerIds')?localStorage.getItem('localCustomerIds').split(','):[]
  const {userName, today} = localStorage
  const sessionUserName = sessionStorage.getItem('userName')
  const _today = moment().format('YYYY-MM-DD')
  
  //当本地存储的用户名和当前登录用户名不一样，或者当本地存储的日期与当前日期不一致时，清空
  if(userName!==sessionUserName || today!==_today) localCustomerIds = []

  dispatch({type: RECEIVE_CLICKED_IDS, clickedIds: localCustomerIds })
}

export const regClickedCustomerId = (id) => (dispatch, getState) => {
  dispatch({type: CLICKED_CUSTOMER_ID, id: id })

  const {clickedIds} = getState().customer
  let _clickedIds = clickedIds || []
  _clickedIds.push(id)
  const __clickedIds = arrUnique(_clickedIds)
  dispatch({type: RECEIVE_CLICKED_IDS, clickedIds: __clickedIds })

  localStorage.setItem('localCustomerIds', __clickedIds)
  localStorage.setItem('today', moment().format('YYYY-MM-DD'))
  localStorage.setItem('userName',sessionStorage.getItem('userName'))
}

export const handleItemTypeClick = (id) => (dispatch) => {
  dispatch({type: FILTER_TYPE, ftType: id})
}

