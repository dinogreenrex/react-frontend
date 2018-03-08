import React, {Component} from 'react';
import { connect } from 'react-redux'


class LoginLink extends React.Component {
    constructor(props)
    {
        super(props);
        this.ToggleForm = this.ToggleForm.bind(this);
    }
    ToggleForm(){
        // action creators

        this.props.dispatch({
            type: 'LOGINFORM_TOGGLE'
        });
    }
    render(){
        return (
            <div className="topbar-loginlink">
                <button onClick={this.ToggleForm}>Login</button>
            </div>
        )
    }
}

export default connect()(LoginLink);