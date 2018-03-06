import React, {Component} from 'react';

class Person extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="mainpage-main-content">
                <h2>Persons List</h2>
            </div>
        )
    }
}

export default Person;