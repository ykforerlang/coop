import React from 'react'
import { Card, Table, Divider, Popconfirm, Button } from 'antd'

const columns = [
    {
        title: '成员姓名',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
    }, {
        title: '工号',
        dataIndex: 'workId',
        key: 'workId',
        width: '20%',
    }, {
        title: '所属部门',
        dataIndex: 'department',
        key: 'department',
        width: '40%',
    }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a onClick={e => this.toggleEditable(e, record.key)}>编辑</a>
                <Divider type="vertical" />
                <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.key)}>
                    <a>删除</a>
                </Popconfirm>
            </span>
        ),
    }];
const tableData = [
    {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
    }, {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
    }];
export default ({ className }) => (
    <Card title="仓库管理" bordered={false} className={className} key="3">
        <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
        />
        <Button
            style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
            type="dashed"
            icon="plus"
        >
            新增成员
        </Button>
    </Card>
)
