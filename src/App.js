import React, { Component } from 'react';
import './App.css';
import Topbar from './containers/Topbar';
import Sidebar from './containers/Sidebar';
import Footer from './containers/Footer.js';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



/*********************************/

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

  render() {
      return (
        <div>
           <Topbar />
           <Sidebar />
           <Footer />
        </div>

    );
  }
}


export default App;
