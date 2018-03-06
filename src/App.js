import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import LoginForm from './containers/LoginLink';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import SideBarNav from './containers/SideBarNav';
import freducer from './reducers/reduce';
import PropTypes from 'prop-types'


import Header from './containers/Header' ;
import Footer from './containers/Footer' ;
import Content from './containers/MainContent';

/*********************************/

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

  render() {

      return (
        <div>
            <Route  path="/" component={Content} />
            <Header />
          <SideBarNav />
          <LoginForm />
          <Footer />
        </div>

    );
  }
}


export default App;
