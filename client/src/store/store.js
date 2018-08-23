import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'

// Wrapper for Redux DevTools Extension for Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxLogger = createLogger({}); 

const storeMiddleware = composeEnhancers(
  applyMiddleware(thunk, reduxLogger)
)(createStore);

const store = storeMiddleware(rootReducer);

export default store