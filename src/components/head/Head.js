 import React from 'react';
 import { Layout, Menu, Icon } from 'antd';
 import { md_sessionStorage, md_ajax } from '../../md-service';
 import { connect } from 'react-redux';
 import { loginAction } from '../../redux/action';
 import './Head.scss';
 const { Header} = Layout;
 const SubMenu = Menu.SubMenu;

  
class Head extends React.Component{
  constructor(props){
    super(props);
  }
    loginOut=(e)=>{
      md_ajax.post(ctx+'/login_logout',{
            cache:false
          }).then((data)=>{
            md_sessionStorage.remove('userName');
            // md_sessionStorage.remove('password');
            md_sessionStorage.remove('islogin');
            md_sessionStorage.remove('issuper');          
            md_sessionStorage.remove('authstation');
            this.props.LoginClick(undefined, false, false);
            this.props.loginChange(false);
          }).catch((msg)=>{
            alert(msg);
          })    
  }
  render(){
    let loginName = md_sessionStorage.get("userName");
    return(
         <Header style={{ background: '#fff', padding: 0, height:'47px' }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.change_slider}
            />
            <p className="head-login">
                <Menu mode="horizontal" onClick={this.loginOut}>
                  <SubMenu
                    style={{
                      float: 'right',
                    }}
                    title={<span>
                      <Icon type="user" />
                      {loginName}
                    </span>}
                  >
                    <Menu.Item key="logout" >
                      Sign out
                    </Menu.Item>
                  </SubMenu>
              </Menu>
            </p>
          </Header>
    )  
  }
}
function mapStateToProps(state) {
  return {
    username: state.login.username,
    islogin: state.login.islogin,
    issuper: state.login.issuper    
  }
};
function mapDispatchToProps(dispatch, ownProps) {
  return {
    LoginClick: (username, islogin, issuper) => dispatch(loginAction(username, islogin, issuper))
  }
};

Head = connect(
  mapStateToProps,
  mapDispatchToProps
)(Head);

export default Head;
        