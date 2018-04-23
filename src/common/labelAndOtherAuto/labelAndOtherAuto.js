import React from 'react'
import { Input, Select } from 'antd'
import styles from './labelAndOtherAuto.css'

export default function labelAndOtherAuto(wrappedComp) {
    const Wc = wrappedComp

    return props => (
        <div className={styles.out}>
            <div
                className={styles.label}
            >
                {`${props.label}：`}
            </div>

            <div className={styles.componentWrapper}>
                <Wc {...props} style={{ width: '100%', ...props.style }} />
            </div>
        </div>
    )
}

export const LabelAndInputAuto = labelAndOtherAuto(Input)
export const LabelAndSelectAuto = labelAndOtherAuto(Select)
