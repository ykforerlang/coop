import React from 'react'
import { Icon } from 'antd'

export default ({ copyright }) => (
    <div style={{ margin: '48px 0 24px 0', textAlign: 'center' }}>
        Copyright <Icon type="copyright" /> {copyright}
    </div>
)
