import React from 'react';
import Panel from '../../components/panel/Panel';

export default class Video extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>            
                 <div> 我是video</div>             
            </Panel>
        )
    }
}