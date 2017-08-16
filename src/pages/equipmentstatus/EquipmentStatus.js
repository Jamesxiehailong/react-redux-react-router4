import React from 'react';
import Panel from '../../components/panel/Panel';
import {Row, Col} from 'antd';
import Card from '../../components/card/Card';
import EquipmentChild from './EquipmentChild';

export default class equipmentstatus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            switchStatus:{
                outer:[1,1,0,1,0,0,1],
                enter:[0,1,0,1,0,1,1]
            }
        }
    }
    render(){
        let status = '';
        let switchEnter = this.state.switchStatus.enter.map((items,index)=>{
            switch(items){
                case 1:
                status= true;
                break;
                case 0:
                status =false;
                default:
                status =false;
            }
            return <EquipmentChild key={index} status={status} num={`enter_${index}`}/>
        });

           let switchOuter = this.state.switchStatus.outer.map((items,index)=>{
            switch(items){
                case 1:
                status= true;
                break;
                case 0:
                status =false;
                default:
                status =false;
            }
            return <EquipmentChild key={index} status={status} num={`outer_${index}`}/>
        });
        return(
             <Panel>            
                 <Row style={{background:'#fff',borderLeft:'2px solid #108ee9',marginTop:'30px',paddingBottom:'10px'}}>
                    <Card>                      
                        <Col span={4}>
                            <h3>设备间</h3>
                        </Col>
                        <Col span={20}>
                            <div>
                            {switchEnter}
                            </div>
                        </Col>
                    </Card>
                 </Row>
                 <Row style={{background:'#fff',borderLeft:'2px solid #108ee9',marginTop:'50px',paddingBottom:'10px'}}>
                     <Card> 
                       <Col span={4}>
                        <h3>驯养池</h3>
                        
                        </Col>
                     <Col span={20} >
                        <div>
                           {switchOuter}
                        </div>
                    </Col>
                    </Card>
                 </Row>
            </Panel>    
        )
    }
   
}