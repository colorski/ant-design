import _ from 'underscore'
import mac from '../utils/mac'

export const SHOW_TOAST = 'global/SHOW_TOAST'
export const WILL_DROP_TOAST = 'global/WILL_DROP_TOAST'
export const DROP_TOAST = 'global/DROP_TOAST'

export const SHOW_CONFIRM = 'global/SHOW_CONFIRM'
export const CLOSE_CONFIRM = 'global/CLOSE_CONFIRM'

export const confirm = mac(SHOW_CONFIRM, 'props')
export const closeConfirm = mac(CLOSE_CONFIRM)

const toastTypes = {
  info: 'info',
  warn: 'warn',
  warning: 'warn',
  wrong: 'wrong',
  err: 'wrong',
  error: 'wrong',
  ok: 'ok',
  yes: 'ok',
  help: 'help'
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

// export const addEvent = (schoolId, productId, eventType, eventContent, eventValue1, eventValue2) => dispatch => {
//   dispatch(post('/api/event/add', {
//     schoolId,
//     productId,
//     eventType,
//     eventContent,
//     eventValue1,
//     eventValue2
//   }))
// }
