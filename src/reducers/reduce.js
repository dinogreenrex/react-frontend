const freducer = (state = {
    toggleform: false,
    isUserLoggedIn: true,
    loginButtonActive: true,
    menuItemActive: 'home',
    activeTabKey: '1',
    tabpanels: [
    ],
    showRecordForm: null,
    toolbarAction: null,
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
        /*SUBMIT EDITED RECORD */

        case 'SUBMIT_PERSONADDRESS_RECORD_EDIT':
            return Object.assign({}, state, {
                fetchInProgress: true
            })
        case 'SUBMIT_PERSONADDRESS_RECORD_EDIT_SUCCESS':
            return Object.assign({}, state, {
                fetchInProgress: false,
                abstractResult: action.result,
            })
        case 'SUBMIT_PERSONADDRESS_RECORD_EDIT_ERROR':
            return Object.assign({}, state, {
                fetchInProgress: false,
                abstractError: action.error,
            })
      /* ABSTRACT CALL TO SERVER */
        case 'ABSTRACT_FETCH':
            return Object.assign({}, state, {
                fetchInProgress: true
            })
        case 'ABSTRACT_FETCH_SUCCESS':
            return Object.assign({}, state, {
                fetchInProgress: false,
                abstractResult: action.result,
            })
        case 'ABSTRACT_FETCH_ERROR':
            return Object.assign({}, state, {
                fetchInProgress: false,
                abstractError: action.error,
            })
      /* END OF ABSTRACT CALL TO SERVER */
      /* FETCH PERSON_ADDRESS */

      /* END OF FETCH SINGLE ITEM */
        case 'MENU_ITEM_ACTIVE':
            return Object.assign({}, state, {
                menuItemActive: action.name,
            })
        case 'SELECTED_ROW':
            return Object.assign({}, state, {
                selectedRow: action.row,
            })

        case 'EDIT_RECORD':
            return Object.assign({}, state, {
                showRecordForm: true,
                selectedRecordId: action.record,
                toolbarAction: 'edit',
            })
        case 'DELETE_RECORD':
            return Object.assign({}, state, {
                showRecordForm: false,
                toolbarAction: 'delete',
            })
        case 'INSERT_RECORD':
            return Object.assign({}, state, {
                showRecordForm: true,
                toolbarAction: 'insert',
            })

        default:
            return state
    }
}

export default freducer