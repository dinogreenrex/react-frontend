
export function crudReducer(model) {
	return (state = {
		selectedRecordId: null,
		listRecords: null,
		activeRecord: null,
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
					activeRecord: action.result,
				})
			case `FETCH_${model}_SINGLE_ERROR`:
				return Object.assign({}, state,{
					isRecordLoading: false,
					activeRecord: action.error,
				})
			default:
				return state;
		}
	}

}