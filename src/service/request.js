import axios from 'axios'
import Router from '@/router'

const request = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Cache-Control': 'no-cache',
        token: window.localStorage.getItem('token')
    },
    timeout: 20000
})

const errorHandler = (error) => {
    console.log(error)
    return Promise.reject(error)
}

request.interceptors.request.use((req) => {
    return req
}, errorHandler)

request.interceptors.response.use((res) => {
    res.headers.token = '11111111111111111111'
    const token = res.headers['token']
    if (token) {
        window.localStorage.setItem('token', token)
    }
    if (res.config.method === 'post' || res.config.method === 'POST') {
        // 对post请求进行处理
    }

    if (res.data.status === 404) {
        Router.push({
            path: '/report/login'
        })
    }

    let result = res.data

    return result
}, errorHandler)

export default request