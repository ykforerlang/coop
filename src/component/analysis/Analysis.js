import React, { Component } from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { Row, Col, Tooltip, Icon, Card, Tabs, Table } from 'antd'
import {
    ChartCard,
    MiniArea,
    yuan,
    MiniBar,
    Bar,
    Field,
    Pie,
    MiniProgress,
} from 'ant-design-pro/lib/Charts'
import Trend from 'ant-design-pro/lib/Trend'
import NumberInfo from 'ant-design-pro/lib/NumberInfo'

import styles from './module/analysis.css'

const { TabPane } = Tabs

const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: fakeY[i],
    });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: fakeY2[i],
    });
}


const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
    rankingListData.push({
        title: `工专路 ${i} 号店`,
        total: 323234,
    });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}

const searchData = [];
for (let i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}

const salesPieData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];


const columns = [
    {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: '搜索关键词',
        dataIndex: 'keyword',
        key: 'keyword',
        render: text => <a href="/">{text}</a>,
    },
    {
        title: '用户数',
        dataIndex: 'count',
        key: 'count',
        sorter: (a, b) => a.count - b.count,
        className: styles.alignRight,
    },
    {
        title: '周涨幅',
        dataIndex: 'range',
        key: 'range',
        sorter: (a, b) => a.range - b.range,
        render: (text, record) => (
            <Trend flag={record.status === 1 ? 'down' : 'up'}>
                <span style={{ marginRight: 4 }}>{text}%</span>
            </Trend>
        ),
        className: styles.alignRight,
    },
];

export default class Analysis extends Component {
    state = {}
    render() {
        const topColResponsiveProps = {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
            style: { marginBottom: 24 },
        }

        return (
            <div className={styles.out}>
                <Row gutter={24}>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            bordered={false}
                            title="总销售额"
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={yuan(126560)}
                            footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
                            contentHeight={46}
                        >
                            <Trend flag="up" style={{ marginRight: 16 }}>
                                周同比<span className={styles.trendText}>12%</span>
                            </Trend>
                            <Trend flag="down">
                                日环比<span className={styles.trendText}>11%</span>
                            </Trend>
                        </ChartCard>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            bordered={false}
                            title="访问量"
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(8846).format('0,0')}
                            footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                            contentHeight={46}
                        >
                            <MiniArea
                                color="#975FE4"
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            bordered={false}
                            title="支付笔数"
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(6560).format('0,0')}
                            footer={<Field label="转化率" value="60%" />}
                            contentHeight={46}
                        >
                            <MiniBar
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            bordered={false}
                            title="运营活动效果"
                            action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                            total="78%"
                            footer={
                                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                    <Trend flag="up" style={{ marginRight: 16 }}>
                                        周同比<span className={styles.trendText}>12%</span>
                                    </Trend>
                                    <Trend flag="down">
                                        日环比<span className={styles.trendText}>11%</span>
                                    </Trend>
                                </div>
                            }
                            contentHeight={46}
                        >
                            <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
                        </ChartCard>
                    </Col>
                </Row>

                <Card
                    bordered={false}
                    bodyStyle={{ padding: 0 }}
                >
                    <div className={styles.salesCard}>
                        <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
                            <TabPane tab="销售额" key="sales">
                                <Row>
                                    <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                                        <div className={styles.salesBar}>
                                            <Bar
                                                height={295}
                                                title="销售额趋势"
                                                data={salesData}
                                            />
                                        </div>
                                    </Col>
                                    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                                        <div className={styles.salesRank}>
                                            <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                                            <ul className={styles.rankingList}>
                                                {
                                                    rankingListData.map((item, i) => (
                                                        <li key={item.title}>
                                                            <span className={(i < 3) ? styles.active : ''}>{i + 1}</span>
                                                            <span>{item.title}</span>
                                                            <span>{numeral(item.total).format('0,0')}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="访问量" key="views">
                                <Row gutter={72}>
                                    <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                                        <div className={styles.salesBar}>
                                            <Bar
                                                height={292}
                                                title="访问量趋势"
                                                data={salesData}
                                            />
                                        </div>
                                    </Col>
                                    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                                        <div className={styles.salesRank}>
                                            <h4 className={styles.rankingTitle}>门店访问量排名</h4>
                                            <ul className={styles.rankingList}>
                                                {
                                                    rankingListData.map((item, i) => (
                                                        <li key={item.title}>
                                                            <span
                                                                className={(i < 3) && styles.active}
                                                            >{i + 1}
                                                            </span>
                                                            <span>{item.title}</span>
                                                            <span>{numeral(item.total).format('0,0')}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </div>
                </Card>

                <Row gutter={24}>
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <Card
                            bordered={false}
                            title="线上热门搜索"
                            style={{ marginTop: 24 }}
                        >
                            <Row gutter={68}>
                                <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                                    <NumberInfo
                                        subTitle={
                                            <span>
                                                搜索用户数
                                                <Tooltip title="指标文案">
                                                    <Icon style={{ marginLeft: 8 }} type="info-circle-o" />
                                                </Tooltip>
                                            </span>
                                        }
                                        gap={8}
                                        total={numeral(12321).format('0,0')}
                                        status="up"
                                        subTotal={17.1}
                                    />
                                    <MiniArea
                                        line
                                        height={45}
                                        data={visitData2}
                                    />
                                </Col>
                                <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
                                    <NumberInfo
                                        subTitle="人均搜索次数"
                                        total={2.7}
                                        status="down"
                                        subTotal={26.2}
                                        gap={8}
                                    />
                                    <MiniArea
                                        line
                                        height={45}
                                        data={visitData2}
                                    />
                                </Col>
                            </Row>
                            <Table
                                rowKey={record => record.index}
                                size="small"
                                columns={columns}
                                dataSource={searchData}
                                pagination={{
                                    style: { marginBottom: 0 },
                                    pageSize: 5,
                                }}
                            />
                        </Card>
                    </Col>
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <Card
                            className={styles.salesCard}
                            bordered={false}
                            title="销售额类别占比"
                            bodyStyle={{ padding: 24 }}
                            style={{ marginTop: 24, minHeight: 509 }}
                        >
                            <h4 style={{ marginTop: 8, marginBottom: 32 }}>销售额</h4>
                            <Pie
                                hasLegend
                                subTitle="销售额"
                                total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
                                data={salesPieData}
                                valueFormat={val => yuan(val)}
                                height={248}
                                lineWidth={4}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
