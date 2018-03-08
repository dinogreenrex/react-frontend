const freducer = (state = {
    formactive: false,
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
                loginstart: true,
            })

        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isUserLoggedIn: true,
                username: action.payload.data.email,
            })

        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                loginerror: action.loginerror
            })

        case 'LOGINFORM_TOGGLE':
            return Object.assign({}, state, {
                formactive: !state.formactive
            })


        default:
            return state
    }
}

export default freducer