const prefix = 'profile'
export default (state = {}, action) => {
    switch (action.type) {
        case `${prefix}_updateSuc`: {
            return {
                ...state,
                updateSuc: true,
            }
        }
        default: {
            return state
        }
    }
}
