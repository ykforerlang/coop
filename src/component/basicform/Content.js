import React from 'react'
import { Input, Tooltip, Icon, InputNumber, Radio } from 'antd'
import BasicFormAndInfo from '../../common/basicFormAndInfo/BasicFormAndInfo'
import styles from './module/content.css'

const RadioGroup = Radio.Group
const OpenOrNot = () => (
    <div className={styles.openOrNot}>
        <RadioGroup name="radiogroup" defaultValue={1}>
            <Radio value={1}>公开</Radio>
            <Radio value={2}>部分公开</Radio>
            <Radio value={3}>不公开</Radio>
        </RadioGroup>
        <div className={styles.openOrNotSpan}>
           客户、邀评人默认被分享
        </div>
    </div>
)

const formItemList = [
    {
        label: '标题',
        inputElement: <Input placeholder="给目标起个名字" />,
    },
    {
        label: '起止日期',
        inputElement: Input,
    },
    {
        label: '衡量标准',
        inputElement: <Input.TextArea rows={4} placeholder="请输入衡量标准" />,
    },
    {
        label: '目标描述',
        inputElement: <Input.TextArea rows={4} placeholder="请输入你的阶段性工作目标" />,
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
        inputElement: OpenOrNot,
    },
]

export default <BasicFormAndInfo formItemList={formItemList} />
