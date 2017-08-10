import React from 'react';
import './Panel.scss';

const Panel = (props) => {
	return <div className="panel-body">
				{props.children}
			</div>
};
export default Panel;