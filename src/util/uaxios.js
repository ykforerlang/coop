import axios from 'axios'

export async function post(url, params) {
    const result = await axios({
        method: "POST",
        url,
        headers: {
            "Content-Type": "application/json"
        },
        data: params
    })

    return result.data
}


export async function gpost (url, params) {
    const result = await axios({
        method: "POST",
        url,
        headers: {
            'Content-Type': 'application/graphql'
        },
        data: params
    })

    return result.data.data
}