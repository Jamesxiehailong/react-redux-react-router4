import React from 'react';
import Panel from '../../components/panel/Panel';

export default class DataSetting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>            
                 <div>我是阀值设置</div>             
            </Panel>    
        )
    }
}