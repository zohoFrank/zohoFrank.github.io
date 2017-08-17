/**
 * Created by Zoho on 16/9/2.
 */
import {applyMiddleware, createStore, compose} from 'redux';

// Reducer
import reducer, {DEFAULT_STORE} from './reducers/rootReducer';
// Middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// Middleware
// with logger and debug tool
const debugMiddleware = compose(
    applyMiddleware(promise(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : x => x,
);
// without any log or tools
const distMiddleware = applyMiddleware(promise(), thunk);

// Create store
const store = createStore(reducer, DEFAULT_STORE, debugMiddleware);
export default store;
