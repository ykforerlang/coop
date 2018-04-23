import React from 'react'
import style from './module/logo.css'

export default ({ imgData, label }) => (
    <div className={style.logo} >
        <img alt="" src={imgData} />
        <span>{label}</span>
    </div>
)
