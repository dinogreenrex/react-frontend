import React, {Component} from 'react';
import { Table, Button, Row, Col, Popconfirm, message,Icon } from 'antd';
import axios from 'axios';
import {connect} from 'react-redux'
import {TableToolbar} from '../components/presentational/TableToolbar'
import {SimpleForm} from '../components/presentational/SimpleForm'

export class AbstractList extends React.Component {

	/**
	 * model
	 * url
	 *
	 * @param props
	 */

  constructor(props){
    super(props)
    this.editRecord = this.editRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }
  editRecord(cRecord){
  }
  deleteRecord(cRecord){

  }

	loadData(model) {
	  this.props.dispatch(dispatch => {
		  dispatch({type: `FETCH_${model}`});
		  axios.get(this.props.url, {
		  }).then(
			  (response) => {
				  dispatch({type: `FETCH_${model}_SUCCESS`, result: response.data} );
			  },

			  (error) => {
				  dispatch({type: `FETCH_${model}_ERROR`, error: error.response.data.message })
			  }
		  )
	  })
  }
  acquireSingleRecord(model,recordId){
	  this.props.dispatch(dispatch => {
		  dispatch({type: `FETCH_${model}_SINGLE`});
		  axios.get(`${this.props.url}/${recordId}`, {
		  }).then(
			  (response) => {
				  dispatch({type: `FETCH_${model}_SINGLE_SUCCESS`, result: response.data} );
			  },

			  (error) => {
				  dispatch({type: `FETCH_${model}_SINGLE_ERROR`, error: error.response.data.message })
			  }
		  )
	  })
  }

  componentWillMount(){
	  this.loadData(this.props.model)
  }

  render(){
	  const model = this.props.model
		const EditRecordForm = '';
    const rowSelection = {
      onSelect: (selectedRowKeys, selections , selectedRows) => {
        this.props.dispatch({type:`${model}_RECORD_SELECTION`, selectedRecordId: selectedRowKeys.id});
	      this.acquireSingleRecord(model,selectedRowKeys.id);
      },
      type: 'radio',
    };
	  console.log(this.props);
    return (
      <div>
	      {this.props.activeRecord ?
	      <SimpleForm {...this.props.activeRecord} />
		      : null }
	      <TableToolbar selectedRecordId={this.props.selectedRecordId } />
        <Table
          rowKey={record=>record.id}
          rowSelection={rowSelection}
          dataSource={this.props.listRecords}
          rowClassName="test"
          columns={this.props.columns}
          selectable={false}
          size="large"
          type="radio"
          loading={this.props.fetchInProgress}

        />
      </div>


    );
  }
}
