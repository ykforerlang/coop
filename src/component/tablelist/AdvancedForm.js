import React, { Component } from 'react'
import { Row, Col, Form, Select, Button, Icon, InputNumber, DatePicker } from 'antd'
import labelAndOtherAuto, { LabelAndInputAuto, LabelAndSelectAuto } from '../../common/labelAndOtherAuto/labelAndOtherAuto'

const { Option } = Select
const LabelAndInputNumberAuto = labelAndOtherAuto(InputNumber)
const LabelAndDatePickerAuto = labelAndOtherAuto(DatePicker)
export default class AdvancedForm extends Component {
    render() {
        const { onLessClick } = this.props
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <LabelAndInputAuto label="规则编号" placeholder="请输入" />
                    </Col>
                    <Col md={8} sm={24}>
                        <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                            <Option value="0">关闭</Option>
                            <Option value="1">运行中</Option>
                        </LabelAndSelectAuto>
                    </Col>
                    <Col md={8} sm={24}>
                        <LabelAndInputNumberAuto label="调用次数" placeholder="请输入" />
                    </Col>
                </Row>
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <LabelAndDatePickerAuto label="更新日期" placeholder="请输入更新日期" />
                    </Col>
                    <Col md={8} sm={24}>
                        <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                            <Option value="0">关闭</Option>
                            <Option value="1">运行中</Option>
                        </LabelAndSelectAuto>
                    </Col>
                    <Col md={8} sm={24}>
                        <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                            <Option value="0">关闭</Option>
                            <Option value="1">运行中</Option>
                        </LabelAndSelectAuto>
                    </Col>
                </Row>
                <div style={{ overflow: 'hidden' }}>
                    <span style={{ float: 'right', marginBottom: 24 }}>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button style={{ marginLeft: 8 }}>重置</Button>
                        <a style={{ marginLeft: 8 }} onClick={onLessClick}>
              收起 <Icon type="up" />
                        </a>
                    </span>
                </div>
            </Form>
        )
    }
}
