import { message } from 'antd'
import { post } from '../../util/uaxios'

export default function commonTableActionCreators(opUrlOptions, typePrefix) {
    return {
        initReq: (page = 1, limit = 10) => async dispatch => {
            try {
                const { url, sucMessage } = opUrlOptions.initReq

                const { totalCount, list } = await post(url, {
                    offset: (page - 1) * limit,
                    limit,
                })

                dispatch({
                    type: `${typePrefix}initSuc`,
                    total: totalCount,
                    list,
                })

                sucMessage && message.success(sucMessage)
            } catch (err) {
                const { errMessage } = opUrlOptions.initReq
                message.error(err.response.data.message || errMessage)
            }
        }
    }
}
