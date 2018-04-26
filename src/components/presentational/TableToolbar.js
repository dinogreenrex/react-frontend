import React, {Component} from 'react'
import {Button, Popconfirm, message, Icon} from 'antd' ;
import {connect} from 'react-redux';

class TableToolbar extends React.Component {
	constructor(props){
		super(props);
		this.editRecord = this.editRecord.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
		this.insertRecord = this.insertRecord.bind(this);
	}
	editRecord(record){
		console.log(record);
		this.props.dispatch({type: `EDIT_${this.props.model}`, recordId: this.props.selectedRecordId, component: 'edit'})
	}
	deleteRecord(record){
		this.props.dispatch({type: `DELETE_${this.props.model}`, recordId: this.props.selectedRecordId, component: 'delete'})
	}
	insertRecord(record){
		this.props.dispatch({type: `INSERT_${this.props.model}`, recordId: this.props.selectedRecordId, component: 'insert'})
	}
	cancelEdit(record){
		console.log(record);
	}
	render(){
		const buttonDisabled = this.props.selectedRecordId ? false : true;
		return (
			<Button.Group>

				<Button icon="plus-circle" onClick={this.insertRecord}>Insert</Button>

				<Button icon="edit" disabled={buttonDisabled}
				        onClick={this.editRecord}>Edit</Button>
				
					<Button icon="delete"
					        disabled={buttonDisabled}
					        onClick={this.deleteRecord}>
						Delete
					</Button>

			</Button.Group>
		)
	}
}
export default connect(
	state => {
		return {
			showRecordForm: state.freducer.showRecordForm,
			toolbarAction: state.freducer.toolbarAction,
		}
	}
)(TableToolbar)