import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Dropdown, Menu } from 'antd'
import { myConnectAndOtherHoc } from '../../util'
import styles from './module/header.css'
import defaultAvatar from '../../assets/avatar.png'

class Header extends Component {
    menu = (
        <Menu className={styles.menu} selectedKeys={[]}>
            <Menu.Item><Link to="/myprofile"><Icon type="user" />个人中心</Link></Menu.Item>
            <Menu.Item><Icon type="setting" />设置</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
        </Menu>
    );

    render() {
        const {
            collapsed,
            onFoldClick,
            nickname,
            avatar,
        } = this.props
        return (
            <div className={styles.header}>
                <Icon
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={onFoldClick}
                />
                <Dropdown overlay={this.menu}>
                    <span className={styles.avatar}>
                        <img className={styles.avatarImg} alt="" src={avatar || defaultAvatar} />
                        {nickname || 'yankang'}
                    </span>
                </Dropdown>
            </div>
        )
    }
}

export default myConnectAndOtherHoc(state => state.globalConfig.userinfo || {})(Header)
