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
        const personParams = {
          url: 'http://localhost/api/koalas',
          columns: PersonListColumns,
          abstractResult: this.props.abstractResult ? this.props.abstractResult : null,
          abstractError: this.props.abstractError ? this.props.abstractError : null,
          fetchInProgress: this.props.fetchInProgress,
          currentRecord: this.props.currentRecord ? this.props.currentRecord : null,
          dispatch: this.props.dispatch,
        }
        const personAddressParams = {
          url: 'http://localhost/api/PersonAddress',
          columns: PersonAddressListColumns,
          abstractResult: this.props.abstractResult ? this.props.abstractResult : null,
          abstractError: this.props.abstractError ? this.props.abstractError : null,
          fetchInProgress: this.props.fetchInProgress,
          currentRecord: this.props.currentRecord ? this.props.currentRecord : null,
          dispatch: this.props.dispatch,
        }
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
                   render={() => <PersonAddressList {...personAddressParams} />}
                />

                <Route exact
                   path="/TabTests"
                   render={() => <PersonList {...personParams} />}
                />
            </div>
        )
    }
}
export default withRouter(connect(
  state => {
    return {
      abstractResult: state.freducer.abstractResult,
      abstractError: state.freducer.abstractError,
      fetchInProgress: state.freducer.fetchInProgress,
    }
  }
)(ContentContainer))
