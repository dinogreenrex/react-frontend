import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import Address from '../containers/PersonAddress'
import Relations from '../containers/PersonRelations'
import PersonContainer from '../containers/PersonContainer'
import Person from '../containers/Person'
import AuthRoute from './presentational/AuthRoute'
import {connect} from 'react-redux'
import App1 from '../App'
import Paragraph from 'grommet/components/Layer';
import Box from 'grommet/components/Box'




class RouterMain extends React.Component {
    constructor(props){
        super(props);
        console.log("Router" + this.props);
    }

    render() {
        let isAuth=this.props.isUserLoggedIn;
        return (
                <Router>
                <div>
                        <Route
                            path="/"
                            component={App1} />

                        <Route exact
                               path="/Relations"
                               component={Relations} />

                        <AuthRoute
                            path="/Person"
                            isAuth={isAuth}
                            component={PersonContainer}
                        />

                        <Route exact
                               path="/Address"
                               component={Address} />

                </div>
                </Router>
        )
    }
}
export default connect(
    (state) => {
        return {
            isUserLoggedIn: state.freducer.isUserLoggedIn
        }
    }
)(RouterMain);