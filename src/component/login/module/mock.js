import Mock from 'mockjs'

const oneAuth = {
    '/monitor': ['view'],
    '/workplace': ['view'],

    '/basicform': ['view'],
    '/stepform': ['view'],
    '/advancedform': ['view'],
    '/cardlist': ['view'],
    '/filtercardlist': ['view'],
    '/search': ['view'],
    '/basiclist': ['view'],
    '/covercardlist': ['view'],

    '/basicinfo': ['view'],
    '/advancedinfo': ['view'],


    '/success': ['view'],
    '/fail': ['view'],


    '/myprofile': ['view'],
    '/register': ['view'],
    '/register-result': ['view'],
}
const twoAuth = {
    '/monitor': ['view'],
    '/workplace': ['view'],
    '/cardlist': ['view'],
    '/filtercardlist': ['view'],
    '/search': ['view'],
    '/basiclist': ['view'],
    '/covercardlist': ['view'],

    '/basicinfo': ['view'],
    '/advancedinfo': ['view'],


    '/403': ['view'],
    '/404': ['view'],
    '/500': ['view'],

}

const threeAuth = {
    '/monitor': ['view'],
    '/workplace': ['view'],
}

Mock.mock('/login', ({ body }) => {
    const { type } = JSON.parse(body)
    let auth = null
    if (type === 1) {
        auth = oneAuth
    }
    if (type === 2) {
        auth = twoAuth
    }
    if (type === 3) {
        auth = threeAuth
    }
    return {
        code: 200,
        result: {
            nickname: 'Jack Ma',
            avatar: require('../../../assets/avatar.png'),
            auth,
        },
    }
})
