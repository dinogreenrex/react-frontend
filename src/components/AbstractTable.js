import React, {Component} from 'react';
import { Table, Button, Row, Col, Popconfirm, message,Icon, Tabs } from 'antd';
import {connect} from 'react-redux';

class AntdTableBase extends Component {
	constructor(props){
		super(props);
		this.rowSelection = this.rowSelection.bind(this);
	}
	rowSelection=()=> {
			return {
				onSelect: (selectedRowKeys, selections, selectedRows) => {
					this.props.dispatch({type: `${this.props.model}_RECORD_SELECTION`, selectedRecordId: selectedRowKeys.id});
				},
				type: 'radio',
			}
	}
	render(){

		return (
			<Table
				rowKey={record=>record.id}
				rowSelection={this.rowSelection()}
				dataSource={this.props.records}
				rowClassName="test"
				columns={this.props.columns}
				selectable={false}
				size="large"
				loading={this.props.loading}
			/>
		)
	}
}
export const AbstractTable = connect(state => {
	return {

	}
})(AntdTableBase)