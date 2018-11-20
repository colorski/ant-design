import { briefing } from '../data/briefing';
import { indicators } from '../data/indicators';

export const INIT = 'home/INIT'
export const GET_STORAGE_BRIEFING_DATA = 'home/GET_STORAGE_BRIEFING_DATA'
export const GET_STORAGE_INDICATORS_DATA = 'home/GET_STORAGE_INDICATORS_DATA'

export const init = () => (dispatch) => {
  dispatch(getStorageBriefingData())
  dispatch(getStorageIndicatorsData())
}

//简报
export const getStorageBriefingData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_BRIEFING_DATA, data: briefing || [] })
}
//指标
export const getStorageIndicatorsData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_INDICATORS_DATA, data: indicators || [] })
}
