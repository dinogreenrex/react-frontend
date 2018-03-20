import React, {Component} from 'react';
import LoggedInUsersContainer from './LoggedInUsersContainer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import LoginContainer from './LoginContainer'

class Topbar extends React.Component {
    constructor(props)
    {
        super(props)
        this.ToggleForm = this.ToggleForm.bind(this);
        console.log(this)
    }

    ToggleForm(){
        // action creators
        console.log('toggle');

        this.props.dispatch({
            type: 'LOGINFORM_TOGGLE'
        });
    }

    render() {
        return (
            <div className="topbar">
               <LoginContainer />
            </div>
        )
    }
}

Topbar.propTypes = {
    toggleform: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
}
export default connect(
    (state) => {
        return {
            toggleform: state.freducer.toggleform,
            isUserLoggedIn: state.freducer.isUserLoggedIn,
        }
    }
)(Topbar);
