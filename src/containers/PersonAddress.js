import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react'


class Address extends React.Component {
    constructor(props){
        super(props)
        let match = this.props.match
    }
    render(){

        return (
            <Segment>
                <h2>Some Addresses for persons</h2>
            </Segment>
        )
    }
}

export default Address;