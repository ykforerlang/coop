const prefix = 'login_'
export default (state = {
    loginSuc: false,
}, action) => {
    switch (action.type) {
        case `${prefix}loginSuc`: {
            return {
                ...state,
                loginSuc: true,
            }
        }
        default: {
            return state
        }
    }
}
