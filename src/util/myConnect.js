import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'

export default function myConnect(mapStateToProps, mapDispatchToProps) {

    const allActionCreators = mapDispatchToProps(store.dispatch)

    let cct = {}
    Object.keys(allActionCreators).forEach(acKey => {
        cct[acKey] = PropTypes.func
    })

    return function (Comp) {
        class Enhancer extends Component {
            static childContextTypes = cct

            getChildContext() {
                return allActionCreators
            }

            render() {
                return <Comp {...this.props}/>
            }
        }


        return connect(mapStateToProps, mapDispatchToProps)(Enhancer)
    }
}