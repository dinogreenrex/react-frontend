import axios from 'axios';
import {connect} from 'react-redux'
import InitStore from '../AppStore'

export const store = InitStore();
const acquireSingleRecord = connect()((model,recordId) =>{
	store.dispatch(dispatch => {
		dispatch({type: `FETCH_${model}_SINGLE`});
		axios.get(`${this.props.url}/${recordId}`, {
		}).then(
			(response) => {
				dispatch({type: `FETCH_${model}_SINGLE_SUCCESS`, result: response.data} );
			},

			(error) => {
				dispatch({type: `FETCH_${model}_SINGLE_ERROR`, error: error.response.data.message })
			}
		)
	})
})
export const fetchSingle = connect()(acquireSingleRecord);

const deleteSingleRecord = (model,recordId) =>{
	store.dispatch(dispatch => {
		axios.delete(`${this.props.url}/${recordId}`, {
			params: {id: recordId}
		}).then(
			(response) => {
				dispatch({type: `DELETE_${model}_SUCCESS`, result: response.data} );
			},

			(error) => {
				dispatch({type: `DELETE_${model}_ERROR`, error: error.response.data.message })
			}
		)
	})
}
export const deleteSingle = connect()(deleteSingleRecord);

export const loadDataBase =(model,url) => {
	store.dispatch(dispatch => {
		dispatch({type: `FETCH_${model}`});
		axios.get(url, {
		}).then(
			(response) => {
				dispatch({type: `FETCH_${model}_SUCCESS`, result: response.data} );
			},

			(error) => {
				dispatch({type: `FETCH_${model}_ERROR`, error: error.response.data.message })
			}
		)
	})
}

