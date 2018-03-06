import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {isloginformactive} from '../actions/loginformactive';
import {loginstate} from '../actions/ReducerAction';
import { connect } from 'react-redux'

class Form extends React.Component {
    constructor(props,context){
        super(props);
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
class LoginForm extends React.Component {
    constructor(props,context){
        super(props,context);

        this.state = {
            formactive: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ShowHideForm = this.ShowHideForm.bind(this);
        let username;
        let password;
    }


    componentDidMount(){

    }
    componentWillMount(){

    }
    componentWillUnmount(){

    }

    ShowHideForm(){
        this.props.dispatch(isloginformactive(this.state.formactive))
        console.log(this);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log(this.state);
        this.username.value='';
        this.password.value='';

        console.log(event);
    }
    handleChange(){

    }
    
    
    render(){
        if(this.props.formactive){

        }
        return (
            <div className="mainpage-user">
                <div >
                    <a href="#" onClick={this.ShowHideForm}>Login</a>
                </div>
                <div >
                    {this.props.formactive ? <div className="mainpage-form-user"><Form /></div> : null }
                </div>
            </div>


        )
    }
}
/* state => {
 return {
 isActive: isloginformactive(state.isActive)
 }
 }
 mapStateToProps(),
 dispatch => {
 return {
 onTodoClick: test => {
 dispatch(isloginformactive(test))
 }
 }
 },*/
const returnFormActive = (formactive) => {
    return formactive
}

export default connect(
    (state,props) => {
        return {
            formactive: state.freducer.formactive
        }
    }
)(LoginForm)