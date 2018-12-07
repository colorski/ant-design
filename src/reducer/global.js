import { combineReducers } from 'redux'
import _ from 'underscore';
import cr from '../utils/cr'
import {
  SHOW_TOAST,
  WILL_DROP_TOAST,
  DROP_TOAST,
  SHOW_CONFIRM,
  CLOSE_CONFIRM,
  DEPARTMENT_TREE,
  POSITION
} from '../actions/global'

export default combineReducers({
  toast: cr(null, {
    [SHOW_TOAST]({data}){
      return data
    },
    [WILL_DROP_TOAST](action, state){
      return _.extend({}, state, {dropping: true})
    },
    [DROP_TOAST](){
      return null
    }
  }),

  confirm: cr(null, {
    [SHOW_CONFIRM]({props}){return props},
    [CLOSE_CONFIRM](){return null},
  }),

  deptTree: cr(null, {
    [DEPARTMENT_TREE]({data}){return data},
  }),

  position: cr(null, {
    [POSITION]({data}){return data},
  })
})
