import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Address from '../../containers/PersonAddress'
import Relations from '../../containers/PersonRelations'
import Person from '../../containers/Person'
import { connect } from 'react-redux'


class SideBarNav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="sidebar-nav">
                <Switch>
                    <Route path="/Person" component={Person}  />
                    <Route  path="/Address" component={Address} />
                    <Route  path="/Relations" component={Relations}/>
                </Switch>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/Person">Person</Link></li>
                    <li><Link to="/Address" >Address</Link> </li>
                    <li><Link to="/Relations">Relations</Link> </li>
                </ul>
            </div>
        )
    }
}

export default SideBarNav;