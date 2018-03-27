import React, {Component} from 'react';


class Address extends React.Component {
    constructor(props){
        super(props)
        let match = this.props.match
    }
    render(){

        return (
            <div>
                <h2>Some Addresses for persons</h2>
            </div>
        )
    }
}

export default Address;