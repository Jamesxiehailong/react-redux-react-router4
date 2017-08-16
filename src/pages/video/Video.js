import React from 'react';
import Panel from '../../components/panel/Panel';
import {Row, Col} from 'antd';
import Card from '../../components/card/Card';
import Live from './Live';
import './Video.scss';


export default class Video extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playerUrlEnter:["3523.MP4","3523.MP4","3523.MP4","3523.MP4"],
            playerUrlOuter:["3523.MP4","3523.MP4","3523.MP4","3523.MP4"],
        }
    }

    render(){
        let liveEnter = this.state.playerUrlEnter.map((url,index)=>{
                return <Card key={`${index}_outer`}  style={{width:'20%'}}><Live key={`${index}_enter`} pid={`enter${index}`} videoUrl={url}/></Card>
        })
        let liveOuter = this.state.playerUrlOuter.map((url,index)=>{
                return <Card key={`${index}_outer`}  style={{width:'20%'}}><Live key={`${index}_outer`} pid={`outer${index}`} videoUrl={url}/></Card>
        })
        return(
            <Panel>            
               <Row>
                   <Col span={11} style={{marginRight:'4%',marginLeft:'2%'}}>                    
                       <Card>
                            <h3>设备间</h3>
                            {liveEnter}
                       </Card> 
                   </Col>
                   <Col span={11}>
                        <Card>
                            <h3>驯养池</h3> 
                            {liveOuter}
                        </Card>
                   </Col>
               </Row>
            </Panel>
        )
    }
}