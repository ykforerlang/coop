import React from 'react'
import { Card, Row, Col, Select, InputNumber } from 'antd'
import labelAndOtherAuto, { LabelAndInputAuto, LabelAndSelectAuto } from '../../common/labelAndOtherAuto/labelAndOtherAuto'

const { Option } = Select
const LabelAndInputNumberAuto = labelAndOtherAuto(InputNumber)
export default ({ className }) => (
    <Card title="仓库管理" bordered={false} key="1" className={className} >
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={6} sm={24}>
                <LabelAndInputAuto label="姓名" placeholder="请输入" value="姓名" disabled />
            </Col>
            <Col md={8} sm={24}>
                <LabelAndSelectAuto label="使用状态" placeholder="请选择" value="0" disabled>
                    <Option value="0">关闭</Option>
                    <Option value="1">运行中</Option>
                </LabelAndSelectAuto>
            </Col>
            <Col md={10} sm={24}>
                <LabelAndInputNumberAuto label="调用次数" placeholder="请输入" value={2} disabled />
            </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={4} sm={24}>
                <LabelAndInputAuto label="规则编号" placeholder="请输入" value="规则编号" disabled />
            </Col>
            <Col md={8} sm={24}>
                <LabelAndSelectAuto label="使用状态状态状" placeholder="请选择" value="0" disabled>
                    <Option value="0">关闭</Option>
                    <Option value="1">运行中</Option>
                </LabelAndSelectAuto>
            </Col>
            <Col md={12} sm={24}>
                <LabelAndInputNumberAuto label="调用次数" placeholder="请输入" value={1} disabled />
            </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={8} sm={24}>
                <LabelAndInputAuto label="规则编号规" placeholder="请输入" value="规则编号规" disabled />
            </Col>
            <Col md={8} sm={24}>
                <LabelAndSelectAuto label="使用状态" placeholder="请选择" value="0" disabled>
                    <Option value="0">关闭</Option>
                    <Option value="1">运行中</Option>
                </LabelAndSelectAuto>
            </Col>
            <Col md={8} sm={24}>
                <LabelAndInputNumberAuto label="调用次数" placeholder="请输入" value={1} disabled />
            </Col>
        </Row>
    </Card>
)
