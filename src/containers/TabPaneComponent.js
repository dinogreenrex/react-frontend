import React, {Component} from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class TabPaneComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>Tab pane component</p>
            </div>
        )
    }
}

export default TabPaneComponent