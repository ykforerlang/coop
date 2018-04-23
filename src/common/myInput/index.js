import React, { Component } from 'react'
import { getPrecision } from '../../util/anumber'
import styles from './index.css'

export default class MyInput extends Component {
    constructor(props) {
        super(props)
        this.state.innerValue = props.value
    }


    state = {
        innerValue: ''
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.value !== this.props.value) {
            this.setState({
                innerValue: nextProps.value
            })
        }
    }

    handleChange = e => {
        const { precision } = this.props
        let innerValue = e.target.value

        if(isNaN(innerValue)) return

        const np = getPrecision(innerValue)
        if(np > precision) return

        this.setState({
            innerValue,
        })
    }

    render() {
        const { placeholder, label, readOnly, onChange, labelClassName } = this.props
        return (
            <div className={styles.out}>
                <input
                    onChange={this.handleChange}
                    onBlur={e => {
                        onChange && onChange(e.target.value)
                    }}
                    placeholder={placeholder}
                    value={this.state.innerValue}
                    readOnly={readOnly}
                />
                <span className={`${styles.inputLabel} ${labelClassName}`}>{label}</span>
            </div>
        )
    }
}
