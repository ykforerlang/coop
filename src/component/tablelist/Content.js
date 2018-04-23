import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'
import SimpleForm from './SimpleForm'
import AdvancedForm from './AdvancedForm'
import StandardTable from './StandardTable'
import styles from './module/content.css'
import * as actions from './module/action'
import { myConnectAndOtherHoc } from '../../util'

class Content extends Component {
    static contextTypes = {
        router: PropTypes.object,
    }

    state = {
        simpleForm: true,
    }

    componentDidMount() {
        const { initReq } = this.props
        initReq()
    }

    toggleForm = () => {
        this.setState({
            simpleForm: !this.state.simpleForm,
        })
    }

    render() {
        const { simpleForm } = this.state
        const { list } = this.props
        return (
            <div className={styles.content}>
                {simpleForm ? <SimpleForm
                    onMoreClick={this.toggleForm}
                /> : <AdvancedForm
                    onLessClick={this.toggleForm}
                />}

                <div className={styles.addNew}>
                    <Button
                        icon="plus"
                        type="primary"
                        onClick={() => {
                            const { history } = this.context.router
                            history.push('/tablelistForm/0/new')
                        }}
                    >
                        新建
                    </Button>
                </div>
                <StandardTable dataSource={list} />
            </div>
        )
    }
}

export default myConnectAndOtherHoc(
    state => state.tablelist,
    dispatch => bindActionCreators(actions, dispatch),
)(Content)
