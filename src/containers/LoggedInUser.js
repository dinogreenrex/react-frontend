import React , {Component} from 'react';

class LoggedInUser extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>Logged in as {this.props.usersession.name}</p>
                <p>API Token {this.props.usersession.api_token}</p>
            </div>
        )
    }
}

export default LoggedInUser;