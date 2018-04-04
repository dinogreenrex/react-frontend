import React, { Component } from 'react';
import './App.css';
import Topbar from './containers/Topbar';
import SidepaneMenu from './components/presentational/Sidepane-Menu';

import BottomBar from './containers/BottomBar.js';
import RouterMain from './components/RouterMain'
import {Layout} from 'antd'
//import Footer from './containers/BottomBar'
import ContentContainer from './containers/ContentContainer'
import { Row, Col} from 'antd';


import Sidepane from './containers/Sidepane'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



/*********************************/

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

  render() {
      return (
          <div>
              <Row>
                   <Col span={24}>
                       <Topbar toggleform="false" isUserLoggedIn="false" formenabled="true" />
                   </Col>
              </Row>
                <Row>
                   <Col span={6}>
                       <SidepaneMenu />
                   </Col>
                  <Col span={13}>
                        <ContentContainer />
                  </Col>
              </Row>

          </div>


    );
  }
}


export default App;
