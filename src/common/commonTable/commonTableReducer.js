export default function commonTableReducer(typePrefix, ownReducer) {
    return function reducer(state = {}, action) {
        if (ownReducer && typeof ownReducer === 'function') { // give developer a chance to provide their own reducer handle
            const newState = ownReducer(state, action)
            if (!newState) {
                console.error('your reducer should not return null or undefined')
                return state
            }

            if (newState !== state) { // state has changed
                return newState
            }
        }

        switch (action.type) {
            case `${typePrefix}initSuc`: {
                const { list, total } = action
                return {
                    ...state,
                    list,
                    total
                }
            }
            case `${typePrefix}onCreatedAtChange`: {
                const { createdAt } = action
                return {
                    ...state,
                    createdAt
                }
            }
            case `${typePrefix}onStatusChange`: {
                const { status } = action
                return {
                    ...state,
                    status
                }
            }
            case `${typePrefix}onTokenChange`: {
                const { tokenId } = action
                return {
                    ...state,
                    tokenId
                }
            }
            case `${typePrefix}onIdCardAuthStatusChange`: {
                const { idCardAuthStatus } = action
                return {
                    ...state,
                    idCardAuthStatus
                }
            }
            case `${typePrefix}onEmailStatusChange`: {
                const { emailStatus } = action
                return {
                    ...state,
                    emailStatus
                }
            }
            case `${typePrefix}onDirectChange`: {
                const { direct } = action
                return {
                    ...state,
                    direct
                }
            }
            case `${typePrefix}onKeywordChange`: {
                const { keyword } = action
                return {
                    ...state,
                    keyword
                }
            }
            case `${typePrefix}onMobileChange`: {
                const { mobile } = action
                return {
                    ...state,
                    mobile
                }
            }
            case `${typePrefix}getUserid`: {
                const { id } = action
                return {
                    ...state,
                    id
                }
            }
            case `${typePrefix}getName`: {
                const { name } = action
                return {
                    ...state,
                    name
                }
            }
            default: {
                return state
            }
        }
    }
}
