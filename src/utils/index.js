import {getPastTimeRange, getFutureTimeRange} from './date'

export function formatCurrency(value){
  value = +value
  return isNaN(value) ? '' : value.toFixed(2)
}

export function sum(numList){
  return numList.reduce((a,b)=>a+b, 0)
}

export {getPastTimeRange, getFutureTimeRange}
