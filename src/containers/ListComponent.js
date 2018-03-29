import React, {Component} from 'react';
import { Table, Button, Row, Col, Popconfirm, message } from 'antd';
import axios from 'axios';
import {connect} from 'react-redux'

class ListComponent extends React.Component {
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
		this.props.fetchresult ? null :
			this.props.dispatch(dispatch => {
				dispatch({type: 'FETCH_PERSON', uiInProgress: true});
				axios.get('http://localhost/api/koalas', {
				}).then(
					(response) => {
							dispatch({type: 'FETCH_PERSON_SUCCESS', payload: response.data} );
					},

					(error) => {
							dispatch({type: 'FETCH_PERSON_ERROR', error: error.response.data.message })
					}
				)
			})
	}

	render(){
    const columns = [
        {
					title: 'FName',
					dataIndex: 'fname',
					key: 'fname',
        },
        {
					title: 'LName',
					dataIndex: 'lname',
					key: 'lname',

        },
        {
					title: 'Height',
					dataIndex: 'height',
					key: 'height',

        },
        {
					title: 'Kilos',
					dataIndex: 'kilograms',
					key: 'kilograms',
        }
    ]

		let gutter={ xs: 16, sm: 32, md: 24, lg: 32 }
		const buttonDisabled = this.props.currentTableSelection ? false : true;
		const cRecord = this.props.currentTableSelection;
		let number;
		const eventCancelEdit = () =>  message.error('Clicked on No', number=1 );

		const TableToolbar = (props) => (
				<Row gutter={gutter}>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">
							<Button>Insert</Button>
						</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">
							<Button disabled={buttonDisabled} onClick={this.editRecord(cRecord)}>Edit</Button>

						</div>
					</Col>
					<Col className="gutter-row" span={6}>
						<div className="gutter-box">

							<Popconfirm title="Are you sure delete this task?" onConfirm={this.deleteRecord(cRecord)} onCancel={eventCancelEdit} okText="Yes" cancelText="No">
								<Button disabled={buttonDisabled} >Delete</Button>
							</Popconfirm>
						</div>
					</Col>
				</Row>
		)
		const rowSelection = {
			onSelect: (selectedRowKeys, selections , selectedRows) => {
				this.props.dispatch({type:"CURRENT_TABLE_SELECTION", selectionId: selectedRowKeys.id})
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
					dataSource={this.props.fetchresult}
					rowClassName="test"
					onRowClick={console.log(this)}
					columns={columns}
					selectable={false}
					size="large"
					type="radio"
					loading={this.props.uiInProgress}
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

export default connect(
	state => {
		return {
			fetchresult: state.freducer.fetchpersonresult,
			uiInProgress: state.freducer.uiInProgress,
			currentTableSelection: state.freducer.currentTableSelection,
		}
	}
)(ListComponent)