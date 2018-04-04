import React, {Component} from 'react';
import { Form, Control, Field } from 'react-redux-form';
import axios from 'axios';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';

export class SimpleForm extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}
	componentWillMount(){
		console.log('mount');
	}
	componentWillUpdate
	handleChange(values) {

	}
	handleUpdate(form) {

	}
	handleSubmit(values) {

	}

	render() {

		return (
			<Form model="jingaForms.person" onSubmit={v => console.log(v)}>
						<div className="field">
							<label>City</label>
							<Control.text
								model=".city" placeholder="" defaultValue={this.props.city} />
						</div>

						<div className="field">
							<label>Street</label>
							<Control.text
							model=".street" placeholder="" defaultValue={this.props.street} />
							</div>
							<div className="field">
							<label>Country</label>
							<Control.text
							model=".country" placeholder="" defaultValue={this.props.country} />
							</div>
							<div className="field">
							<label>Post Code</label>
							<Control.text
							model=".postalcode" placeholder="" defaultValue={this.props.postalcode} />
							</div>
							<button type="submit">
							Submit
							</button>
							<Control.reset model="jingaForms.person" className="secondary">
							Clear Values
							</Control.reset>

			</Form>
		);
	}
}

