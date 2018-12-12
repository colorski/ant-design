import { briefing } from '../data/briefing';
import { indicators } from '../data/indicators';
import { echartsData } from '../data/echarts';
import { collection } from '../data/collection';

export const INIT = 'home/INIT'
export const GET_STORAGE_BRIEFING_DATA = 'home/GET_STORAGE_BRIEFING_DATA'
export const GET_STORAGE_INDICATORS_DATA = 'home/GET_STORAGE_INDICATORS_DATA'
export const GET_INDEX_ECHARTS_DATA = 'home/GET_INDEX_ECHARTS_DATA'
export const GET_INDEX_COLLECTION_DATA = 'home/GET_INDEX_COLLECTION_DATA'

export const init = () => (dispatch) => {
  dispatch(getStorageBriefingData())
  dispatch(getStorageIndicatorsData())
  dispatch(getIndexEchartsData())
  dispatch(getIndexCollectionData())
}

//简报
export const getStorageBriefingData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_BRIEFING_DATA, data: briefing || [] })
}
//指标
export const getStorageIndicatorsData = () => (dispatch) =>{
  dispatch({type: GET_STORAGE_INDICATORS_DATA, data: indicators || [] })
}
//图表
export const getIndexEchartsData = () => (dispatch) =>{
  dispatch({type: GET_INDEX_ECHARTS_DATA, data: echartsData || [] })
}
//汇总
export const getIndexCollectionData = () => (dispatch) =>{
  dispatch({type: GET_INDEX_COLLECTION_DATA, data: collection || [] })
}
