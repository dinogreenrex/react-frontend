import React, {Component} from 'react' ;
import Person from './Person';
import Relations from './PersonRelations'
import PersonAddressList from './PersonAddressList'
import {connect} from 'react-redux'
import {Route,withRouter} from 'react-router-dom'
import AuthRoute from '../components/presentational/AuthRoute'
import PersonContainer from './PersonContainer'
import PersonList from './PersonList'
import {PersonAddressListColumns, PersonListColumns} from '../components/ListColumnDefinition'
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
                   render={() => <PersonAddressList columns={PersonAddressListColumns} />}
                />

                <Route exact
                   path="/TabTests"
                   render={() => <PersonList columns={PersonListColumns}/>}
                />
            </div>
        )
    }
}
export default withRouter(connect()(ContentContainer))
