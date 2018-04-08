import React, {Component} from 'react';
import { connect } from 'react-redux'
import LoggedInUser from './LoggedInUser'
import {Button} from 'antd'
import 'antd/lib/button/style/index.css'
import {HOC1} from '../components/HOCForEverything'


class LoggedInUsersContainer extends React.Component {
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }
    logoutUser(){
        this.props.dispatch({type: 'LOGOUT'})
    }
    render(){
        let payload;

        return(
          <div className="topbar-logged-in-user-container">
              {HOC1(
                LoggedInUser, payload=
                {usersession: this.props.usersession}
              )
              }
              <Button onClick={this.logoutUser}> Logout </Button>
          </div>
        )
    }
}

export default connect(
  (state) => {
      return {
          usersession: state.freducer.usersession,
      }
  }

)(LoggedInUsersContainer);