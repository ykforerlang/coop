import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Badge, Divider } from 'antd'

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];
const columns = [
    {
        title: '规则编号',
        dataIndex: 'no',
    },
    {
        title: '描述',
        dataIndex: 'description',
    },
    {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: true,
        render: val => (
            <div style={{ textAlign: 'center' }}>
                {val} 万
            </div>
        ),
    },
    {
        title: '状态',
        dataIndex: 'status',
        filters: [
            {
                text: status[0],
                value: 0,
            },
            {
                text: status[1],
                value: 1,
            },
            {
                text: status[2],
                value: 2,
            },
            {
                text: status[3],
                value: 3,
            },
        ],
        render(val) {
            return <Badge status={statusMap[val]} text={status[val]} />;
        },
    },
    {
        title: '更新时间',
        dataIndex: 'updatedAt',
        sorter: true,
        render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
        title: '操作',
        render: () => (
            <div>
                <a href="">配置</a>
                <Divider type="vertical" />
                <a href="">订阅警报</a>
            </div>
        ),
    },
]
export default class StandardTable extends PureComponent {
    state = {
        selectedRowKeys: [],
    }

    handleRowSelectChange = (selectedRowKeys, selectedRows) => {
        if (this.props.onSelectRow) {
            this.props.onSelectRow(selectedRows);
        }

        this.setState({ selectedRowKeys });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.props.onChange(pagination, filters, sorter);
    }

    render() {
        const { selectedRowKeys } = this.state;
        const { dataSource } = this.props

        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: true,
        };

        const rowSelection = {
            selectedRowKeys,
            onChange: this.handleRowSelectChange,
            getCheckboxProps: record => ({
                disabled: record.disabled,
            }),
        };

        return (
            <div>
                <Table
                    rowKey={record => record.key}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={paginationProps}
                    onChange={this.handleTableChange}
                />
            </div>
        );
    }
}
