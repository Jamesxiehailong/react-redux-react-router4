import React from 'react';
import { Menu, Icon } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter  } from 'react-router';
import './Slider.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Slider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       let {location} = this.props;
       let currentName = []; 
       currentName.push(location.pathname.substring(1));
        return(      
            <div className="sliders">
                <div className="logo" />
                <Menu theme="dark" mode="inline" selectedKeys={currentName}  defaultSelectedKeys={['video']}>
                    <Menu.Item key="video">
                        <Icon type="video-camera" />
                        <span><Link to="video">监控视频</Link></span>
                    </Menu.Item>
                    <Menu.Item key="equipmentstatus">
                        <Icon type="usb" />
                        <span><Link to="equipmentstatus">设备运行状态</Link></span>
                    </Menu.Item>
                   <Menu.Item key="equipmentcontrol">
                        <Icon type="tool" />
                        <span><Link to="equipmentcontrol">设备运行控制</Link></span>
                    </Menu.Item>
                     <Menu.Item key="currentdata">
                        <Icon type="api" />
                        <span><Link to="currentdata">监测数据</Link></span>
                    </Menu.Item>
                     <Menu.Item key="datasetting">
                        <Icon type="setting" />
                       <span><Link to="datasetting">阀值设置</Link></span> 
                    </Menu.Item>
                     <Menu.Item key="historydata">
                        <Icon type="tag-o" />
                        <span><Link to="historydata">监测数据查询</Link></span>
                    </Menu.Item>
                      <Menu.Item key="setperson">
                        <Icon type="edit" />
                        <span><Link to="setperson">值班人员设置</Link></span>
                    </Menu.Item>
                      <Menu.Item key="log">
                        <Icon type="file-text" />
                        <span><Link to="log">日志</Link></span>
                    </Menu.Item>
                </Menu>
              </div>  
        )
    }
}

export default withRouter(Slider);