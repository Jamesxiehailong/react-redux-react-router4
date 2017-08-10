import React from 'react';
import Panel from '../../components/panel/Panel';

export default class HistoryData extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>            
                 <div>我是监测数据查询</div>             
            </Panel> 
        )
    }
}