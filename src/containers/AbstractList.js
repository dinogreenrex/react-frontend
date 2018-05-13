import React, {Component} from 'react';
import { Table, Button, Row, Col, Popconfirm, message,Icon, Tabs } from 'antd';
import axios from 'axios';
import {connect} from 'react-redux'
import TableToolbar from '../components/presentational/TableToolbar'
import {SingleRecordForm} from '../components/presentational/SingleRecordForm'
import PropTypes from 'prop-types'
import {AbstractTable} from '../components/AbstractTable'
import {AbstractTableToolbar} from '../components/AbstractTableToolbar'
import {loadDataBase} from '../components/datastore/storageUtility'
class AbstractfulList extends React.Component {

	constructor(props){
		super(props)
	}

	componentDidMount(){
		loadDataBase(this.props.model,this.props.url)
	}

	render(){
		return (
			/*
			I have a base url of localhost/api/${model}
			 */
			<div>

				<AbstractTableToolbar />
				<AbstractTable records={this.props.listRecords} columns={this.props.columns} loading={this.props.fetchInProgress} />
			</div>


		);
	}
}

AbstractfulList.propTypes = {
	model: PropTypes.string.isRequired,
	selectedRecord: PropTypes.object,
	selectedRecordId: PropTypes.number,
	columns: PropTypes.array.isRequired,
	url: PropTypes.string.isRequired,
	listRecords: PropTypes.array,
	fetchInProgress: PropTypes.bool,
}

export const AbstractList = connect()(AbstractfulList);