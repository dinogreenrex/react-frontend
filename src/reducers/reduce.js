const freducer = (state = 0 , action) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                {
                    id: action.id,
                    username: action.state.username,
                    password: action.state.password,
                    loading: true,
                }
            ]

        case 'LOGINFORM_ACTIVE':
            if(state.formactive){
                return (
                    Object.assign({}, state, {
                        formactive: !state.formactive,
                    }))
            }else {
                return (
                    Object.assign({}, state, {
                        formactive: !action.formactive,
                    }))
            }
        case 'LOGOUT':
            return [
                ...state,
                {
                    id: action.id,
                    username: '',
                    password: '',
                    loading: false,
                    //TODO clear state
                }
            ]
        case 'MAIN_CONTENT_HIDDEN':
            return (
                Object.assign({},state, {
                    navMenuActive: action.navMenuActive
                })
            )
        default:
            return state
    }
}

export default freducer