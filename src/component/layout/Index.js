import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeftMenu from './LeftMenu'
import Logo from './Logo'
import Header from './Header'
import Content from './Content'
import Footer from '../../common/footer/Footer'
import LeftWrapper from '../../common/leftWrapper/LeftWrapper'
import { menuDataHandleByAuth } from '../../util'
import styles from './module/index.css'
import appConfig from '../../appConfig'

const COLLAPSED_LEFT_WIDTH = 80;
const UNCOLLAPSED_LEFT_WIDTH = 256;
export default class Index extends Component {
    static contextTypes = {
        screen: PropTypes.string,
        getGlobalConfig: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context)

        const { screen } = context
        this.state = {
            collapsed: screen === 'screen-md' || screen === 'screen-sm' || screen === 'screen-xs',
        }
    }


    componentWillReceiveProps(nextProps, { screen }) {
        this.setState({
            collapsed: screen === 'screen-md' || screen === 'screen-sm' || screen === 'screen-xs',
        })
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    };


    render() {
        const { collapsed } = this.state
        const {
            appname,
            logo,
            menu,
            copyright,
        } = appConfig
        const { userinfo } = this.context.getGlobalConfig()
        const authMenu = userinfo ? menuDataHandleByAuth(menu, userinfo.auth) : []

        return (
            <div>
                <div
                    style={{ width: collapsed ? COLLAPSED_LEFT_WIDTH : UNCOLLAPSED_LEFT_WIDTH }}
                    className={styles.left}
                >
                    <Logo imgData={logo} label={appname} />
                    <LeftMenu collapsed={collapsed} menuData={authMenu} />
                </div>
                <div
                    style={{ left: collapsed ? COLLAPSED_LEFT_WIDTH : UNCOLLAPSED_LEFT_WIDTH }}
                    className={styles.right}
                >
                    <LeftWrapper />
                    <Header
                        collapsed={collapsed}
                        onFoldClick={this.toggleCollapsed}
                    />
                    <Content />
                    <Footer copyright={copyright} />
                </div>
            </div>
        )
    }
}

