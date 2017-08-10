import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/action';
import { Modal, Form, Input, Button, Icon, Checkbox } from 'antd';
import { browserHistory } from 'react-router';
const FormItem = Form.Item;
import Panel from '../../components/panel/Panel';
import { md_ajax, md_sessionStorage, md_localStorage } from '../../md-service';
import './Login.css';

class Loglin extends React.Component {
  state = {
    visible: true,
    username: undefined,
    password: undefined
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        md_ajax.post(ctx+'/login_login',
        {
          "username": values.username,
          "password": values.password
        },{
          cache:false
        }).then((data)=>{
          for(var key in data){
            if(key==='success'){
                Modal.success({
                title: '登陆成功',
                content: `欢迎回来，${values.username}`,
              });
                this.setState({
                visible: false,
              });
              if(data.success=='admin'){
                md_sessionStorage.set('islogin', true);
                debugger
                md_sessionStorage.set('username', values.username);              
                // md_sessionStorage.set('password', values.password);
                md_sessionStorage.set('authstation', data.stationName);
                md_sessionStorage.set('issuper', true);
                this.props.LoginClick(values.username, true, true);                 
              }else if(data.success=='manager'){
                md_sessionStorage.set('islogin', true);
                md_sessionStorage.set('username', values.username);              
                // md_sessionStorage.set('password', values.password);
                md_sessionStorage.set('authstation', data.stationName);
                md_sessionStorage.set('issuper', false);
                this.props.LoginClick(values.username, true, false)
              }
             
              if (values.remember) {
                md_localStorage.set('username', values.username);
                // md_localStorage.set('password', values.password);
              } else {
                if (md_localStorage.has('username')) {
                  md_localStorage.remove('username');
                }
                // if (md_localStorage.has('password')) {
                //   md_localStorage.remove('password');
                // }
              }
              browserHistory.goBack();
              window.location.reload();
            }else if(key==='errorMsg'){
              Modal.error({
              title: '登陆失败',
              content: data.errorMsg,
              });
            }
          }                    
        }).catch((msg)=>{
          alert(msg);
        })        
      }
    });
  }
  componentDidMount() {
    let username = md_localStorage.get('username');
    let password = md_localStorage.get('password');
    if (username != 'undefined' && password != 'undefined') {
      this.setState({
        username: username,
        password: password
      });
    }
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return  <Panel>
            <div style={{minHeight:600}}>
            <Modal title = "登录"    
              visible = {
                this.state.visible
              }
              footer={null}
              onCancel={this.handleCancel}
              width={300}
            >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', { initialValue: this.state.username }, {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', { initialValue: this.state.password },{
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码"/>
              )}
            </FormItem>
            <FormItem
            >
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住用户名</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className="login-form-button">
                登  录
              </Button>
            </FormItem>
          </Form>
         </Modal>
        </div>
        </Panel>
  }
}

Loglin = Form.create()(Loglin);

function mapStateToProps(state) {
  return {
    username: state.login.username,
    islogin: state.login.islogin
  }
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    LoginClick: (username, islogin, issuper) => dispatch(loginAction(username, islogin, issuper))
  }
};


Loglin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loglin);

export default Loglin;