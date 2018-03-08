import React, {Component} from 'react';
import LoginFormContainer from './LoginFormContainer'
import UserLoggedInContainer from './UserLoggedInContainer'
import { connect } from 'react-redux'
class Topbar extends React.Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="topbar">
                {this.props.isUserLoggedIn ? <UserLoggedInContainer /> : <LoginFormContainer/>}
            </div>
        )
    }
}

export default connect()(Topbar);