import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import HOC, {HOC1} from '../components/HOCForEverything'
import {Segment, Button, Container} from 'semantic-ui-react'
import {NavLink, Route} from 'react-router-dom'
import LoginForm from '../components/presentational/LoginForm'
import LoggedInUsersContainer from './LoggedInUsersContainer'
import PropTypes from 'prop-types'

class LoginContainer extends React.Component {
    constructor(props){
        super(props)
        this.ToggleForm = this.ToggleForm.bind(this);
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    }
    ToggleForm(){
        // action creators
        console.log('toggle');

        this.props.dispatch({
            type: 'LOGINFORM_TOGGLE'
        });
    }
    handleLoginFormSubmit(e){
        e.preventDefault();
        let logindata = {
            username: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        }

        let processingdata = this.props.dispatch(dispatch => {
            dispatch({type: 'GET_LOGIN', processing: true});
            axios.post('http://localhost/api/login', {
                email: logindata.username,
                password: logindata.password,
            }).then(
                (response) => {
                    dispatch({type: 'LOGIN_SUCCESS', payload: response.data} );
                },
                (error) => {
                    console.log(error.response);
                    dispatch({type: 'LOGIN_ERROR', payload: error.response})
                }
            )
        });
    }
    handleLogout(){
        this.props.dispatch({type: 'LOGOUT'});
    }
    render() {
        let payload;
        return (
            <div>
                <Segment loading={this.props.processinglogin ? true: false}>
                    <div className="Login-Button">
                    {this.props.loginButtonActive ?
                        <div>
                            <Button onClick={this.ToggleForm}>Login</Button>
                        </div>
                        : <LoggedInUsersContainer />
                    }
                    </div>
                    <div className="Login-Form"> { this.props.toggleform ?
                        HOC1(LoginForm,
                            payload={
                                handleSubmit: this.handleLoginFormSubmit,
                                processinglogin: this.props.propcessinglogin
                                })
                        : null }

                    </div>
                    <div className="Login-Form-Errors">
                        {this.props.loginerror ?
                            <div>
                                <p>{this.props.loginerror.message}</p>
                                {/*Recursively list all items in the object and array*/}
                            </div>
                            : null
                        }
                    </div>
                </Segment>
            </div>
        )
    }
}

LoginContainer.propTypes = {
    toggleform: PropTypes.bool,
    isUserLoggedIn: PropTypes.bool,
    loginButtonActive: PropTypes.bool,
    processinglogin: PropTypes.bool,
    loginerror: PropTypes.object,
}

export default connect(
    (state) => {
        return {
            toggleform: state.freducer.toggleform,
            isUserLoggedIn: state.freducer.isUserLoggedIn,
            loginButtonActive: state.freducer.loginButtonActive,
            processinglogin: state.freducer.processinglogin,
            loginerror: state.freducer.loginerror,

        }
    }
)(LoginContainer)
