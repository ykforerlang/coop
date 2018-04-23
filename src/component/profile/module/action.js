import $ from 'jquery'
import './mock'

const prefix = 'profile'
export const updateProfile = newProfile => dispatch => {
    $.post('/profile/update', newProfile, d => {
        if (d.code === 200) {
            dispatch({
                type: `${prefix}_updateSuc`,
                preload: newProfile,
            })
        }
    }, 'json')
}
