/* eslint-disable quote-props */
import Mock from 'mockjs'
import { getParamsFromUrl } from '../../../util'

const tableList = Mock.mock({
    'result|10-20': [
        { // 随机生成10到20个数组元素
            'key|+1': 88, // 属性值自动加 1，初始值为88
            'disabled|1-5': true,
            'href|1': ['https://ant.design', 'http://www.baidu.com'],
            'avatar|1': ['https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png', 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png'],
            'no|100000-500000': 0, // 中文名称
            'title|1': ['属性值自', '个数组元素', '个数组元素1', '个数组元素2', '个数组元素3'],
            'owner': '@cname',
            'description': '@csentence',
            'callNo|1-1000': 0,
            'status|0-4': 0,
            'updatedAt': '@date("yyyy-MM-dd")',
            'createdAt': '@date("yyyy-MM-dd")',
            'progress|1-100': 0,
        },
    ],
}).result

Mock.mock('/tablelist/list', {
    code: 200,
    result: tableList,
})

Mock.mock(/\/tablelist\/search/, ({ url }) => {
    const { name } = getParamsFromUrl(url)
    const filterList = tableList.filter(ele => ele.title.indexOf(name) !== -1)
    return {
        code: 200,
        result: filterList,
    }
})
