import React from 'react';
import {Row, Col, Modal,Form, Input} from 'antd';
import Card from '../../components/card/Card';
import SwitchStatus from'./switchStatus';
import Panel from '../../components/panel/Panel';
import {dateFormat} from '../../components/util/dateFormat.js';
const FormItem = Form.Item; 

class EquipmentControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            switchStatus:{
                key:1,
                outer:[1,1,0,1,0,0,1],
                enter:[0,1,0,1,0,1,1]
            },
            visible: false, 
            name:'',
            num:'',
            currentStatus:''
              
        }
    }
    statusChange = (numAndName,status) =>{
       let name =  numAndName.split('_')[0];
       let num = numAndName.split('_')[1];
       let currentStatus = status;
       this.showModal(name,num,currentStatus);
       
    }
    showModal = (name,num,currentStatus) => {
        this.setState({
            visible: true,
            name:name,
            num:num,
            currentStatus:currentStatus
        });
    }
    hideModal=()=>{
        this.setState({
            visible: false,
        });
    }
    onOk = (e) => {
        this.handleSubmit(e);    
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let currentTime = new Date();
                let sendTime = dateFormat(currentTime,"yyyy-MM-dd HH:mm:ss");
                values.sendTime=sendTime;//把此刻的时间添加进values这个obj中
                values.name = this.state.name;
                values.num = this.state.num;
                values.currentStatus = this.state.currentStatus;
                console.log('Received values of form: ', values);
                 this.setState({
                     visible: false,
                });
                //接下来把时间和输入的时间长短发给后台 
            }
        });

    }
     render(){
        const { getFieldDecorator } = this.props.form;
        let status;
        let switchEnter = this.state.switchStatus.enter.map((items,index)=>{
            if(items == 1){
                    status= true;
               }else{
                    status =false;
               }
            return <SwitchStatus key={index} status = {status} statusChange={this.statusChange} num ={`enter_${index}`}/>
        });

        let switchOuter = this.state.switchStatus.outer.map((items,index)=>{
            if(items == 1){
                status= true;
            }else{
                status =false;
            }
        return <SwitchStatus key={index} status = {status} num ={`outer_${index}`}/>
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
                   <Row style={{background:'#fff',borderLeft:'2px solid #108ee9',marginTop:'30px',paddingBottom:'10px'}}>
                     <Card>  
                       <Col span={4}>
                            <h3>驯养池</h3>
                        </Col>
                        <Col span={20}>
                            <div>
                            {switchOuter}
                            </div>
                        </Col>
                     </Card>
                   </Row>      
                <Modal
                    title="设置择阀门开启时间"
                    visible={this.state.visible}
                    onOk={this.onOk}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                    width={300}
                    >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>  
                          <span style={{color:'#108ee9'}}>时: </span>
                           {getFieldDecorator('hours', {
                                rules: [{ required: true, message: '请填入小时数!' }],
                            })(
                                <Input style={{width:'88%'}} />
                            )}
                        </FormItem>
                        <FormItem >  
                          <span style={{color:'#108ee9'}}>分: </span>
                            {getFieldDecorator('mins', {
                                    rules: [{ required: true, message: '请填入分钟数' }],
                                })(
                                    <Input style={{width:'88%'}} />
                             )} 
                        </FormItem>
                        <FormItem >  
                          <span style={{color:'#108ee9'}}>秒: </span> 
                            {getFieldDecorator('secs', {
                                        rules: [{ required: true, message: '请填入秒数' }],
                                    })(
                                        <Input style={{width:'88%'}} />
                            )} 
                        </FormItem>
                    </Form>
                </Modal>
            </Panel>    
        )
    }
};
 const equipmentControl = Form.create()(EquipmentControl);
export default equipmentControl;
