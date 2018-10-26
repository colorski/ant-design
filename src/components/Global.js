
import React, { Component } from 'react';
import GlobalToasts from '../containers/GlobalToastsCtn'
//import AddAttentionModal from 'ctn/AddAttentionModalCtn'
//import KeepModal from 'ctn/KeepModalCtn'

class Global extends Component {
  render() {
    return <div className="global">
      <GlobalToasts />
    </div>
  }
}
export default Global;