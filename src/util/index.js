import React from 'react'
import { connect } from 'react-redux'
import appConfig from '../appConfig'

// appConfig 扁平化， 以path为key， value是 深度路径上的{path, name}集合， 方便做面包屑
const menuWithPathKey = {}
function delayeringMenuWithPathKeyInner(menuData, fatherKeys) {
    if (Array.isArray(menuData)) {
        menuData.forEach(eleMenu => delayeringMenuWithPathKeyInner(eleMenu, fatherKeys))
    } else if (menuData.children) {
        const { children } = menuData
        delayeringMenuWithPathKeyInner(children, [...fatherKeys, {
            name: menuData.name,
            isLink: true,
            path: menuData.path,
        }])
    } else {
        menuWithPathKey[menuData.path] = [...fatherKeys, {
            name: menuData.name,
            isLink: false,
            path: menuData.path,
        }]
    }
}
export function getMenuPathArray(path) {
    if (!menuWithPathKey[path]) {
        delayeringMenuWithPathKeyInner(appConfig.menu, [{
            name: '首页',
            isLink: true,
            path: '/',
        }])
    }
    return menuWithPathKey[path]
}

// myConnect 方便以后统一给组件加上 hoc
export function myConnectAndOtherHoc(mapStateToProps, mapDispatchToProps) {
    return connect(mapStateToProps, mapDispatchToProps)
}

export function getParamsFromUrl(url) {
    const sIndex = url.indexOf('?')
    if (sIndex === -1) return {}

    const subStr = url.substring(sIndex + 1)
    const pArr = subStr.split('&')
    return pArr.reduce((a, b) => {
        const [k, v] = b.split('=')
        // eslint-disable-next-line no-param-reassign
        a[k] = v
        return a
    }, {})
}

// 根据权限获取 左侧的menu。
// TODO 如果权限的 都没有配置这个menu 那么是 展示还是不展示。。。这里的策略是展示
// TODO 这里的方法只时候 menuData是两层的时候
export function menuDataHandleByAuth(menuData, auth) {
    if (!auth) return menuData
    const result = []
    menuData.forEach(item => {
        if (item.children) {
            const subResult = item.children.filter(itemitem => (auth[itemitem.path] && auth[itemitem.path].indexOf('view') !== -1)
                || auth[itemitem.path] === undefined)
            if (subResult.length > 0) {
                result.push({
                    ...item,
                    children: subResult,
                })
            }
        } else if ((auth[item.path] && auth[item.path].indexOf('view') !== -1) || auth[item.path] === undefined) {
            result.push(item)
        }
    })
    return result
}


export function reactElementOrComp(ele, props) {
    if (typeof ele === 'function') {
        const Ele = ele
        return <Ele {...props} />
    }
    return React.cloneElement(ele, props)
}
