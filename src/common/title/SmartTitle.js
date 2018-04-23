import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getMenuPathArray } from '../../util/index'
import Title from './Title'

export default class SmartTitle extends Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    static getBreadcrumbArray({ router }) {
        const { path } = router.route.match
        return getMenuPathArray(path)
    }

    render() {
        const { extraDetail } = this.props
        const breadcrumbArray = SmartTitle.getBreadcrumbArray(this.context)
        const title = breadcrumbArray && breadcrumbArray[breadcrumbArray.length - 1].name
        return (
            <Title
                title={title}
                breadcrumbArray={breadcrumbArray}
                extraDetail={extraDetail}
            />
        )
    }
}

