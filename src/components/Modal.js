import './Modal.css'
import _ from 'underscore'
import React, { Component } from 'react'
import Icon from './Icon'
import {getTopZIndex, genClassName} from '../utils/component'

let modalStack = []

export default class Modal extends Component{
  render(){
    const {title, children, onCancel, style, className, height, width='90%', extra} = this.props
    let modalStyle = {}
    modalStyle.width = width
    return <div className={genClassName("xkcpn-modal", className)}
      style={_.extend({zIndex: this.zIndex},style)}
      onMouseMove={e=>{
        if(!this.mousePosition) return null
        this.top = this.top + e.clientY - this.mousePosition.clientY
        this.left = this.left + e.clientX - this.mousePosition.clientX
        this.mousePosition = _.pick(e, 'clientX', 'clientY')
        this.setPosition()
      }}
      onMouseUp={()=>{
        if(!this.body) return
        this.mousePosition = null
        this.body.className = this.body.className.replace(/\s*moving/, '')
      }}
    >
      <div className="modal-body" style={modalStyle} ref={e=>this.body=e}>
        {title && <div className="modal-title"
          onMouseDown={e=>{
            this.mousePosition = _.pick(e, 'clientX', 'clientY')
            this.body.className += ' moving'
          }}
        >
          <div className="title-text">
            <span className="title-text-content" onMouseDown={e=>e.stopPropagation()}>
              {title}
            </span>
          </div>
          {onCancel && <Icon type="close" className="close-icon" onMouseDown={e=>e.stopPropagation()} onClick={onCancel}/>}
          <span className="extra" onMouseDown={e=>e.stopPropagation()}>{extra}</span>
        </div>}
        <div className="modal-content" style={height && {height}}>{children}</div>
      </div>
    </div>
  }

  setPosition(){
    this.body.style.top = this.top + 'px'
    if(this.left) this.body.style.marginLeft = this.left + 'px'
  }

  close(){
    this.props.onCancel && this.props.onCancel()
  }

  componentWillMount(){
    const {top='36px'} = this.props
    this.top = +top.replace(/\D/g, '')
    this.zIndex = getTopZIndex()
    window.document.body.style.overflow = 'hidden'
  }
  componentDidMount(){
    this.left = this.body.offsetLeft
    this.setPosition()
    modalStack.push(this)
  }
  componentWillUnmount(){
    modalStack.pop()
    if(!modalStack.length) window.document.body.style.overflow = ''
  }
}

Modal.defaultProps = {
  escClosable: true
}

document.addEventListener('keyup', function(e){
  if(e.keyCode === 27 && modalStack.length){
    const topModal = _.last(modalStack)
    topModal.props.escClosable && topModal.close()
  }
})
