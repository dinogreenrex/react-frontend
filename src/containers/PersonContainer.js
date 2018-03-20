import React, {Component} from 'react';
import Person from './Person'
import axios from 'axios'
import {connect}  from 'react-redux'
import { Button, Icon, Label, Menu, Table, Divider, Segment} from 'semantic-ui-react'
import {Route, Link, NavLink} from 'react-router-dom';
import HOC from '../components/HOCForEverything'
import PropTypes from 'prop-types';


class PersonContainer extends React.Component {

    constructor(props){
        super(props)
        this.HandleClick = this.HandleClick.bind(this)
        this.clickeditem = null;
        this.updateSingleRecord = this.updateSingleRecord.bind(this)
        this.deletePersonRecord = this.deletePersonRecord.bind(this)
        this.insertSingleRecord = this.insertSingleRecord.bind(this)
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
    //Where to place the message status of page ?
    render() {
        console.log('render()');
        
        const filterResults = (itemid) => this.props.fetchresult ? this.props.fetchresult.filter((item) =>
            itemid===item.id): null;

        const mapFunc = item => (
            <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.fname}</Table.Cell>
                <Table.Cell>{item.lname}</Table.Cell>
                <Table.Cell>{item.height}</Table.Cell>
                <Table.Cell>{item.kilograms}</Table.Cell>
                <Table.Cell>
                    <NavLink
                        to={this.props.match.url +"/Edit/"+item.id}
                        onClick={()=> this.props.dispatch(
                            {type:"FETCH_SINGLE_ITEM", itemid: item.id})
                        }>Edit</NavLink>
                    <NavLink to={this.props.match.url +"/Delete/"+item.id}
                             onClick={()=>this.deletePersonRecord(item.id)
                             }>Delete</NavLink>
                </Table.Cell>
            </Table.Row>
        )
        const personlist = this.props.fetchresult ? this.props.fetchresult.map(mapFunc): null;
        let payload ; //used to pass data to form edit

        const tableHeaderCell =
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>FName</Table.HeaderCell>
                    <Table.HeaderCell>LName</Table.HeaderCell>
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.HeaderCell>Kilograms</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        ;

        return (
            <Segment loading={this.props.uiInProgress ? true : false}>
                <NavLink to={this.props.match.url +"/Add"}
                         onClick={()=>{}}>Insert New Item</NavLink>
                <Route
                    exact
                    path="/Person/Add"
                    component={HOC(Person, payload = {
                        editperson: null,
                        insertSingleRecord: this.insertSingleRecord})}
                />
                <Table selectable onClick={console.log(this)}>
                        {tableHeaderCell}
                    <Table.Body>
                        {personlist}
                    </Table.Body>
                </Table>
                <Route
                    exact
                    path="/Person/Edit/:id"
                    component={HOC(Person, payload={
                        editrecord: this.props.editrecord,
                        updateSingleRecord: this.updateSingleRecord} )}
                />
            </Segment>
        )
    }
}

PersonContainer.propTypes = {
    fetchresult: PropTypes.array,
    uiInProgress: PropTypes.bool,
    selectedRow: PropTypes.object,
    updatedPersonRecord: PropTypes.object,
    editrecord: PropTypes.object,
}

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