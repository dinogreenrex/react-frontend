import React, {Component} from 'react';

import {Button,Popconfirm} from 'antd'
class TableToolbarBase extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const buttonDisabled=0;
		return (
		<Button.Group>

			<Button icon="plus-circle">Insert</Button>

			<Button icon="edit" disabled={buttonDisabled} >Edit</Button>


			<Popconfirm title="Are you sure delete this task?"  >
				<Button icon="delete" disabled={buttonDisabled}>Delete</Button>
			</Popconfirm>
		</Button.Group>
		)
	}
}
export const AbstractTableToolbar = TableToolbarBase;