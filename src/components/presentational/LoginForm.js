import React, {Component} from 'react';
import { connect } from 'react-redux'
import {login_process_start, logins_process_success, login_process_error} from '../../actions/actions'
import axios from 'axios'


class LoginForm extends React.Component {
    constructor(props,context){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        let username = '';
        let password = '';
    }
    handleSubmit(e){
        e.preventDefault();
        let logindata = {
            username: this.username.value,
            password: this.password.value,
        }

        let processingdata = this.props.dispatch(dispatch => {
            axios.post('http://localhost/api/login', {
                email: logindata.username,
                password: logindata.password,
            }).then(
                (response) => {

                    dispatch({type: 'LOGIN_SUCCESS', payload: response.data} );
                },
                (error) => {
                    dispatch({type: 'LOGIN_ERROR', payload: error.response.data.message })
                }
            )
        });
    }

    isLoginStarted(){
        return this.props.loginstart;
    }
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="username">
                        <label>Username</label>
                        <input type="text" name='username' ref={node => {
                            this.username = node
                        }} onChange={ this.handleChange}/>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="text" name="password" ref={node => {
                            this.password = node
                        }} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="login"/>

                </form>
            </div>
        )
    }

}
export default connect()(LoginForm);