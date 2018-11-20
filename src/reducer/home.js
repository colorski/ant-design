import { combineReducers } from 'redux'
//import _ from 'underscore'
import cr from '../utils/cr'
import {
  GET_STORAGE_BRIEFING_DATA,
  GET_STORAGE_INDICATORS_DATA
} from '../actions/home'

export default combineReducers({
  briefing: cr(null,{
    [GET_STORAGE_BRIEFING_DATA]({data}){
      return data
    }
  }),
  indicators: cr(null,{
    [GET_STORAGE_INDICATORS_DATA]({data}){
      return data
    }
  }),
})

