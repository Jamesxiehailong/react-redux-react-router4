import {
	combineReducers
}
from 'redux';
import {
	map
}
from './map';
import {
	login
}
from './login';


const rootReducer = combineReducers({
	map: map,
	login: login,
})
export default rootReducer;