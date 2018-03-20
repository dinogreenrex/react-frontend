import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'

class SidepaneMenu extends React.Component {
    constructor(props){
        super(props);
        console.log(this)
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }
    handleMenuItemClick(e,name){
        e.preventDefault();
        this.props.dispatch({type:'MENU_ITEM_ACTIVE', name: name.name})
    }
    render() {
        let activeItem = this.props.activeItem;
        console.log(this.props.menuItemActive)
        return (
            <Menu vertical>
                <Menu.Item as={Link} to="/" > Home </Menu.Item>
                <Menu.Item as={Link} to="/Person" > Person </Menu.Item>
                <Menu.Item as={Link} to="/Address" > Address </Menu.Item>
                <Menu.Item as={Link} to="/Relations" > Relations</Menu.Item>
            </Menu>

        )
    }
}
export default connect(
    (state) => {
        return {
            menuItemActive: state.freducer.menuItemActive,
        }
    }
)(SidepaneMenu)
