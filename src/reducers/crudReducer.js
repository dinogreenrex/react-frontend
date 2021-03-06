
export function crudReducer(model) {
	return (state = {
		selectedRecordId: null,
		listRecords: null,
		selectedRecord: null,
		selectedRecordError: null,
		isRecordLoading: null,
		toolbarAction: null,
		showRecordForm: false,

	} , action) => {
		switch(action.type) {
			case `FETCH_${model}`:
				return Object.assign({}, state,{
					isListLoading: true,
				})
			case 'FETCH_' + model + '_SUCCESS':
				return Object.assign({}, state,{
					isListLoading: false,
					listRecords: action.result,
				})
			case `FETCH_${model}_ERROR`:
				return Object.assign({}, state,{
					isListLoading: false,
					listRecords: action.error,
				})
			case `${model}_RECORD_SELECTION`:
				return Object.assign({}, state, {
					selectedRecordId: action.selectedRecordId,
				})
			case `FETCH_${model}_SINGLE`:
				return Object.assign({}, state,{
					isRecordLoading: true,
				})
			case `FETCH_${model}_SINGLE_SUCCESS`:
				return Object.assign({}, state,{
					isRecordLoading: false,
					selectedRecord: action.result,
				})
			case `FETCH_${model}_SINGLE_ERROR`:
				return Object.assign({}, state,{
					isRecordLoading: false,
					selectedRecordError: action.error,
				})
			case `EDIT_${model}`:
				return Object.assign({}, state,{
					editInProgress: true,
					component: 'edit',
				})
			case `EDIT_${model}_SUCCESS`:
					const editedRecord = action.result;
					const cloneListRecords = state.listRecords.slice();
					cloneListRecords.map((item) => {
						if(item.id === editedRecord.id){
							item.street = editedRecord.street,
							item.city = editedRecord.city,
							item.country = editedRecord.country,
							item.postalcode = editedRecord.postalcode
						}
					})
				return Object.assign({}, state,{
					editInProgress: false,
					listRecords: cloneListRecords
				})
			case `EDIT_${model}_ERROR`:
				return Object.assign({}, state,{
					editInProgress: false,
					listRecordsError: action.error,
				})
			case `INSERT_${model}`:
				return Object.assign({}, state, {
					showRecordForm: true,
					component: 'insert',
					selectedRecord: null,
					selectedRecordId: null,
				})
			case `INSERT_${model}_SUCCESS`:
				let newListOfRecords = state.listRecords.slice();
				newListOfRecords = newListOfRecords.concat(action.result);
				return Object.assign({}, state, {
					showRecordForm: true,
					listRecords: newListOfRecords
				})
			case `INSERT_${model}_RECORD_ERROR`:
				return Object.assign({}, state, {
					showRecordForm: true,
					insertRecordError: action.error,
				})
			case `DELETE_${model}`:
				return Object.assign({}, state, {
					showRecordForm: true,
					component: 'delete',
				})
			case `DELETE_${model}_SUCCESS`:
				let listRecords = state.listRecords.slice();
				let removedRec = null;
				listRecords.map(item =>
					item.id === action.result ? removedRec = item : removedRec = null

			)
				let index = listRecords.indexOf(removedRec);
				listRecords.splice(index, 1);
				return Object.assign({}, state, {
					showRecordForm: false,
					component: 'null',
					listRecords: listRecords,
				})
			case `DELETE_${model}_ERROR`:
				return Object.assign({}, state, {
					showRecordForm: false,
					deleteRecordError: action.error,
					component: 'null',
				})
			case 'NULL_SELECTIONS':
				return Object.assign({}, state, {
					component: null,
					selectedRecord: null,
					selectedRecordId: null,
				})
			default:
				return state;
		}
	}

}