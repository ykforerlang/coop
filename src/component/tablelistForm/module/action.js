import $ from 'jquery'
import './mock'

const prefix = 'tablelistForm'
export const initReq = id => dispatch => {
    $.get(`/tablelist/${id}`, d => {
        dispatch({
            type: `${prefix}_initSuc`,
            preload: d.result,
        })
    }, 'json')
}

export const inputChange = (k, v) => ({
    type: `${prefix}_inputChange`,
    k,
    v,
})

export const submitForm = history => (dispatch, getState) => {
    const state = getState()[prefix]
    $.post('/tablelist/create', state, d => {
        if (d.code === 200) {
            history.push(`/tablelistForm/${d.result.id}/view`)
        }
    }, 'json')
}
