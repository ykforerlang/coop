import React, { Component } from 'react'
import { Button } from 'antd'
import { bindActionCreators } from 'redux'
import * as actions from './module/action'
import { myConnectAndOtherHoc } from '../../util'

class Profile extends Component {
    state = null

    render() {
        const { updateProfile } = this.props
        return (
            <div>
                <div>
                    <Button onClick={() => {
                        updateProfile({
                            nickname: '刘德华',
                            avatar: require('../../assets/ldh.jpg'),
                        })
                    }}
                    >
                        修改为刘德华
                    </Button>
                </div>
                <div>
                    <Button onClick={() => {
                        updateProfile({
                            nickname: '章子怡',
                            avatar: 'http://apic.douyucdn.cn/upload/avanew/face/201711/30/00/372328549ff56450c72b58bda5eae900_middle.jpg',
                        })
                    }}
                    >
                        修改为章子怡
                    </Button>
                </div>
            </div>
        )
    }
}

export default myConnectAndOtherHoc(
    state => state.profile,
    dispatch => bindActionCreators(actions, dispatch),
)(Profile)
