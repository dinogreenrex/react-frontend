import React, {Component} from 'react';
import SidebarNav from '../components/presentational/SidebarNav'

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="sidebar">
                <SidebarNav />
            </div>

        )
    }
}

export default Sidebar