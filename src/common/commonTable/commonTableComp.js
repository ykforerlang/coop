import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Table } from 'antd'

import { myConnectAndOtherHoc } from '../../util'
import SmartTitle from '../title/SmartTitle'
import styles from './index.css'

const pageSize = 10
export default function commonTableComp(columns, typePrefix, actions) {
    class CommonTable extends Component {
        componentDidMount() {
            const { initReq } = this.props
            initReq()
        }

        render() {
            const { list, total, initReq } = this.props
            return (
                <div>
                    <SmartTitle />
                    <div className={styles.content} >
                        <Table
                            rowKey={record => record.id}
                            dataSource={list}
                            columns={columns}
                            pagination={{
                                total,
                                defaultCurrent: 1,
                                pageSize,
                                onChange: initReq
                            }}
                        />
                    </div>
                </div>
            )
        }
    }

    return myConnectAndOtherHoc(
        state => state[typePrefix],
        dispatch => bindActionCreators(actions, dispatch)
    )(CommonTable)
}
