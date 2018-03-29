import React, {Component} from 'react' ;
import Person from './Person';
import PersonAddress from './PersonAddress'
import Relations from './PersonRelations'
import Address from './PersonAddress'
import {connect} from 'react-redux'
import {Route,withRouter} from 'react-router-dom'
import AuthRoute from '../components/presentational/AuthRoute'
import PersonContainer from './PersonContainer'
import ListComponent from './ListComponent'
import {Row,Col} from 'antd'
class ContentContainer extends React.Component {
    constructor(props)
    {
        super(props)

    }

    render(){
       console.log(this.props.match)
        let isAuth = 1;
        return (
            <div className="content" style={{width: '100%'}}>
                <Route exact
                       path="/Relations"
                       component={Relations} />
                <AuthRoute
                    exact
                    path="/Person"
                    isAuth={isAuth}
                    component={PersonContainer}
                />
                <Route exact
                       path="/Address"
                       component={Address} />
                <Route exact
                       path="/TabTests"
                       component={ListComponent} />
            </div>
        )
    }
}
export default withRouter(connect()(ContentContainer))
