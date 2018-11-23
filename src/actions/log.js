import { message } from 'antd';
import {momentDays, momnetDaysAndTimes} from '../utils/momentTimes';
import { dailySummary } from '../data/log';

export const INIT = 'log/INIT'
export const GET_STORAGE_DAILY_SUMMARY = 'log/GET_STORAGE_DAILY_SUMMARY'
export const TODAY_LOG = 'log/TODAY_LOG'

const sessionStorage = window.sessionStorage;

export const init = () => (dispatch) => {
  dispatch(getStorageDailySummary())
}

//今日工作汇总数据
export const getStorageDailySummary = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_DAILY_SUMMARY, data: dailySummary || [] })
}

//提交今日工作日志
export const submitLog = (type, content) => (dispatch) => {
  if(!type){
    message.warning('请选择日志类型！');
    return false;
  }else if(!content){
    message.warning('请填写日志内容！');
    return false;
  }else{
    const _todayLog = {
      id: '100',
      type: type,
      content: content,
      author: sessionStorage.getItem('userName'),
      date: momentDays(0),
      createTime: momnetDaysAndTimes(0)
    }
    dispatch({type: TODAY_LOG, todayLog: _todayLog})
  
    sessionStorage.setItem('todayLog',_todayLog)

    message.success('提交成功！');

  }
}




