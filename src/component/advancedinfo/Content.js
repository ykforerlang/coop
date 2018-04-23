import React from 'react'
import styles from './module/content.css'
import BaseInfoCard from './BaseInfoCard'
import DepotCard from './DepotCard'
import TableCard from './TableCard'

export default () => (
    [
        <BaseInfoCard className={styles.card} key="BaseInfoCard" />,
        <DepotCard className={styles.card} key="DepotCard" />,
        <TableCard className={styles.card} key="TableCard" />,
    ]
)
