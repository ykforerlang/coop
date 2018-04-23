import React from 'react'
import { Card, Row, Col, Select, InputNumber } from 'antd'
import labelAndOtherAuto, { LabelAndInputAuto, LabelAndSelectAuto } from '../../common/labelAndOtherAuto/labelAndOtherAuto'

const { Option } = Select
const LabelAndInputNumberAuto = labelAndOtherAuto(InputNumber)
export default ({ className }) => (
    <Card title="仓库管理" bordered={false} className={className} key="2">
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
            <Col md={12} sm={24}>
                <LabelAndInputAuto label="规则编号" placeholder="请输入" />
            </Col>
            <Col md={12} sm={24}>
                <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                    <Option value="0">关闭</Option>
                    <Option value="1">运行中</Option>
                </LabelAndSelectAuto>
            </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={8} sm={24}>
                <LabelAndSelectAuto label="使用状态" placeholder="请选择">
                    <Option value="0">关闭</Option>
                    <Option value="1">运行中</Option>
                </LabelAndSelectAuto>
            </Col>
            <Col md={16} sm={24}>
                <LabelAndInputNumberAuto label="地址" placeholder="请输入" />
            </Col>
        </Row>
    </Card>
)
