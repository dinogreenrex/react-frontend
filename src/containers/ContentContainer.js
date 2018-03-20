import React, {Component} from 'react' ;
import Box from 'grommet/components/Box'
import {Switch} from 'react-router-dom';
import Person from './Person';
import PersonAddress from './PersonAddress'
import Relations from './PersonRelations'
import {connect} from 'react-redux'
class ContentContainer extends React.Component {
    constructor(props)
    {
        super(props)

    }

    render(){
       console.log(this.props.match)
        return (
            <Box>
            </Box>
        )
    }
}
export default connect()(ContentContainer)
