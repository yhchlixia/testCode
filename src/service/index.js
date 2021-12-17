import request from './request'

const baseURL = '/yhch/'

export const login = (data) => {
    return request({
        url: baseURL + 'login',
        method: 'post',
        data
    })
}

export const getUserInfo = () => {
    return request({
        url: baseURL + 'getUserInfo',
        method: 'get'
    })
}

export const getAllData = () => {
    return request({
        url: baseURL + 'getAllData',
        method: 'get'
    })
}

export const editUser = (data) => {
    return request({
        url: baseURL + 'editUser',
        method: 'post',
        data: data
    })
}