import React, {Component} from "react";
import {Form, Control, actions} from "react-redux-form";
import axios from "axios";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

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
		this.props.dispatch(actions.merge('',''));
	}

	componentWillUpdate(){
		const dummy = 'Component Will Update'
	}
	componentDidUpdate(nextProps){
		const city = 'jingaForms.personAddress.formFields.city.value';
		const street = 'jingaForms.personAddress.formFields.street.value';
		const country = 'jingaForms.personAddress.formFields.country.value';
		const postcode = 'jingaForms.personAddress.formFields.postalcode.value';

		if(this.props.city != nextProps.city){
			this.props.dispatch(actions.change(city, this.props.city));
		}
		if(this.props.street != nextProps.street){
			this.props.dispatch(actions.change(street, this.props.street));
		}
		if(this.props.country != nextProps.country){
			this.props.dispatch(actions.change(country, this.props.country));
		}
		if(this.props.postalcode != nextProps.postalcode){
			this.props.dispatch(actions.change(postcode, this.props.postalcode));
		}

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
		let recordid = this.props.id;
		this.props.dispatch(dispatch => {
			dispatch({type: `EDIT_PERSONADDRESS_SINGLE_RECORD`, editInProgress: true});
			axios.put(`http://localhost/api/PersonAddress/${this.props.id}`, {
				id: recordid,
				street: values.street.value,
				city: values.city.value,
				country: values.country.value,
				postcode: values.postalcode.value,
			}).then(
				(response) => {
					dispatch({type: `EDIT_PERSONADDRESS_SINGLE_RECORD_SUCCESS` , result: response.data} );
				},
				(error) => {
					console.log(error.response);
					dispatch({type: 'SUBMIT_PERSONADDRESS_RECORD_EDIT_ERROR', error: error.response})
				}
			)
		});
	}

	render() {
		const test = 'dummy';
		return (
			<Form model="jingaForms.personAddress.formFields" onSubmit={this.handleSubmit}>
				<div className="field">
					<label>City</label>
					<Control.text
						model=".city.value" placeholder="City" />
				</div>

				<div className="field">
					<label>Street</label>
					<Control.text
						model=".street.value" placeholder="" />
				</div>
				<div className="field">
					<label>Country</label>
					<Control.text
						model=".country.value" placeholder="" />
				</div>
				<div className="field">
					<label>Post Code</label>
					<Control.text
						model=".postalcode.value" placeholder=""  />
				</div>
				<button type="submit">
					Submit
				</button>
				<Control.reset model="jingaForms.personAddress.formFields" className="secondary">
					Clear Values
				</Control.reset>

			</Form>
		);
	}
}
//Abstract Form
SimpleForm.PropTypes = {
	id: PropTypes.number,
	city: PropTypes.string,
	street: PropTypes.string,
	country: PropTypes.country,
	postalcode: PropTypes.postalcode,
}
export default connect()(SimpleForm)
