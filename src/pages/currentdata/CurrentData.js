import React from 'react';
import Panel from '../../components/panel/Panel';
import Card from '../../components/card/Card';
import TitleCard from '../../components/titlecard/TitleCard';
import {Row, Col} from 'antd';

export default class CurrentData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataEnter:{1:{
                PH:7.1,
                DO:'6mg/L',
                temperature:'26℃',
                SS:'10mg/L',
                nitrite:'0.01mg/L',
                lightIntensity:'100 Lx',
                O3:'0.3mg/L',
                P:'0.9mg/L',
                ammoniaNitrogen:'0.01mg/L'
            },2:{
                PH:7.1,
                DO:'6mg/L',
                temperature:'30℃',
                SS:'10mg/L',
                nitrite:'0.01mg/L',
                lightIntensity:'100 Lx',
                O3:'0.3mg/L',
                P:'0.9mg/L',
                ammoniaNitrogen:'0.01mg/L'
            }},
            dataOuter:{1:{
                PH:7.1,
                DO:'6mg/L',
                temperature:'30℃',
                SS:'10mg/L',
                nitrite:'0.01mg/L',
                lightIntensity:'100 Lx',
                O3:'0.3mg/L',
                P:'0.9mg/L',
                ammoniaNitrogen:'0.01mg/L'
            },2:{
                PH:7.1,
                DO:'6mg/L',
                temperature:'30℃',
                SS:'10mg/L',
                nitrite:'0.01mg/L',
                lightIntensity:'100 Lx',
                O3:'0.3mg/L',
                P:'0.9mg/L',
                ammoniaNitrogen:'0.01mg/L'
            }}
        }
    }
    render(){
        let {dataOuter, dataEnter} =this.state;
        let cardEnter =[];
        let cardOuter =[];
        for(let i in dataEnter){     
          cardEnter.push(<TitleCard txt={`设备间${i}号池`}>
                            <p>{`PH(酸碱度):${dataEnter[i].PH}`}</p>
                            <p>{`DO(溶氧量):${dataEnter[i].DO}`}</p>
                            <p>{`温度:${dataEnter[i].temperature}`}</p>
                            <p>{`SS(悬浮物):${dataEnter[i].SS}`}</p>
                            <p>{`亚硝酸盐:${dataEnter[i].nitrite}`}</p>
                            <p>{`光照强度:${dataEnter[i].lightIntensity}`}</p>
                            <p>{`臭氧:${dataEnter[i].O3}`}</p>
                            <p>{`总磷:${dataEnter[i].P}`}</p>
                            <p>{`氨氮:${dataEnter[i].ammoniaNitrogen}`}</p>
                       </TitleCard>)   
        }
        
         for(let i in dataOuter){     
          cardOuter.push(<TitleCard txt={`驯养场${i}号池`}>
                            <p>{`PH(酸碱度):${dataEnter[i].PH}`}</p>
                            <p>{`DO(溶氧量):${dataEnter[i].DO}`}</p>
                            <p>{`温度:${dataEnter[i].temperature}`}</p>
                            <p>{`SS(悬浮物):${dataEnter[i].SS}`}</p>
                            <p>{`亚硝酸盐:${dataEnter[i].nitrite}`}</p>
                            <p>{`光照强度:${dataEnter[i].lightIntensity}`}</p>
                            <p>{`臭氧:${dataEnter[i].O3}`}</p>
                            <p>{`总磷:${dataEnter[i].P}`}</p>
                            <p>{`氨氮:${dataEnter[i].ammoniaNitrogen}`}</p>
                       </TitleCard>)   
        }


        return(
            <Panel>             
                <Row style={{background:'#fff',borderLeft:'2px solid #108ee9',marginTop:'30px',paddingBottom:'10px'}}>              
                  <Card>                      
                        <Col span={4}>
                            <h3>设备间</h3>
                        </Col>
                        <Col span={20}>
                            <div>
                                  {cardEnter} 
                            </div>
                        </Col>
                    </Card>
                  </Row> 
                   <Row style={{background:'#fff',borderLeft:'2px solid #108ee9',marginTop:'30px',paddingBottom:'10px'}}>
                     <Card>  
                       <Col span={4}>
                            <h3>驯养池</h3>
                        </Col>
                        <Col span={20}>
                            <div>
                             {cardOuter}
                            </div>
                        </Col>
                     </Card>
                   </Row>              
            </Panel>             
        )
    }
}