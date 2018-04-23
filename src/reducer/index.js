import { combineReducers } from 'redux'
import login from '../component/login/module/reducer'
import tablelist from '../component/tablelist/module/reducer'
import tablelistForm from '../component/tablelistForm/module/reducer'
import profile from '../component/profile/module/reducer'

function globalConfig(state = {}, action) {
    switch (action.type) {
        case 'userinfo_sync':
        case 'login_loginSuc': {
            return {
                ...state,
                userinfo: {
                    ...action.preload,
                },
            }
        }
        case 'profile_updateSuc': {
            return {
                ...state,
                userinfo: {
                    ...state.userinfo,
                    ...action.preload,
                },
            }
        }
        default: {
            return state
        }
    }
}


export default combineReducers({
    login,
    tablelist,
    tablelistForm,
    globalConfig,
    profile,
})
