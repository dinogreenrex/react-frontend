import React, {Component} from 'react'
import { Tabs } from 'antd';
import {connect} from 'react-redux'
import ListComponent from './PersonList';
import {HOC1} from '../components/HOCForEverything'
import axios from 'axios';
import FormComponent from '../components/FormComponent'
import TabPaneComponent from './TabPaneComponent'

/*Start*/
class JingaTab extends React.Component {
    constructor(props) {
        super(props);
        this.addNewTabWithRecord = this.addNewTabWithRecord.bind(this);
        this.initFirstTabPanel = this.initFirstTabPanel.bind(this);
    }
    componentDidMount(){

    }

    componentWillMount(){
        this.props.fetchresult ? null :
            this.props.dispatch(dispatch => {
                dispatch({type: 'FETCH_PERSON', uiInProgress: true});
                axios.get('http://localhost/api/koalas', {
                }).then(
                    (response) => {
                        dispatch({type: 'FETCH_PERSON_SUCCESS', payload: response.data} );
                    },

                    (error) => {
                        dispatch({type: 'FETCH_PERSON_ERROR', error: error.response.data.message })
                    }
                )
            })

    }
    componentWillReceiveProps(nextProps){
        console.log("Component will receive props")
    }
    onChange = (activeKey) => {
        this.props.dispatch({type: "CHANGE_ACTIVE_TAB", activeTabKey: activeKey });
    }
    onEdit = (targetKey, action) => {
        console.log(targetKey, action);
    }
    initFirstTabPanel(paneldata){

    }

    remove = (targetKey) => {
        let activeKey = this.props.activeTabKey;
        let lastIndex;
      /*  this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });*/
    }

    addNewTabWithRecord(record){
        let data;
        let lastkey = this.props.panels[this.props.panels.length-1].key;
        this.props.dispatch(dispatch => {
            dispatch({type: 'FETCH_SINGLE_PERSON', uiInProgress: true });
            axios.get('http://localhost/api/koalas/'+record.key, {
            }).then(
                (response) => {
                    dispatch({type: 'FETCH_SINGLE_PERSON_SUCCESS', payload: response.data})

                },
                (error) =>{
                    dispatch({type: 'FETCH_SINGLE_PERSON_ERROR', error: error.response.data})
                }
            )
        })
        this.props.dispatch({type:'ADD_NEW_TAB_ITEM'});

    }
    render() {

        let panels = this.props.panels ? this.props.panels : null;
        /* List component in tab */
        const TabPane = Tabs.TabPane;

        let dataforpanel = {
            tabledata: this.props.fetchresult,
            newTabWithRecord: this.addNewTabWithRecord,
        }
        const HocListComponent = HOC1(ListComponent, dataforpanel);
        const panes = [
            { title: 'Tab 1', content: HocListComponent, key: '1' },

        ];
        let activeKey="1";
        return (
            <Tabs
                onChange={this.onChange}
                activeKey={this.props.activeTabKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
            </Tabs>
        );
    }
}


export default connect(
    state => {
        return {
           activeTabKey: state.freducer.activeTabKey,
           panels: state.freducer.tabpanels,
           editPersonFormData: state.freducer.editPersonFormData,
           fetchresult: state.freducer.fetchpersonresult,
           uiInProgress: state.freducer.uiInProgress,
        }
    }
)(JingaTab);