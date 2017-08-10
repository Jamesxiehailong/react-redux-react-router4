import React from 'react';
import Panel from '../../components/panel/Panel';


export default class CurrentData extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>            
                 <div>我是监测数据</div>             
            </Panel>             
        )
    }
}