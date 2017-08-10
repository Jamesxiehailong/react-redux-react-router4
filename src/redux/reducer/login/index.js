import {
	updateObject, updateItemInArray
}
from '../utility';

const initialState = {
	username: '',
	islogin: false,
	issuper: false,
};

export const login = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			return updateObject(state, {
				username: action.username,
				islogin: action.islogin,
				issuper: action.issuper
			});
		default:
			return state;
	}
}