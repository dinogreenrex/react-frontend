import React, {Component} from 'react';
import { connect } from 'react-redux'

class LoggedInUserContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="topbar-logged-in-user-container">

            </div>
        )
    }
}

export default connect()(LoggedInUserContainer);