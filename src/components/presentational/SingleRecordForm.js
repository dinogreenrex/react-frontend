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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);

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
		console.log(this.props.url);
	}

	componentDidUpdate(nextProps){


	}

	handleChange(values) {
		const dummy ='empty';
	}
	handleUpdate(form) {
		console.log('update of form');
		console.log(this.props.url);

		console.log(form);
	}

	//handle submit of edit record and insert record. url for insert is
	/*
			baseapiurl/${model}
	url for edit is
			baseapiurl/${model}/id
	url should be passed from parrent component.
	*/
	handleSubmit(values) {
		console.log(values);
		let url = this.props.submitUrl;
		let model = this.props.model;
		this.props.dispatch(dispatch => {
			dispatch({type: `INSERT_${model}`, editInProgress: true});
			axios.post(`${url}`, {
				street: values.street.value,
				city: values.city.value,
				country: values.country.value,
				postcode: values.postcode.value,
			}).then(
				(response) => {
					dispatch({type: `INSERT_${model}_SUCCESS` , result: response.data} );
				},
				(error) => {
					console.log(error.response);
					dispatch({type: `INSERT_${model}_ERROR`, error: error.response})
				}
			)
		});
	}
	handleEdit(values){
		let url = this.props.submitUrl;
		let model = this.props.model;
		this.props.dispatch(dispatch => {
			dispatch({type: `EDIT_${model}`, editInProgress: true});
			axios.put(`${url}`, {
				id: this.props.id,
				street: values.street.value,
				city: values.city.value,
				country: values.country.value,
				postcode: values.postcode.value,
			}).then(
				(response) => {
					dispatch({type: `EDIT_${model}_SUCCESS` , result: response.data, editInProgress:false } );
				},
				(error) => {
					console.log(error.response);
					dispatch({type: `EDIT_${model}_ERROR`, error: error.response, editInProgress:false })
				}
			)
		})
	}

	render(){
		const test = 'dummy';
		return (
			<Form model="jingaForms.PersonAddress.formFields" onSubmit={
				this.props.component === 'insert' ? this.handleSubmit : this.handleEdit
			}>
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
	url: PropTypes.string,
	city: PropTypes.string,
	street: PropTypes.string,
	country: PropTypes.string,
	postalcode: PropTypes.string,
}
export const SingleRecordForm = connect()(SimpleForm);
