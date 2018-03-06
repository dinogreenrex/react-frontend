let id = 0;
export const loginstate = (state) => {
    return {
        type: 'LOGIN',
        id: id++,
        state
    }
}



