import React, {Component} from 'react';
import NewComponent from '../components/presentational/IsRouteAuthenticated'
import {Route, Link } from 'react-router-dom'

import SidepaneMenu from '../components/presentational/Sidepane-Menu'

class Sidepane extends React.Component {
    constructor(props){
        super(props);
        console.log(this)
    }
    render() {
        return (
                <div>
                    <SidepaneMenu />
                </div>

        )
    }
}

export default Sidepane