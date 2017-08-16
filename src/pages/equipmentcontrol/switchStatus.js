import React from 'react';
import { Switch } from 'antd';
import TitleCard from '../../components/titlecard/TitleCard';


export default class SwitchStatus extends  React.Component{
    constructor(props){
        super(props);    
    }
    onChange = (checked)=>{
         this.props.statusChange(`${this.props.num}`,checked);
    }
    render(){
        let  {status,num} = this.props;
        let idNum = num.split('_')[1];
        let idName= num.split('_')[0];
        let name ;
        if(idName == "outer"){
            name = '驯养池';
        }else{
            name = '设备间';
        }
        return(
            <TitleCard txt={name}>
                    <p>
                        {`${idNum}号阀门`}
                    </p>        
                  <Switch 
                    checkedChildren="开"
                    unCheckedChildren="关" 
                    defaultChecked={status}
                    onChange={this.onChange}
                   />
          </TitleCard>
        )
    }
}
