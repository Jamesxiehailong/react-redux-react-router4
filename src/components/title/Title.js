import React from 'react';
import './Title.scss';

const Title = (props)=> {
	return <div className="title-body" style={{background: 'url(./images/banner.png) no-repeat',backgroundSize:'cover'}}>
			{/*<img className="title-img" src="./images/logo-h60.png" alt=""/>*/}
			<span className="title-name">鱼道在线监测系统</span>                
		</div>	
};		
export default Title;