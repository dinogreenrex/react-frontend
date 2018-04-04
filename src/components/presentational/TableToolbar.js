import React, {Component} from 'react'
import {Button, Popconfirm, message, Icon} from 'antd' ;
export class TableToolbar extends React.Component {
	constructor(props){
		super(props);
		this.editRecord = this.editRecord.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
	}
	editRecord(record){

	}
	deleteRecord(record){

	}
	cancelEdit(record){

	}
	render(){
		const selectedRecord = this.props.selectedRecordId;
		const buttonDisabled = this.props.selectedRecordId ? false : true;
		return (
			<Button.Group>

				<Button icon="plus-circle">Insert</Button>

				<Button icon="edit" disabled={buttonDisabled}
				        onClick={this.editRecord(selectedRecord)}>Edit</Button>

				<Popconfirm title="Are you sure delete this task?"
				            onConfirm={this.deleteRecord(selectedRecord)}
				            onCancel={this.cancelEdit} okText="Yes" cancelText="No">
					<Button icon="delete" disabled={buttonDisabled} >Delete</Button>
				</Popconfirm>

			</Button.Group>
		)
	}
}