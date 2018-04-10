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
		this.props.dispatch({type: "EDIT_RECORD", recordId: this.props.selectedRecordId, toolbarAction: 'edit'})
	}
	deleteRecord(record){
		this.props.dispatch({type: "DELETE_RECORD", recordId: this.props.selectedRecordId, toolbarAction: 'delete'})
	}
	insertRecord(record){
		this.props.dispatch({type: "INSERT_RECORD", recordId: this.props.selectedRecordId, toolbarAction: 'edit'})
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

				<Popconfirm title="Are you sure delete this task?"
				            onConfirm={this.deleteRecord}
				            onCancel={this.cancelEdit} okText="Yes" cancelText="No">
					<Button icon="delete" disabled={buttonDisabled} >Delete</Button>
				</Popconfirm>

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