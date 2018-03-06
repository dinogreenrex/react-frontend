import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Content from './MainContent';

const Header = () => (
    <div className="mainpage-header">
        <p>WellCome to the mothership</p>
        <p>Posibly add a breadcrumps with a home button</p>
    </div>
)

export default Header;