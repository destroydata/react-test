import axios from 'axios'

export const api = async (path, method, body) => {
    const init = method === "GET" ? {} : {
        method
        , headers: { "Content-Type": "application/json" }
        , body: JSON.stringify(body)
    }
    // const response = { body: "", status: "" }
    try {
        const response = await fetch(`http://192.168.0.184:8080${path}`, init)
        // .then((res) => {
        //     return res.json()
        // }).then((member) => {
        //     response.body = member
        //     response.status = "success"
        // }).catch((err) => {
        //     console.log(err)
        //     response.status = "error"
        // })
        const body = await response.json()
        return { body, status: "success" }
    } catch (error) {
        return { body, status: "error" }
    }

}

axios.defaults.baseURL = "http://192.168.0.184:8080"

export const myAxios = async (url, method, body) => {
    try {
        const { status, data } = await axios({
            method, url, data: body, headers: {
                "Authorization": "Bearer sdfa"
            }
        })
        return { body: data, status: "success" }
    } catch (error) {
        return { body: null, status: "error" }
    }
}