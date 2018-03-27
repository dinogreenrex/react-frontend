import React, {Component} from 'react';
import { Table } from 'antd';
import axios from 'axios';

class ListComponent extends React.Component {
    constructor(props){
        super(props)
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
   /* <Table dataSource={tableData} columns={columns} selectable={true} size="large"
loading={this.props.uiInProgress} onRowDoubleClick={()=>{console.log(this)}} />*/


        return (

        <Table
            rowKey={record => record.id}
            dataSource={this.props.tabledata}
            columns={columns}
            selectable={true}
            size="large"
            loading={this.props.uiInProgress}
            onRow={(record) => {
                return {
                    onClick: () => {this.props.newTabWithRecord(record)},       // click row
                    onMouseEnter: () => {},  // mouse enter row
                };
                }} />


        );
    }
}

export default ListComponent