import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Form} from 'semantic-ui-react'


class LoginForm extends React.Component {
    constructor(props,context){
        super(props);
    }

    render() {
        return (
            <div className="login-form">
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder="email" name="email" />
                        <Form.Input placeholder="password" name="password" />
                        <Form.Button content="Submit" />
                    </Form.Group>
                </Form>
            </div>
        )
    }

}
export default LoginForm;