import React, {Component} from "react";
import {Form, Control, actions, Field} from "react-redux-form";
import axios from "axios";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Col,Row} from 'antd';

class SimpleForm extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);

	}
	componentWillMount(){
		console.log('mount');
	}

	componentWillReceiveProps(nextProps){

	}
	componentDidMount(){
		const city = 'jingaForms.PersonAddress.formFields.city.value';
		const street = 'jingaForms.PersonAddress.formFields.street.value';
		const country = 'jingaForms.PersonAddress.formFields.country.value';
		const postcode = 'jingaForms.PersonAddress.formFields.postcode.value';

		this.props.dispatch(actions.change(city, this.props.city));
		this.props.dispatch(actions.change(street, this.props.street));
		this.props.dispatch(actions.change(country, this.props.country));
		this.props.dispatch(actions.change(postcode, this.props.postalcode));
	}

	componentWillUpdate(nextProps){
		const city = 'jingaForms.PersonAddress.formFields.city.value';
		const street = 'jingaForms.PersonAddress.formFields.street.value';
		const country = 'jingaForms.PersonAddress.formFields.country.value';
		const postcode = 'jingaForms.PersonAddress.formFields.postcode.value';

		this.props.dispatch(actions.change(city, nextProps.city));
		this.props.dispatch(actions.change(street, nextProps.street));
		this.props.dispatch(actions.change(country, nextProps.country));
		this.props.dispatch(actions.change(postcode, nextProps.postalcode));
	}

	componentDidUpdate(nextProps){


	}

	handleChange(values) {
		const dummy ='empty';
	}
	handleUpdate(form) {
		console.log('update of form');

		console.log(form);
	}
	handleSubmit(values) {
		console.log(values);
		let model = this.props.model;
		let recordid = this.props.id;
		this.props.dispatch(dispatch => {
			dispatch({type: `EDIT_${model}_SINGLE`, editInProgress: true});
			axios.put(`http://localhost/api/${model}/${this.props.id}`, {
				id: recordid,
				street: values.street.value,
				city: values.city.value,
				country: values.country.value,
				postcode: values.postalcode.value,
			}).then(
				(response) => {
					dispatch({type: `EDIT_${model}_SINGLE_SUCCESS` , result: response.data} );
				},
				(error) => {
					console.log(error.response);
					dispatch({type: `EDIT_${model}_SINGLE_ERROR`, error: error.response})
				}
			)
		});
	}

	render() {
		const test = 'dummy';
		return (
			<Form model="jingaForms.PersonAddress.formFields" onSubmit={this.handleSubmit}>
				<Row type="flex" justify="start">
					<Col span={6}>
						<label>City</label>
					</Col>
					<Col span={6}>
						<Control.text
							model=".city.value" placeholder="City" />
					</Col>
				</Row>

				<Row type="flex" justify="start">
					<Col span={6}>
						<label>Street</label>
					</Col>
					<Col span={6}>
						<Control.text
							model=".street.value" placeholder="Street" />
					</Col>
				</Row>
				<Row type="flex" justify="start">
					<Col span={6}>
						<label>Country</label>
					</Col>
					<Col span={6}>
						<Control.text
							model=".country.value" placeholder="country" />
					</Col>
				</Row>
				<Row type="flex" justify="start">
					<Col span={6}>
						<label>Post Code</label>
					</Col>
					<Col span={6}>
						<Control.text
							model=".postcode.value" placeholder="postcode" />
					</Col>
				</Row>
				<Row type="flex" justify="start">
					<Col span={6}>
						<button type="submit">
							Submit
						</button>
					</Col>
					<Col span={6}>
						<Control.reset model="jingaForms.PersonAddress.formFields" className="secondary">
							Clear Values
						</Control.reset>
					</Col>
				</Row>

			</Form>
		);
	}
}
//Abstract Form
SimpleForm.propTypes = {
	id: PropTypes.number,
	city: PropTypes.string,
	street: PropTypes.string,
	country: PropTypes.string,
	postalcode: PropTypes.string,
}
export const SingleRecordForm = connect()(SimpleForm)
