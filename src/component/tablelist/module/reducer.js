const prefix = 'tablelist_'
export default (state = {}, action) => {
    switch (action.type) {
        case `${prefix}initSuc`: {
            return {
                ...state,
                list: action.list,
            }
        }
        default: {
            return state
        }
    }
}
