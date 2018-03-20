import React, { Component } from 'react';
import './App.css';
import Topbar from './containers/Topbar';
import Sidebar from './containers/Sidepane';
import BottomBar from './containers/BottomBar.js';
import RouterMain from './components/RouterMain'

import Sidepane from './containers/Sidepane'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



/*********************************/

class App1 extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

  render() {
      return (
          <div>
              <Topbar toggleform="false" isUserLoggedIn="false" formenabled="true" />
                    <Sidepane />
          </div>


    );
  }
}


export default App1;
