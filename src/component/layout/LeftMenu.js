import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { getMenuPathArray } from '../../util'

const { SubMenu } = Menu

function geneSubMenu(subConfig) {
    if (!subConfig) return null
    return subConfig.map(element => {
        let title
        if (element.icon) {
            title = <span><Icon type={element.icon} /><span>{element.name}</span></span>
        } else {
            title = <span>{element.name}</span>
        }
        const key = element.key || element.path || element.name

        if (!element.children) {
            return <Menu.Item key={key}><Link to={element.path}>{title}</Link></Menu.Item>
        }
        const subMenuChilds = geneSubMenu(element.children)
        return (
            <SubMenu key={key} title={title}>
                {subMenuChilds}
            </SubMenu>
        )
    })
}

export default class LeftMenu extends Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    constructor(props, context) {
        super(props)
        const { pathname } = context.router.route.location
        const pathArray = getMenuPathArray(pathname) // 可以通过pathArray来判断pathname是否在左侧存在
        this.state = {
            openKeys: pathArray ? [pathArray[1].path] : [],
            defaultSelectedKeys: pathArray ? [pathname] : [],
        }
    }

    render() {
        const { collapsed, menuData } = this.props
        return (
            <Menu
                theme="dark"
                style={{ margin: '16px 0', width: '100%' }}
                mode="inline"
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                openKeys={this.state.openKeys}
                onOpenChange={keys => {
                    this.setState({
                        openKeys: [keys[keys.length - 1]],
                    })
                }}
                inlineCollapsed={collapsed}
            >
                {geneSubMenu(menuData)}
            </Menu>
        )
    }
}
