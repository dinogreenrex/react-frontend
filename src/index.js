import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import LoginForm from './containers/LoginLink'
import freducer from './reducers/reduce'
import './index.css';
import App from './App';

import Header from './containers/Header' ;
import Footer from './containers/Footer' ;
const reducers = {
    freducer,
    form: formReducer
}

const reducer = combineReducers(reducers);


let store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
