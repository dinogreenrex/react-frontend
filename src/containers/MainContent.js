import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './LoginLink';
import PropTypes from 'prop-types'

class Content extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

    }

    render() {
        return (
            <div className="mainpage-main-content">
                <h2>Main Content</h2>
            </div>

        )
    }
}

export default Content;