import $ from 'jquery'
import './mock'

const prefix = 'login_'
export const login = type => dispatch => {
    $.post('/login', JSON.stringify({ name: 'admin', password: '123456', type }), d => {
        if (d.code === 200) {
            dispatch({
                type: `${prefix}loginSuc`,
                preload: d.result,
            })
        }
    }, 'json')
}
