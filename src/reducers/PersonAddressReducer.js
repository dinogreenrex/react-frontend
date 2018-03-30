const PersonAddressReducer = (state = {
	currentRecord: null,
	personAddressList: null,

} , action) => {
			switch(action.type) {
				case 'FETCH_PERSON_ADDRESS':
					return Object.assign({}, state,{
						isListLoading: true,
				})
				case 'FETCH_PERSON_ADDRESS_SUCCESS':
					return Object.assign({}, state,{
						isListLoading: false,
						personAddressList: action.result,
					})
				case 'FETCH_PERSON_ADDRESS_ERROR':
					return Object.assign({}, state,{
						isListLoading: false,
						personAddressListError: action.error,
					})
				case 'CURRENT_RECORD_SELECTION':
					return Object.assign({}, state, {
						currentRecord: action.selectedRecord,
					})
				default:
					return state;
			}
}

export default PersonAddressReducer

