import React, {Component} from 'react';
import { Segment,Table, Item, Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import {connect} from 'react-redux'

class Person extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
            console.log("Component Did Mount")
    }
    componentWillMount(){
        console.log('ComponentWillMount')
    }
    shouldComponentUpdate(){
        return 0===0;
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentDidMount(){
        //fetching ... reducer
        console.log('Component Did Mount')
    }
    componentWillUpdate(){
        console.log('ComponentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render(){
        const itemrecord = this.props.editrecord ? this.props.editrecord : null ;
        const personlist =
            <Form.Group>
                <Form.Input id='fname' label="First Name"
                            placeholder={this.props.editrecord ? itemrecord.fname : "First Name"}
                            defaultValue={this.props.editrecord ? itemrecord.fname : null} />
                <Form.Input id='lname' label="Last Name"
                            placeholder={this.props.editrecord ? itemrecord.lname : "Last Name"}
                            defaultValue={this.props.editrecord ? itemrecord.lname : null}/>
                <Form.Input id='height' label="Height "
                            placeholder={this.props.editrecord ? itemrecord.height : "Height"}
                            defaultValue={this.props.editrecord ? itemrecord.height : null} />
                <Form.Input id='kilos' label="Kilograms"
                            placeholder={this.props.editrecord ? itemrecord.kilograms : "Kilograms"}
                            defaultValue={this.props.editrecord ? itemrecord.kilograms : null} />
                <Button type="submit">Submit</Button>
            </Form.Group>;

        const SubmitForm = (e) => {
            e.preventDefault;
            console.log(this.props);
            console.log('-===========');

            let fname,lname,height,kilograms;
            let updateData;
            if(itemrecord) {
                this.props.updateSingleRecord(updateData = {
                    selectedRecord: {
                        id: itemrecord.id,
                    },
                    persondata: {
                        id: itemrecord.id,
                        fname: e.currentTarget.fname.value,
                        lname: e.currentTarget.lname.value,
                        height: e.currentTarget.height.value,
                        kilograms: e.currentTarget.kilos.value,
                    },
                });
            }else{
                this.props.insertSingleRecord(updateData = {
                    persondata: {
                        fname: e.currentTarget.fname.value,
                        lname: e.currentTarget.lname.value,
                        height: e.currentTarget.height.value,
                        kilograms: e.currentTarget.kilos.value,
                    },
                })
            }
        }
        return (
            <Segment>
                <h1>Redirection from PersonContainer</h1>
                <Form onSubmit={SubmitForm}>
                        {personlist}
                </Form>

            </Segment>
        )
    }
}

export default Person;