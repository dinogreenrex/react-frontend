const freducer = (state = {
    toggleform: false,
    isUserLoggedIn: true,
    loginButtonActive: true,
    menuItemActive: 'home',
    currentTableSelection: null,
    activeTabKey: '1',
    tabpanels: [
        ],
    editPersonFormData: null

} , action) => {

    switch (action.type) {
        /*
        LOGIN_START {email: xxx, pass: xxx}
         - UI pending state
         - disable submit button
         - show spinner
        LOGIN_SUCCESS
          { name: XXX, avatar: XX }
          - hide spinner
          - enable submit button
          - add response to UI state

        LOGIN_ERROR

        PERSON_LIST_START
        PERSON_LIST_SUCCESS
        PERSON_LIST_ERROR


         */
        case 'GET_LOGIN':
            return Object.assign({}, state, {
                processinglogin: true,
            })

        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                processinglogin: false,
                isUserLoggedIn: true,
                usersession: action.payload.data,
                toggleform: false,
                loginButtonActive: false,
            })

        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                processinglogin: false,
                loginerror: action.payload.data,
            })

        case 'LOGINFORM_TOGGLE':
            return Object.assign({}, state, {
                toggleform: !state.toggleform
            })

        case 'LOGOUT':
            return Object.assign({}, state, {
                isUserLoggedIn: false,
                usersession: null,
                loginButtonActive: true,
            })
        case "CURRENT_TABLE_SELECTION":
            return Object.assign({}, state, {
                currentTableSelection: action.selectionId
            })
        /* Tab Editor */
        case "INIT_TAB_PANEL":
            let tabpanel = action.initpanel;
            return Object.assign({}, state, {
                tabpanels: tabpanel
            })
        case "CHANGE_ACTIVE_TAB":
            return Object.assign({}, state, {
                activeTabKey: action.activeTabKey
            })

        /*End of Tab Editor */
        /* FETCH SINGLE PERSON FOR EDIT FORM */
        case 'FETCH_SINGLE_PERSON':
            return Object.assign({}, state, {
                uiInProgress: true,
                fetchpersonresult: false,
            })
        case 'ADD_NEW_TAB_ITEM':
            let tabulars = state.tabpanels.slice();
            let lastkey = tabulars[tabulars.length-1].key;
            let newTab = {
                title: 'Tab '+lastkey, content: null, key:  lastkey,
            }
            tabulars.push(newTab);

            return Object.assign({}, state, {
                uiInProgress: true,
                tabpanels: tabulars,
            })
        case 'FETCH_SINGLE_PERSON_SUCCESS':
            let tabs = state.tabpanels.slice();
            /*let lastkey = tabs[tabs.length-1].key;
            let newTab = {
                title: 'Tab '+lastkey, content: null, key:  lastkey,
            }
            tabs.push(newTab);*/
            return Object.assign({}, state, {
                uiInProgress: false,
                editPersonFormData: action.payload,
            })
        case 'FETCH_SINGLE_PERSON_ERROR':
            return Object.assign({}, state, {
                uiInProgress: false,
                editPersonFormError: action.error
            })
        /* END OF FETCH SINGLE PERSON FOR EDIT FORM */

        /* FETCH PERSON_ADDRESS */
        case 'FETCH_PERSON_ADDRESS':
            return Object.assign({}, state, {
                personAddressInProgress: true
            })
        case 'FETCH_PERSON_ADDRESS_SUCCESS':
            return Object.assign({}, state, {
                personAddressInProgress: false
            })
        case 'FETCH_PERSON_ADDRESS_ERROR':
            return Object.assign({}, state, {
                personAddressInProgress: false
            })
        /* END OF FETCH PERSON_ADDRESS */

        /* FETCH PERSON FOR LIST */
        case 'FETCH_PERSON':
            return Object.assign({}, state, {
                uiInProgress: true,
                fetchpersonresult: false,
            })

        case 'FETCH_PERSON_SUCCESS':
            return Object.assign({}, state, {
                uiInProgress: false,
                fetchpersonresult: action.payload
            })

        case 'FETCH_PERSON_ERROR':
            return Object.assign({}, state, {
                uiInProgress: false,
                fetchpersonresult: action.error,
            })
        /* END OF FETCH PERSON FOR LIST */

        /* FETCH SINGLE ITEM FOR EDIT */
        case 'FETCH_SINGLE_ITEM':
            let singleitem = state.fetchpersonresult.filter((item) =>
            action.itemid===item.id);
            singleitem = singleitem.pop(0)
            return Object.assign({}, state, {
                editpersonitem: singleitem

            })

        /* END OF FETCH SINGLE ITEM */
        case 'MENU_ITEM_ACTIVE':
            return Object.assign({}, state, {
                menuItemActive: action.name,
        })
        case 'SELECTED_ROW':
            return Object.assign({}, state, {
                selectedRow: action.row,
            })
        /* ADD PERSON FORM */
        case 'INSERT_PERSON':
            return Object.assign({}, state, {
                uiInProgress: true
            })
        case 'INSERT_PERSON_SUCCESS':
            let newlyInsertedPerson = state.fetchpersonresult.concat(action.payload);

            return Object.assign({}, state, {
                uiInProgress: false,
                fetchpersonresult: newlyInsertedPerson,
            })
        case 'INSERT_PERSON_ERROR':
            return Object.assign({}, state, {
                uiInProgress: false,
                insertPersonError: action.response
            })
        /*END OF ADD PERSON FORM */
        /* EDIT PERSON FORM */
        case 'UPDATE_PERSON':
            return Object.assign({}, state, {
                uiInProgress: true
            })
        case 'UPDATE_PERSON_SUCCESS':
            let newItem = state.fetchpersonresult.map(item => {
                if(item.id === action.payload.id){
                    return { ...action.payload }
                }
                return item;
            })

            return Object.assign({}, state, {
                uiInProgress: false,
                fetchpersonresult: newItem,
            })
        case 'UPDATE_PERSON_ERROR':
            return Object.assign({}, state, {
                uiInProgress: false,
                updatePersonError: action.response
            })
        /* END OF EDIT PERSON FORM */
        /*****************************/
        /* DELETE PERSON FUNCTIONS*/

        case 'DELETE_PERSON_ACTIVE':
            return Object.assign({}, state, {
                deletePersonInProgress: true
            })
        case 'DELETE_PERSON_SUCCESS':
            let itemIndex = state.fetchpersonresult.findIndex(item => item.id === action.recordid)//or use pop
            //make a new state
            //I've found the index, now i need to develop that index...
            let newItems = state.fetchpersonresult.slice()
            newItems.splice(itemIndex, 1);

            return Object.assign({}, state, {
                uiInProgress: false,
                deleteRecordId: null,
                fetchpersonresult: newItems
            })
        case 'DELETE_PERSON_ERROR':
            return Object.assign({}, state, {
                uiInProgress: false,
                deletePersonError: action.response
            })
        /*END OF DELETE PERSON FUNCTIONS */
        default:
            return state
    }
}

export default freducer