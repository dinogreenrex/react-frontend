import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Button} from 'antd'
import 'antd/lib/menu/style/index.css'

import PropTypes from 'prop-types';


class SidepaneMenu extends React.Component {
	constructor(props){
		super(props);
		console.log(this)

	}

	render() {
		return (
			<div>
				<Menu style={{width: 150}} mode="vertical">
					<Menu.Item> <Link to="/"> Home </Link></Menu.Item>
					<Menu.Item> <Link to="/Person"> Person </Link> </Menu.Item>
					<Menu.Item> <Link to="/Address"> Address </Link></Menu.Item>
					<Menu.Item> <Link to="/Relations"> Relations </Link></Menu.Item>
					<Menu.Item> <Link to="/TabTests"> Tabs</Link></Menu.Item>
				</Menu>
			</div>
		)
	}
}

SidepaneMenu.propTypes = {
	menuItemActive: PropTypes.bool
}
export default SidepaneMenu
