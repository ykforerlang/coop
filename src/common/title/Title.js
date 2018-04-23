import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const styles = {
    out: {
        background: '#fff',
        padding: '16px 32px 0 32px',
        borderBottom: '1px solid #e8e8e8',
    },
    title: {
        margin: '16px 0',
        fontSize: 20,
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.85)',
    },
    extraDetail: {
        marginBottom: 16,
    },
}

export default ({ title, extraDetail, breadcrumbArray }) => (
    <div style={styles.out}>
        <Breadcrumb>
            {breadcrumbArray && breadcrumbArray.map(bc => {
                if (!bc.name) return null
                return (
                    bc.isLink ?
                        (
                            <Breadcrumb.Item key={bc.name}>
                                <Link to={bc.path}>
                                    {bc.name}
                                </Link>
                            </Breadcrumb.Item>
                        )
                        :
                        (
                            <Breadcrumb.Item key={bc.name}>
                                {bc.name}
                            </Breadcrumb.Item>
                        )
                )
            })}
        </Breadcrumb>

        <div>
            <h1 style={styles.title}>
                {title}
            </h1>
        </div>
        {extraDetail && (
            <div style={styles.extraDetail}>
                {extraDetail}
            </div>
        )
        }
    </div>
)
