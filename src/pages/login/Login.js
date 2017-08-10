import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/action';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { md_ajax, md_sessionStorage, md_localStorage } from '../../md-service';
import './Login.scss';

const FormItem = Form.Item;

class Login extends React.Component{
    constructor(props){
        super(props);
            this.state = {
            visible: 'block',
            username: undefined,
            password: undefined
        }
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
              this.setState({
                visible:'none'
              })
              
              if(data.success=='admin'){
                md_sessionStorage.set('islogin', true);
                md_sessionStorage.set('userName', values.userName);              
                // md_sessionStorage.set('password', values.password);
                md_sessionStorage.set('authstation', data.stationName);
                md_sessionStorage.set('issuper', true);
                this.props.LoginClick(values.userName, true, true);                 
              }else if(data.success=='manager'){
                md_sessionStorage.set('islogin', true);
                md_sessionStorage.set('userName', values.userName);              
                // md_sessionStorage.set('password', values.password);
                md_sessionStorage.set('authstation', data.stationName);
                md_sessionStorage.set('issuper', false);
                this.props.LoginClick(values.userName, true, false)
              }
             
              if (values.remember) {
                md_localStorage.set('userName', values.userName);
                // md_localStorage.set('password', values.password);
              } else {
                if (md_localStorage.has('userName')) {
                  md_localStorage.remove('userName');
                }
                // if (md_localStorage.has('password')) {
                //   md_localStorage.remove('password');
                // }
              }
              this.props.loginChange(true);
            }else if(key==='errorMsg'){
              // Modal.error({
              // title: '登陆失败',
              // content: data.errorMsg,
              // });
              this.props.loginChange(false);
            }
          }                    
        }).catch((msg)=>{
          alert(msg);
        })        
      }
    });
  }
    render(){
          const { getFieldDecorator } = this.props.form;
          let {visible} = this.state;
        return(
            <div className='Login' style={{display:visible}}>
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
} 
 Login = Form.create()(Login);

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


Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


 export default Login;
