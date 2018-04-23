import Mock from 'mockjs'

Mock.mock('/tablelist/create', {
    code: 200,
    result: {
        id: 1,
    },
})

Mock.mock('/tablelist/1', {
    code: 200,
    result: {
        id: 1,
        name: 'xxxx',
    },
})
