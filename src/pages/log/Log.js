import React from 'react';
import Panel from '../../components/panel/Panel';
export default class Log extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
              <Panel>            
                 <div> 我是日志的内容</div>             
            </Panel>
        )
    }
}