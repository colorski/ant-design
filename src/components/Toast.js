import './Toast.css'
import React from 'react'
import { Icon } from 'antd';
import cns from 'classnames'

export default function(props){
  const $$ = React.createElement
  const {type, text, dropping} = props
  return $$('div', {className: cns('xkcpn-toast', dropping && 'dropping')},
    type && $$('div',  {className: 'icon-wrapper'},
      $$(Icon, {type})
    ),
    $$('div', {className: 'text-wrapper'}, text)
  )
}
