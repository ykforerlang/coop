import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import 'ant-design-pro/dist/ant-design-pro.css'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { applyContainerQuery } from 'react-container-query'
import store from './store'
import './index.css'

import Layout from './component/layout/Index';
import Login from './component/login/Login'

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
    },
}

class App extends Component {
    static childContextTypes = {
        getGlobalConfig: PropTypes.func, // 所有存在store的全局信息 包括权限信息， 用户信息， 配置信息,
        screen: PropTypes.string, // 获取屏幕大小， 包括： screen-xs， screen-sm，screen-md，screen-lg，screen-xl
    }

    getChildContext() {
        return {
            getGlobalConfig: () => store.getState().globalConfig, // data from store
            screen: this.screen,
        }
    }

    componentWillMount() {
        // TODO 同步获取登录态
        store.dispatch({
            type: 'userinfo_sync',
            preload: {
                nickname: 'Test',
                avatar: 'https://static.segmentfault.com/v-5a1ff430/global/img/user-64.png',
                auth: {
                    '/advancedinfo': [],
                    '/basicinfo': [],
                },
            },
        })
    }

    componentWillReceiveProps(nextProps) {
        const { containerQuery } = nextProps
        const allKeys = Object.keys(containerQuery);
        [this.screen] = allKeys.filter(key => containerQuery[key])
    }

    screen = null

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route component={Layout} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

// 由于applyContainerQuery 是监听子元素dom的修改。
// 如果不加上div ，switch切换路由的时候 会导致div变化，就监听不到了。 是react-container-query的bug
const AppWrappedByDiv = ({ containerQuery }) => (
    <div>
        <App containerQuery={containerQuery} />
    </div>
)

const AppQuery = applyContainerQuery(AppWrappedByDiv, query)
ReactDOM.render(<AppQuery />, document.getElementById('root'));
