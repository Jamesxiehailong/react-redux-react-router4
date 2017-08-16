import React from 'react';
import Panel from '../../components/panel/Panel';
import TitleCard from '../../components/titlecard/TitleCard';

export default class HistoryData extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Panel>            
                 <div>我是监测数据查询</div>   
                 <TitleCard txt='驯养池'>
                    <p>
                        ewsfgb
                    </p>
                    <span></span>
                 </TitleCard>
            </Panel> 
        )
    }
}