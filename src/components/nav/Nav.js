import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/action';
import { Menu } from 'antd';
import { Link, hashHistory } from 'react-router';
import './Nav.scss';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { md_sessionStorage, md_ajax } from '../../md-service';

class MMenu extends React.Component {
  constructor(props) {
    super(props);
    var path = hashHistory.getCurrentLocation().pathname;
    var currentName = 'station';
    switch (path) {
      case '/':
        currentName='station';
        break;
      case '/countreport':
        currentName='countreport';
        break;
      case '/compare':
        currentName='compare';
        break;
      case '/pvideo':
        currentName='pvideo';
        break;
      case '/login':
        currentName='login';
        break;
      case '/typeedit':
        currentName='typeedit';
        break;
      default:
        currentName='station';
    }
    this.state = {
        current: currentName,
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  logoutClick=(e)=>{
    md_ajax.post(ctx+'/login_logout',{
          cache:false
        }).then((data)=>{
          md_sessionStorage.remove('username');
          // md_sessionStorage.remove('password');
          md_sessionStorage.remove('islogin');
          md_sessionStorage.remove('issuper');          
          md_sessionStorage.remove('authstation');
          this.props.LoginClick(undefined, false, false);
          hashHistory.push('/');
          window.location.reload();
          debugger
        }).catch((msg)=>{
          alert(msg);
        })    
  }
  render() { 
    let {
      username, islogin, issuper
    } = this.props;
    username = md_sessionStorage.get('username');
    islogin = md_sessionStorage.get('islogin');
    issuper = md_sessionStorage.get('issuper');
    return <div>
              <Menu
                onClick={this.handleClick}
                mode="horizontal"
                selectedKeys={[this.state.current]}
              >
                <Menu.Item key="station">
                  <Link to="/">站点</Link>
                </Menu.Item>
                { !islogin||
                <Menu.Item key="countreport">
                   <Link to="/countreport">计数报告</Link>
                </Menu.Item> 
                }
                { !islogin||
                <Menu.Item key="compare">
                   <Link to="/compare">统计对比</Link>
                </Menu.Item>
                }
                { !islogin||
                <Menu.Item key="pvideo">
                   <Link to="/pvideo">视频</Link>
                </Menu.Item>
                }                                                
                { !issuper||
                  <Menu.Item key="typeedit">
                    <Link to="/typeedit">种类设置</Link>
                  </Menu.Item>
                }    
                { !issuper||
                  <Menu.Item key="dataedit">
                    <Link to="/dataedit">数据订正</Link>
                  </Menu.Item>
                }              
              </Menu>
               { islogin ?
                  <span><span className="nav-login">{username}</span><span className="nav-logout" onClick={this.logoutClick}>退出</span></span>
                  :<span className="nav-login"><Link to="/login">登录</Link></span>
                }              
            </div>
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

MMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MMenu);

export default MMenu;