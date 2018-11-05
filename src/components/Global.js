
import React, { Component } from 'react';
import GlobalToasts from '../containers/GlobalToastsCtn'
import GlobalConfirm from '../containers/GlobalConfirmCtn'

class Global extends Component {
  render() {
    return <div className="global">
      <GlobalToasts />
      <GlobalConfirm />
    </div>
  }
}
export default Global;