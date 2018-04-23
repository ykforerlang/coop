import $ from 'jquery'
import './mock'

const prefix = 'tablelist_'
export const initReq = () => dispatch => {
    $.get('/tablelist/list', d => {
        if (d.code === 200) {
            dispatch({
                type: `${prefix}initSuc`,
                list: d.result,
            })
        }
    }, 'json')
}

