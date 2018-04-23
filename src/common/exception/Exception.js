import React from 'react'
import { Button } from 'antd'
import styles from './exception.css'

const svgMap = {
    404: {
        message: '抱歉，你访问的页面不存在',
        img: require('./404.svg'),
    },
    403: {
        message: '抱歉，你无权访问该页面',
        img: require('./403.svg'),
    },
    500: {
        message: '抱歉，服务器出错了',
        img: require('./500.svg'),
    },
}
export default ({ type }) => {
    const { message, img } = svgMap[type]
    return (
        <div className={styles.content}>
            <div className={styles.right}>
                <img src={img} alt="" />
            </div>
            <div className={styles.left}>
                <h1>{type}</h1>
                <div className={styles.message}>{message}</div>
                <Button type="primary">返回首页</Button>
            </div>
        </div>
    )
}
