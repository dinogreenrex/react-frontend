import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import RouterMain from './components/RouterMain'
import InitStore from './components/AppStore'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'babel-polyfill'
import 'antd/lib/style/index.css'



/*****************App*************************/

const store = InitStore();
ReactDOM.render(
    <Provider store={store} >
        <RouterMain />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

