import React from 'react';
import './TitleCard.scss';

const TitleCard = (props) => {
	return <div className="TitleCard-body">
			<div className="title">
				{props.txt}
			</div>

				<div className='TitleCard-content'>
					{props.children}
				</div>		
			</div>
};
export default TitleCard;
