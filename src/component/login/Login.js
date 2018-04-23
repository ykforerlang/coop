import React from 'react'
import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router-dom'
import { Button } from 'antd'
import { myConnectAndOtherHoc } from '../../util'
import * as actions from './module/action'

const Login = ({ location, loginSuc, login }) => {
    if (loginSuc) {
        return <Redirect to={location.state ? location.state.referrer || '/' : '/'} />
    }

    return (
        <div>here is your login page
            <Button onClick={() => {
                login(1)
            }}
            >
            管理员
            </Button>
            <Button onClick={() => {
                login(2)
            }}
            >
                普通人
            </Button>
            <Button onClick={() => {
                login(3)
            }}
            >
                路人
            </Button>
        </div>
    )
}

export default myConnectAndOtherHoc(
    state => state.login,
    dispatch => bindActionCreators(actions, dispatch),
)(withRouter(Login))
