import React, { Component } from 'react';
import { Button } from 'antd';
import _ from 'underscore';

const ButtonGroup = Button.Group;

export default class FilterList extends Component {
  render(){
    const { title, data, current, onClick } = this.props;
    console.log(title, data)
    return <div className="filter-list">
      <span>{ title }：</span>
      <ButtonGroup>
        {_.map(data, (d)=><Button key={d.id} type={current===d.id?"primary":""} disabled={d.disabled?d.disabled:false} onClick={onClick}>{d.name}</Button>)}
      </ButtonGroup>
    </div>
  }
}