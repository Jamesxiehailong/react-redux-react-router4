import React from 'react';
import { Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';
import { withRouter  } from 'react-router';
import './Bread.scss';


class Bread extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {location} = this.props;
        let path = location.pathname.substring(1);
        var currentName;
        switch(path){
            case 'equipmentstatus':
            currentName = "设备运行状态" ;
            break;
            case 'equipmentcontrol':
            currentName = "设备运行控制" ;
            break;
            case 'currentdata':
            currentName = "监测数据" ;
            break;
            case 'datasetting':
            currentName = "阀值设置" ;
            break;
              case 'historydata':
            currentName = "监测数据查询" ;
            break;
              case 'setperson':
            currentName = "值班人员设置" ;
            break;
             case 'log':
            currentName = "日志" ;
            break;
            default:
            currentName ="";
        }
        return(
            <Breadcrumb>
                <Breadcrumb.Item><Link to='video'>监控视频</Link></Breadcrumb.Item>
                {
                    currentName == "" || <Breadcrumb.Item>{currentName}</Breadcrumb.Item>
                }
                
            </Breadcrumb>
        )
    }
} 

export default withRouter(Bread);