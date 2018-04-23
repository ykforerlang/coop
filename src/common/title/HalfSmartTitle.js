import React from 'react'
import { getMenuPathArray } from '../../util/index'
import Title from './Title'

export default ({
    extraDetail,
    path,
    title,
    extraBreadcrumbArray,
}) => {
    const pathArray = getMenuPathArray(path)
    const breadcrumbArray =
        [...pathArray, extraBreadcrumbArray]
    breadcrumbArray[pathArray.length - 1] = {
        ...breadcrumbArray[pathArray.length - 1],
        isLink: true,
    }

    return (
        <Title
            title={title}
            breadcrumbArray={breadcrumbArray}
            extraDetail={extraDetail}
        />
    )
}

