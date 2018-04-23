import React, { Component } from 'react'
import { Row, Col, Form, Select, Button, Icon } from 'antd'
import { LabelAndInputAuto, LabelAndSelectAuto } from '../../common/labelAndOtherAuto/labelAndOtherAuto'

const { Option } = Select

export default class SimpleForm extends Component {
    render() {
        const { onMoreClick } = this.props
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <LabelAndInputAuto label="规则编号" placeholder="请输入" />
                    </Col>
                    <Col md={8} sm={24}>
                        <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                            <Option value="1">关闭</Option>
                            <Option value="2">运行中</Option>
                        </LabelAndSelectAuto>
                    </Col>
                    <Col md={8} sm={24}>
                        <span>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }}>重置</Button>
                            <a style={{ marginLeft: 8 }} onClick={onMoreClick}>
                展开 <Icon type="down" />
                            </a>
                        </span>
                    </Col>
                </Row>
            </Form>
        )
    }
}

