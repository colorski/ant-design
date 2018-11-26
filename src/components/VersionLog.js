import React, { Component } from 'react';
import { Layout, Icon, Timeline } from 'antd';
import _ from 'underscore';
import { version, updateLogs } from '../data/version';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';

export default class VersionLog extends Component {

  render () {

    const { Content } = Layout;

    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="ski-header">
          <h1><Icon type="book" /> 更新日志</h1>
          <span>当前版本：@{version}</span>
        </div>

        <div style={{backgroundColor: '#fff', padding:'30px 20px 0', border: '1px solid #ddd'}}>
          <Timeline>
            {
              _.map(updateLogs, (d)=> (
                <Timeline.Item key={d.version} dot={d.version==='0.0.0' && <Icon type="smile-o" />}>
                  <h4 style={{margin: 0}}>{d.version}</h4>
                  <p style={{textIndent: '25px'}}>{d.time}</p>
                  {
                    d.updates.length>0 && <ol>
                      {
                        _.map(d.updates, (u)=><li key={u}>{u}</li>)
                      }
                    </ol>
                  }
                </Timeline.Item>
              ))
            }
          </Timeline>
        </div>
        

      </Content>

      <Footer />
    </Layout>
  }

}