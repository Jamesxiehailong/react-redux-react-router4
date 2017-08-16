import React from 'react';
import './Switch.scss';

const Switch = (props) => {
    let color_status,name_status;
    if(props.status){
        color_status = "#108ee9";
        name_status='开';
    }else{
        color_status = "#bfbfbf";
        name_status='关';
    }

	return <div className="Switch-body" style={{background:color_status}}>
				{name_status}
			</div>
};
export default Switch;