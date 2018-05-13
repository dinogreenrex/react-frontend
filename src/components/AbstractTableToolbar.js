import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button,Popconfirm} from 'antd'

class TableToolbarBase extends Component {
	constructor(props) {
		super(props);
	}
	editRecord=(e) => {
		e.preventDefault();
		this.props.dispatch({type: `EDIT_${this.props.model}`})
	}

	insertRecord = () => {

	}

	render() {
		const buttonDisabled=0;
		return (
		<Button.Group>

			<Button icon="plus-circle">Insert</Button>

			<Button icon="edit" onClick={(e)=>this.editRecord(e)} disabled={buttonDisabled} >Edit</Button>


			<Popconfirm title="Are you sure delete this task?"  >
				<Button icon="delete" disabled={buttonDisabled}>Delete</Button>
			</Popconfirm>
		</Button.Group>
		)
	}
}
export const AbstractTableToolbar = connect()(TableToolbarBase);