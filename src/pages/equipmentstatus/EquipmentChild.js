import React from 'react';
import Panel from '../../components/panel/Panel';
import Scale from '../../components/scale/Scale';
import Switch from '../../components/switch/Switch';
import TitleCard from '../../components/titlecard/TitleCard';

export default class EquipmentChild extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {status,num,color} = this.props;
        let idNum = num.split('_')[1];
        let idName= num.split('_')[0];
        let overTime = 3600000;
        let hours = Math.floor(overTime/(60*60*1000));
        let mins = Math.floor(overTime%(60*60*1000)/(60*1000));
        let sec = Math.floor((overTime-hours*60*60*1000-mins*60*1000)/1000);
        let name ;
        if(idName == "outer"){
            name = '驯养池';
        }else{
            name = '设备间';
        }
        if(color == undefined){
            color = "linear-gradient(60deg,#26c6da,#00acc1)";
        }
        return(
            <TitleCard txt={name}>                                       
                <p>{`${idNum}号阀门`}</p>
                <p><span>状态:</span><Switch status={this.props.status}/></p>
                <p>
                    <span>剩余时间:</span><br/>
                    <span style={{color:'#d81b60'}}>{`${hours}时${mins}分${sec}秒`}</span>
                </p>              
            </TitleCard>
        )
    }
}