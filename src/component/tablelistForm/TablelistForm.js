import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Input, Tooltip, Icon, InputNumber, Radio } from 'antd'
import BasicFormAndInfo from '../../common/basicFormAndInfo/BasicFormAndInfo'
import { myConnectAndOtherHoc } from '../../util'
import * as actions from './module/action'
import HalfSmartTitle from '../../common/title/HalfSmartTitle'
import styles from './module/TablelistForm.css'

const RadioGroup = Radio.Group
const OpenOrNot = ({ onChange }) => (
    <div className={styles.openOrNot}>
        <RadioGroup
            name="radiogroup"
            defaultValue={1}
            onChange={onChange}
        >
            <Radio value={1}>公开</Radio>
            <Radio value={2}>部分公开</Radio>
            <Radio value={3}>不公开</Radio>
        </RadioGroup>
        <div className={styles.openOrNotSpan}>
            客户、邀评人默认被分享
        </div>
    </div>
)

class TableListForm extends Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    componentDidMount() {
        const { id } = this.props.match.params
        const { initReq } = this.props
        if (id !== '0') {
            initReq(id)
        }
    }

    getFormItemList() {
        const { props } = this
        const { type } = this.props.match.params
        const disabled = type === 'view'
        return [
            {
                label: '标题',
                inputElement: <Input
                    value={props.name}
                    placeholder="给目标起个名字"
                    disabled={disabled}
                    onChange={e => this.inputChange('name', e.target.value)}
                />,
            },
            {
                label: '起止日期',
                inputElement: Input,
            },
            {
                label: '衡量标准',
                inputElement: <Input.TextArea
                    value={props.hlbj}
                    disabled={disabled}
                    rows={4}
                    placeholder="请输入衡量标准"
                    onChange={e => this.inputChange('hlbj', e.target.value)}
                />,
            },
            {
                label: '目标描述',
                inputElement: <Input.TextArea rows={4} placeholder="请输入你的阶段性工作目标" onChange={e => this.inputChange('targetDes', e.target.value)} />,
            },
            {
                label: (
                    <span>客户
                        <em className={styles.optional}>
                    （选填）
                            <Tooltip title="目标的服务对象">
                                <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                            </Tooltip>
                        </em>
                    </span>
                ),
                inputElement: <Input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />,
            },
            {
                label: (
                    <span>邀评人
                        <em className={styles.optional}>
                    （选填）
                        </em>
                    </span>
                ),
                inputElement: <Input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />,
            },
            {
                label: (
                    <span>权重
                        <em className={styles.optional}>
                    （选填）
                        </em>
                    </span>
                ),
                inputElement: <InputNumber placeholder="请输入" />,
            },
            {
                label: '目标公开',
                inputElement: <OpenOrNot onChange={e => this.inputChange('targetOpen', e.target.value)} />,
            },
        ]
    }

    inputChange(k, v) {
        const { inputChange } = this.props
        inputChange(k, v)
    }

    handleSubmit = () => {
        const { history } = this.context.router
        const { submitForm } = this.props
        submitForm(history)
    }

    render() {
        const { name, match } = this.props
        const { type } = match.params
        const title = (type === 'new' ? '新增商品' : name)
        return (
            <div>
                <HalfSmartTitle
                    title={title}
                    path="/tablelist"
                    extraBreadcrumbArray={{ name: title }}
                />
                <div className={styles.content}>
                    <BasicFormAndInfo
                        formItemList={this.getFormItemList()}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}
export default myConnectAndOtherHoc(
    state => state.tablelistForm,
    dispatch => bindActionCreators(actions, dispatch),
)(TableListForm)
