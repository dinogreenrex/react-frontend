import React, {Component} from 'react' ;
import Relations from './PersonRelations'
import {connect} from 'react-redux'
import {Route,withRouter} from 'react-router-dom'
import {PersonAddressListColumns, PersonListColumns} from '../components/ListColumnDefinition'
import {Row,Col} from 'antd'
import {AbstractList} from './AbstractList'
import PropTypes from 'prop-types'

class ContentContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  crudSettings() {
    return {
      Person: {
        model: 'Person',
        url: 'http://localhost/api/person',
        columns: PersonListColumns,
        editBaseUrl: 'http://localhost/api/person', // + / {recordid}
      },
      PersonAddress: {
        model: 'PersonAddress',
        url: 'http://localhost/api/PersonAddress',
        columns: PersonAddressListColumns,
        editBaseUrl: 'http://localhost/api/PersonAddress', // + / {recordid}
        tabs: [{
          tab: 'Person Addresses ',
          key: 1,
	        content: 'test',
        }]
      }
    }
  }

  render(){

    const crudSettings = this.crudSettings()
    const commonSettings = {
      dispatch: this.props.dispatch
    }

//              <SimpleForm selectedRecordId={this.props}/>
    console.log(this.props.match)
    let isAuth = 1;
    return (
      <div className="content" style={{width: '100%'}}>
        <Route exact
               path="/Relations"
               component={Relations} />


        <Route exact
               path="/Address"
               render={() => <AbstractList
                 {...crudSettings.PersonAddress}
                 {...this.props.PersonAddress}
                 {...commonSettings}
               />}
        />

        <Route exact
               path="/TabTests"
               render={() => <AbstractList
                 {...crudSettings.Person}
                 {...this.props.Person}
                 {...commonSettings}
               />}
        />
      </div>
    )
  }
}
ContentContainer.propTypes = {
  Person: PropTypes.object,
  PersonAddress: PropTypes.object,
  JingaForms: PropTypes.object.isRequired,
}

export default withRouter(connect(
  state => {
    return {
      Person: state.personReducer,
      PersonAddress: state.personAddressReducer,
      JingaForms: state.jingaForms,
    }
  }
)(ContentContainer))
