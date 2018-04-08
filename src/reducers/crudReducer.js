
export function crudReducer(model) {
	return (state = {
		selectedRecordId: null,
		listRecords: null,
		selectedRecord: null,
		isRecordLoading: null,

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
					selectedRecord: action.error,
				})
			case `EDIT_PERSONADDRESS_SINGLE_RECORD`:
				return Object.assign({}, state,{
					editInProgress: true,
				})
			case `EDIT_PERSONADDRESS_SINGLE_RECORD_SUCCESS`:
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
			case `EDIT_PERSONADDRESS_SINGLE_RECORD_ERROR`:
				return Object.assign({}, state,{
					editInProgress: false,
					listRecordsError: action.error,
				})

			default:
				return state;
		}
	}

}