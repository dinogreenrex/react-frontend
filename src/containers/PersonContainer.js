import React, {Component} from 'react';
import Person from './Person'
import axios from 'axios'
import {connect}  from 'react-redux'
import {Icon, Label, Divider, Segment} from 'semantic-ui-react'
import {Route, Link, NavLink} from 'react-router-dom';
import HOC from '../components/HOCForEverything'
import PropTypes from 'prop-types';
import { Button, Table, Pagination,Tabs, Popconfirm, Input } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/table/style/index.css'
import 'antd/lib/pagination/style/index.css'
import 'antd/lib/tabs/style/index.css'



class PersonContainer extends React.Component {

    constructor(props){
        super(props)
        this.HandleClick = this.HandleClick.bind(this)
        this.clickeditem = null;
        this.updateSingleRecord = this.updateSingleRecord.bind(this)
        this.deletePersonRecord = this.deletePersonRecord.bind(this)
        this.insertSingleRecord = this.insertSingleRecord.bind(this)
        this.addNewTab= this.addNewTab.bind(this)
    }
    componentDidMount(){
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
        console.log("Component Did Mount")
    }
    componentWillMount(){
        console.log('ComponentWillMount')
    }
    shouldComponentUpdate(){
        return 0===0;
    }
    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps' + newProps)
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate'+this)
        return true
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    HandleClick(element,blah){

    }
    updateSingleRecord(selection = null){
        this.props.dispatch(dispatch => {
            dispatch({type: 'UPDATE_PERSON', uiInProgress: true});
            axios.put('http://localhost/api/koalas/'+selection.selectedRecord.id, {
                ...selection.persondata,
            },{
            }).then(
                (response) => {
                    dispatch({type: 'UPDATE_PERSON_SUCCESS', payload: response.data} );
                },
                (error) => {
                    dispatch({type: 'UPDATE_PERSON_ERROR', error: error.response.data.message })
                }
            )
        })
    }
    insertSingleRecord(selection = null){
        this.props.dispatch(dispatch => {
            dispatch({type: 'INSERT_PERSON'});
            axios.post('http://localhost/api/koalas', {
                ...selection.persondata,
            },{
            }).then(
                (response) => {
                    dispatch({type: 'INSERT_PERSON_SUCCESS', payload: response.data} );
                },
                (error) => {
                    dispatch({type: 'INSERT_PERSON_ERROR', error: error.response.data.message })
                }
            )
        })
    }

    deletePersonRecord(personid){
        this.props.dispatch(dispatch =>{
            dispatch({type: 'DELETE_PERSON_ACTIVE', uiInProgress: true});
            axios.delete('http://localhost/api/koalas/'+personid, {
                params: {
                    id: personid
                }
            }).then(
                (response) => {
                    dispatch({type: 'DELETE_PERSON_SUCCESS', recordid: personid} );
                    //delete person success, replace updated data in fetchresult
                },
                (error) => {
                    dispatch({type: 'DELETE_PERSON_ERROR', error: error.response.data.message })
                }
            )
        })
    }
    addNewTab(tabdata){
        console.log(tabdata);
    }
    onClick(index){
        console.log(index);
    }
    //Where to place the message status of page ?
    render() {
        console.log('render()');
        
        const filterResults = (itemid) => this.props.fetchresult ? this.props.fetchresult.filter((item) =>
            itemid===item.id): null;
        const mapFunc = item => (
            {
                key: item.id,
                fname: item.fname,
                lname: item.lname,
                height: item.height,
                kilograms: item.kilograms
            }
        )
        const   EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        function edit(key) {
            const newData = [...this.state.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target.editable = true;
                //return new data from state, call reducer on record id.
            }
        }
        function handleChange(value,recordid,column){
            const newRecords = [...this.props.fetchresult];
            const newRecord = newRecords.filter(item => recordid === item.id);
            if(newRecord){
                newRecord.editable=true;
            }
        }
        const tableData = this.props.fetchresult ? this.props.fetchresult.map(mapFunc) : null;

        function edit(key) {
            const newData = [...this.state.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target.editable = true;
                this.setState({ data: newData });
            }
        }
        function renderColumns(text, record, column) {
            return (
                <EditableCell
                    editable={record}
                    value={text}
                    onChange={value => handleChange(value, record.key, column)}
                />
            );
        }
        function handleEdit(recordid){
            console.log(recordid)
        }
        const columns = [
            {
                title: 'FName',
                dataIndex: 'fname',
                key: 'fname',
                render: (text, record) => renderColumns(text, record, 'fname'),
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


        const personlist = this.props.fetchresult ? this.props.fetchresult.map(mapFunc): null;
        let payload ; //used to pass data to form edit
        const TabPane = Tabs.TabPane;
        function tabsOnChange(key){
            console.log(key)
        }
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        const operations = <div><Button>Add</Button>  <Button>Edit</Button>  <Button>Remove</Button></div>
        return (
            <Tabs defaultActiveKey="1" type="editable-card"   tabBarExtraContent={operations}>
                <TabPane tab="Table Person" key="1" closable={false}  >

                    <Table dataSource={tableData} columns={columns} selectable={true} size="large"
                           loading={this.props.uiInProgress} onRowDoubleClick={()=>{console.log(this)}} />
                    /*also make a selection for current cell*/
                </TabPane>
                <TabPane tab="Edit form" key="2" closable={true}>

                </TabPane>
            </Tabs>


            /*
                <NavLink to={this.props.match.url +"/Add"}
                         onClick={()=>{}}>Insert New Item</NavLink>
                <Route
                    exact
                    path="/Person/Add"
                    component={HOC(Person, payload = {
                        editperson: null,
                        insertSingleRecord: this.insertSingleRecord})}
                />


                <Route
                    exact
                    path="/Person/Edit/:id"
                    component={HOC(Person, payload={
                        editrecord: this.props.editrecord,
                        updateSingleRecord: this.updateSingleRecord} )}
                />*/

        )
    }
}
/*
 <Route exact path="/Person/:Add"
 component={HOC(Person, payload = {
 editperson: null,
 insertSingleRecord: this.insertSingleRecord})}
 />
 <Route
 exact
 path="/Person/:Editid"
 component={HOC(Person, payload={
 editrecord: this.props.editrecord,
 updateSingleRecord: this.updateSingleRecord} )}
 />
 <Route
 exact
 path="/Person/:Deleteid"
 component={HOC(Person, payload={
 editrecord: this.props.editrecord,
 deleteSingleRecord: this.deletePersonRecord()} )}
 />
 */
/*PersonContainer.propTypes = {
    uiInProgress: PropTypes.bool,
    selectedRow: PropTypes.object,
    updatedPersonRecord: PropTypes.object,
    editrecord: PropTypes.object,
}*/

export default connect(
    state => {
        return {
            fetchresult: state.freducer.fetchpersonresult,
            uiInProgress: state.freducer.uiInProgress,
            selectedRow: state.freducer.selectedRow,
            updatedPersonRecord: state.freducer.updatedPersonRecord,
            editrecord: state.freducer.editpersonitem,
        }
    }
)(PersonContainer);