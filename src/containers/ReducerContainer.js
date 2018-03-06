import React from 'react'
import { connect } from 'react-redux'
import {loginstate} from '../actions/ReducerAction'

import {reduxForm} from 'redux-form';
import { bindActionCreators } from 'redux'



class LoginUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.state.username = this.username.value;
        this.username.value = '';
        this.state.password = this.password.value;
        this.password.value = '';
        this.state.loading = true;
        this.props.dispatch(loginstate(this.state.username, this.state.password));
    }
    formLoading(){
        let disabled = this.state.loading ? 1 : 0;
        return disabled;
    }
    render(){
        return(
             <form onSubmit={this.handleSubmit}
        >
            <label>Username</label>
            <input type="text" name="username" ref={node => {this.username = node}} />
            <br />
            <label>Password</label>
            <input type="text" name="password" ref={node => {this.password = node}} />
            <br />
                 <button type="submit" >Change State</button>
        </form>
        )
    }
}
LoginUser = reduxForm({
    form: 'Contact'
})(LoginUser);

export default LoginUser;