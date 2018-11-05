import React, { Component } from 'react';
import _ from 'underscore'
import Modal from '../components/Modal';

export default class GlobalConfirm extends Component{
  state = {
    waiting: false
  }

  render() {
    const {show, text, type, onOk, onCancel} = this.props
    const {input, waiting} = this.state
    const $$ = React.createElement
    if(!show) return null
    return $$(Modal, _.extend({}, this.props, {
      onOk: ()=>{
        const r = onOk && onOk(this, input)
        if(r===false) return
        if(r && r.then){
          this.setState({waiting: true})
          r.then(()=>{
            this.setState({waiting: false})
            this.close()
          })
        }else{
          this.close()
        }
      },
      onCancel: type !== 'alert' && (()=>{
        const r = onCancel && onCancel()
        if(r!==false) this.close()
      }),
      waiting
    }),
      $$('div', {className: 'xkcpn-global-confirm'},
        $$('div', {}, text),
        type==='prompt' && $$('input', {
          style: {
            padding: '4px',
            marginTop: '16px',
            lineHeight: '20px',
            width: '100%',
            boxSizing: 'border-box',
            border: 'solid 1px #ddd'
          },
          value: input,
          onChange: e=>this.setState({input: e.target.value})
        })
      )
    )
  }

  close(){
    this.props.onClose()
  }
}

GlobalConfirm.defaultProps = {
  type: 'confirm'
}
