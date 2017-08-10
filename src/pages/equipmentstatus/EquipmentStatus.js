import React from 'react';
import Panel from '../../components/panel/Panel';

export default class equipmentstatus extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <Panel>            
                 <div>我是设备运行状态</div>             
            </Panel>    
        )
    }
}