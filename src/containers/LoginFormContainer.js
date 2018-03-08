import React, {Component} from 'react';
import LoginLink from '../components/presentational/LoginLink'
import LoginForm from '../components/presentational/LoginForm'
import { connect } from 'react-redux'


class LoginFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.renderForm = this.renderForm.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    ToggleForm() {
        // action creators
        this.props.dispatch({
            type: 'LOGINFORM_TOGGLE'
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let logindata = {
            username: this.username.value,
            password: this.password.value,
        }
        this.username.value = '';
        this.password.value = '';
        console.log('parent');
    }

    handleChange() {

    }

    renderForm(){
        return this.props.formactive ? true : null ;
    }

    render() {
        return (
            <div>
                <LoginLink />
                {this.props.formactive ? <LoginForm />: null }

            </div>
        )
    }
}

export default connect(
    (state,props) => {
        return {
            formactive: state.freducer.formactive
        }
    }
)(LoginFormContainer) ;