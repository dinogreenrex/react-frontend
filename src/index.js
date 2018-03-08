import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { reducer as formReducer } from 'redux-form'

import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import thunk from 'redux-thunk'

import freducer from './reducers/reduce'
import './index.css';
import App from './App';

const reducers = {
    freducer,
    form: formReducer
}

const reducer = combineReducers(reducers);



const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

const mymiddleware =  applyMiddleware(
    thunk,
    logger,
);
let store = createStore(
    reducer,
    compose(
        mymiddleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);
console.log(store)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
