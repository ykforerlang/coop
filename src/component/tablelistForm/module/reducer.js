const prefix = 'tablelistForm'

export default (state = {}, action) => {
    switch (action.type) {
        case `${prefix}_initSuc`: {
            return {
                ...state,
                ...action.preload,
            }
        }
        case `${prefix}_inputChange`: {
            return {
                ...state,
                [action.k]: action.v,
            }
        }
        case `${prefix}_createSuc`: {
            return {
                ...state,
                ...action.preload,
                createSuc: true,
            }
        }
        default: {
            return state
        }
    }
}
