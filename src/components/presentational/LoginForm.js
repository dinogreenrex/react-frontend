import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Form, Input, Button, Icon} from 'antd'
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'


class LoginForm extends React.Component {
	constructor(props,context){
		super(props);
	}

	render() {
		return (
			<div className="login-form">
				<Form onSubmit={this.props.handleSubmit} layout="inline">
					<Form.Item>
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="email" placeholder="Email" name="email"/>
					</Form.Item>
					<Form.Item>
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password" placeholder="Password" name="password" />
					</Form.Item>
					<Button
						type="primary"
						htmlType="submit"> Submit </Button>

				</Form>
			</div>
		)
	}

}
export default LoginForm;