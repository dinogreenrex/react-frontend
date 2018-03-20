import React ,{Component} from 'react';
import Address from '../../containers/PersonAddress'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import Relations from '../../containers/PersonRelations'

let value = 1
let isAuth = 1;
const SlaveComponent = ({component: Component, ...rest}) =>(
    <Route
        {...rest}
        render = {props =>
        isAuth ? (
            <Component {...props} />
            ): (
                <Redirect to={{pathname: "/", state: {from: props.location}}} />
            )
        }
    />
)

class NewComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    let isAuth=1;
        return(
            <div>
        <Link to="/Relations1">Relations1</Link>
            <SlaveComponent isAuth='1' path="/Relations1" component={Relations} isUserAuthenticated='123'/>
            </div>
        )
    }
}


export default NewComponent;