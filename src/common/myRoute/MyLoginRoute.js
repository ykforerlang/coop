import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import styles from './myRoute.css'
import { reactElementOrComp } from '../../util'

export default class MyLoginRoute extends Component {
    static contextTypes = {
        router: PropTypes.object,
        getGlobalConfig: PropTypes.func,
    }


    static propTypes = {
        title: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]),
        content: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]),
        component: PropTypes.func,
        render: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]),
    }

    titleContentRender = props => {
        const { title, content } = this.props
        return (
            <div>
                {title && reactElementOrComp(title)}
                {content && (
                    <div className={styles.content}>
                        {reactElementOrComp(content, props)}
                    </div>
                )}
            </div>
        )
    }

    // eslint-disable-next-line class-methods-use-this
    hasAuth() {
        const globalConfig = this.context.getGlobalConfig()
        return !!globalConfig.userinfo
    }

    render() {
        if (!this.hasAuth()) {
            return (<Redirect to={{
                pathname: '/login',
                state: { referrer: this.context.router.route.location },
            }}
            />)
        }
        const { title, content } = this.props
        if (title || content) {
            return (
                <Route {...this.props} render={this.titleContentRender} />
            )
        }

        return (
            <Route {...this.props} />
        )
    }
}
