import React, {Component} from 'react';
import { Table, Button, Row, Col, Popconfirm, message,Icon } from 'antd';
import axios from 'axios';
import {connect} from 'react-redux'

class PersonList extends React.Component {
	constructor(props){
			super(props)
		this.editRecord = this.editRecord.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
	}
	editRecord(cRecord){
		
	}
	deleteRecord(cRecord){

	}
	componentWillMount(){
			this.props.dispatch(dispatch => {
				dispatch({type: "ABSTRACT_FETCH"});
				axios.get(this.props.url, {
				}).then(
					(response) => {
							dispatch({type: "ABSTRACT_FETCH_SUCCESS", result: response.data} );
					},

					(error) => {
							dispatch({type: "ABSTRACT_FETCH_ERROR", error: error.response.data.message })
					}
				)
			})
	}

	render(){


		let gutter={ xs: 16, sm: 32, md: 24, lg: 32 }
		const buttonDisabled = this.props.currentRecord ? false : true;
		const cRecord = this.props.currentRecord;
		let number;
		const eventCancelEdit = () =>  message.error('Clicked on No', number=1 );

		const TableToolbar = (props) => (
				<Button.Group>

							<Button icon="plus-circle">Insert</Button>

							<Button icon="edit" disabled={buttonDisabled} onClick={this.editRecord(cRecord)}>Edit</Button>


							<Popconfirm title="Are you sure delete this task?" onConfirm={this.deleteRecord(cRecord)} onCancel={eventCancelEdit} okText="Yes" cancelText="No">
								<Button icon="delete" disabled={buttonDisabled} >Delete</Button>
							</Popconfirm>
					</Button.Group>
		)
		const rowSelection = {
			onSelect: (selectedRowKeys, selections , selectedRows) => {
				this.props.dispatch({type:"CURRENT_RECORD_SELECTION", selectionId: selectedRowKeys.id})
				console.log(selectedRows)

			},
			type: 'radio',
		};
		const clickHandler = (e,index) =>{
			e.preventDefault
			console.log(e, index);
		}
		return (
			<div>
				<TableToolbar />
				<Table
					rowKey={record=>record.id}
					rowSelection={rowSelection}
					dataSource={this.props.abstractResult}
					rowClassName="test"
					columns={this.props.columns}
					selectable={false}
					size="large"
					type="radio"
					loading={this.props.fetchInProgress}
					//Selected.Id
					//Toolbar
					onRow={(record) => {
						return {
							onSelect: clickHandler,  // onClick
						};
					}
					}
				/>
			</div>


		);
	}
}

export default PersonList;