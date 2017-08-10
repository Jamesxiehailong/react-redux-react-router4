import {
	updateObject, updateItemInArray
}
from '../utility';

const initialState = {
	center: [47.7090107312, 86.8397998810]
};

export const map = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE":
			return updateObject(state, {
				center: action.data
			});
		default:
			return state;
	}
}