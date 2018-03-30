const PersonReducer = (state = {
	currentRecord: null,
	personList: null,

} , action) => {
	switch(action.type) {
		case 'FETCH_PERSON_ADDRESS':
			return Object.assign({}, state,{
				isListLoading: true,
			})
		case 'FETCH_PERSON_SUCCESS':
			return Object.assign({}, state,{
				isListLoading: false,
				personList: action.result,
			})
		case 'FETCH_PERSON_ERROR':
			return Object.assign({}, state,{
				isListLoading: false,
				personListError: action.error,
			})
		case 'CURRENT_RECORD_SELECTION':
			return Object.assign({}, state, {
				currentRecord: action.selectedRecord,
			})
		default:
			return state;
	}
}

export default PersonReducer

