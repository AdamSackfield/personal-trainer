import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/stateful/App';

// Router Setup
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Redux Store
import { Provider } from 'react-redux';
import store from './store/store'

import './index.scss';


ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory({})}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
