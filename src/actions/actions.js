
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' //Same as login end
export const LOGIN_ERROR = 'REQUEST_POSTS'

export function login_process_start(logindata) {
    return {
        type: LOGIN_START,
        logindata
    }
}

export function logins_process_success(logindata) {
    return {
        type: LOGIN_SUCCESS,
        logindata
    }
}

export function login_process_error(error) {
    return {
        type: LOGIN_ERROR,
        error
    }
}


