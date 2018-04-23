import React from 'react'
import { Row, Col, Button } from 'antd'
import styles from './basicFormAndInfo.css'

function handleElement(ele) {
    if (typeof ele === 'string') {
        return <div>{`${ele}：`}</div>
    }
    if (typeof ele === 'function') {
        const T = ele
        return <T />
    }

    return ele // 默认是 ReactElement
}

const labelCol = {
    xs: { span: 24 },
    sm: { span: 7 },
}
const inputElementCol = {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
}

const submitCol = {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
}

export default ({ formItemList, onSubmit }) => (
    <div className={styles.content}>
        {
            formItemList.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Row key={index}>
                    <Col {...labelCol} className={styles.label}>
                        {handleElement(item.label)}
                    </Col>
                    <Col {...inputElementCol}>
                        {handleElement(item.inputElement)}
                    </Col>
                </Row>
            ))
        }
        <Row>
            <Col {...submitCol}>
                <Button type="primary" htmlType="submit" onClick={onSubmit}>
                    提交
                </Button>
                <Button style={{ marginLeft: 8 }}>保存</Button>
            </Col>
        </Row>
    </div>
)
