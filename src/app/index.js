import { createStore } from 'redux'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Root from '../router/Route';
import store from '../redux/store';
import 'babel-polyfill';

render((
	<Provider store={store}>
    <Root/>
  </Provider>
), document.getElementById('content'));