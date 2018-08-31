import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/stateful/App';

// Router Setup
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Redux Store
import { Provider } from 'react-redux';
import store from './store/store'

// Flash Messages
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

import './index.scss';
import { dashboard } from './actions/User/UserActions';
import { AUTHENTICATED } from './actions/types';

const token = localStorage.getItem('token')
if(token) {
	dashboard()
	store.dispatch({ type: AUTHENTICATED })
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory({})}>
			<AlertProvider template={AlertTemplate} { ...options} >
				<App />
			</AlertProvider>
		</Router>
	</Provider>,
	document.getElementById('app')
);
