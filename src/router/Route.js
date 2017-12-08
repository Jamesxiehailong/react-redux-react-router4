//主面板
import React, {Component, PropTypes} from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom';
import { md_ajax, md_sessionStorage, md_localStorage } from '../md-service';
// import { withRouter } from 'react-router'
import Login from '../pages/login/Login';
import Head from '../components/head/Head';
import Bread from '../components/bread/Bread';
import Slider from '../components/slider/Slider';
import Video from '../pages/video/Video';
import EquipmentStatus from '../pages/equipmentstatus/EquipmentStatus';
import EquipmentControl from '../pages/equipmentcontrol/EquipmentControl';
import CurrentData from '../pages/currentdata/CurrentData';
import DataSetting from '../pages/datasetting/DataSetting';
import HistoryData from '../pages/historydata/HistoryData';
import SetPerson from '../pages/setperson/SetPerson';
import Panel from '../components/panel/Panel';
import Log from '../pages/log/Log';


import { Layout, Menu, Icon } from 'antd';
import './Route.scss'
const { Header, Sider, Content } = Layout;

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      collapsed: false,
      isLogin:false,
      }
  }
  toggle = (collapsed) => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  loginChange = (loginState)=>{
    this.setState({
      isLogin:loginState,
    })
  }
  render() {
    let {isLogin} = this.state;
     return (
        <Router>   
          <Layout style={{minHeight:'800px'}}>  
             {isLogin || <Login loginChange={this.loginChange}/> }
             {isLogin !== true || <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
                >
                  <Slider />
                </Sider>
            }
            {isLogin !== true ||
            <Layout>
              <Head change_slider={this.toggle} collapsed={this.state.collapsed} loginChange={this.loginChange} />
              <Bread/>
              <Content style={{ margin: '24px 16px 0px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Switch>
                  
                    <Route path="/video" exact component={Video} />
                    <Route path="/equipmentstatus" component={EquipmentStatus} />
                    <Route path="/equipmentcontrol" component={EquipmentControl} />
                    <Route path="/currentdata" component={CurrentData} />
                    <Route path="/datasetting" component={DataSetting} />
                    <Route path="/historydata" component={HistoryData} />
                    <Route path="/setperson" component={SetPerson} />
                    <Route path="/log" component={Log} />
                    <Redirect from="/" to="/video"/> {/*重定向*/}
                </Switch>
                    {this.props.children}
              </Content>
            </Layout>
            }
          </Layout>

      </Router>
    );
  }
};

export default Root;
