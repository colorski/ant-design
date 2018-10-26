import React from 'react';
import Toast from './Toast';

export default function({data}) {
  const $$ = React.createElement
  return $$('div', {className: 'xkcpn-global-toasts'},
    data && $$(Toast, data)
  )
}
