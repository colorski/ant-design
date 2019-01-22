import React, { PureComponent } from 'react';
import { Layout, Icon, Timeline } from 'antd';
import _ from 'underscore';
import { versions } from '../data/version';
import Header from '../containers/HeaderCtn';
import Footer from './Footer';

export default class VersionLog extends PureComponent {

  render () {

    const { Content } = Layout;

    return <Layout className="layout ski-layout">
      <Header />

      <Content>
        <div className="ski-user-header">
          <h1><Icon type="book" /> 更新日志</h1>
          <span>当前版本：@{versions[0].version}</span>
        </div>

        <div className="ski-user-con">
          <Timeline>
            {
              _.map(versions, (d)=> (
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