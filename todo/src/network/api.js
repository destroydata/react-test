import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.0.184:8080'

export const apiNoToken = async (url, method, data) => {
    const body = await axios({
        url, method, data
    })
    return body.data
}

export const api = async (url, method, data) => {
    const token = localStorage.getItem('token')
    const body = await axios({
        url, method, data,
        headers: { "Authorization": `Bearer ${token}` }
    })
    return body.data
}