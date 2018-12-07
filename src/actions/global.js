import _ from 'underscore'
import mac from '../utils/mac'
import { departmentTree } from '../data/departmentTree';
import position from '../data/position';

export const SHOW_TOAST = 'global/SHOW_TOAST'
export const WILL_DROP_TOAST = 'global/WILL_DROP_TOAST'
export const DROP_TOAST = 'global/DROP_TOAST'

export const SHOW_CONFIRM = 'global/SHOW_CONFIRM'
export const CLOSE_CONFIRM = 'global/CLOSE_CONFIRM'

export const DEPARTMENT_TREE = 'global/DEPARTMENT_TREE'
export const POSITION = 'global/POSITION'

export const confirm = mac(SHOW_CONFIRM, 'props')
export const closeConfirm = mac(CLOSE_CONFIRM)

const toastTypes = {
  info: 'info',
  warn: 'warn',
  warning: 'warn',
  wrong: 'close-o',
  err: 'close-o',
  error: 'close-o',
  ok: 'complete',
  yes: 'complete',
  help: 'wenhao-o'
}

let toastDropTimeoutId
export const toast = (...args) => dispatch => {
  clearTimeout(toastDropTimeoutId)
  dispatch({type: DROP_TOAST})
  let type, text, duration = 3
  args.forEach(a => {
    if(toastTypes[a]){
      type = toastTypes[a]
    }else if(_.isNumber(a)){
      duration = a
    }else if(_.isString(a) || _.has(a, 'dom')){
      text = a
    }
  })

  dispatch({
    type: SHOW_TOAST,
    data: {type, text}
  })
  toastDropTimeoutId = setTimeout(()=>{
    dispatch({type: WILL_DROP_TOAST})
    setTimeout(()=>dispatch({type: DROP_TOAST}), 300)
  }, duration*1000)
}

export const registerMessagers = () => (dispatch) => {
  window.MESSAGER = {
    toast(...args){
      dispatch(toast(...args))
    },
    error(...args){
      dispatch(toast(...args, 'err'))
    },
    success(...args){
      dispatch(toast(...args, 'ok'))
    },
    warn(...args){
      dispatch(toast(...args, 'warn'))
    },
    alert(text, onOk){
      dispatch(confirm({type: 'alert', text, onOk}))
    },
    confirm(text, onOk, onCancel){
      const params = _.isObject(text) ? text : {text, onOk, onCancel}
      dispatch(confirm(params))
    },
    prompt(text, onOk){
      dispatch(confirm({type: 'prompt', text, onOk}))
    }
  }
}

export const getDeptTree = () => (dispatch) => {
  dispatch({type:DEPARTMENT_TREE, data: departmentTree})
}
export const getPosition = () => (dispatch) => {
  dispatch({type:POSITION, data: position})
}