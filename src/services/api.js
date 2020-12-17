import axios from "axios"
import {getToken, getRefresh} from "./localstorage"

const baseURI = 'https://login.larrylx.com'
const refreshURI = 'https://login.larrylx.com/auth/login'

const instance = axios.create({
    timeout: 1000,
    baseURL: baseURI
})

instance.interceptors.request.use(
    (config) => {
        if (getToken()) {
            config.headers['Authorization'] = "Bearer " + getToken()
        }
        return config
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    })

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const refreshtoken = getRefresh()
            return axios.put(refreshURI,{},{headers:{
                Authorization: "Bearer " + refreshtoken
            }}).then((response) => {
                if (response.status === 200) {
                    window.localStorage.setItem('token', response.data.data.token)
                    originalRequest.headers['Authorization'] = "Bearer " + response.data.token
                    return instance(originalRequest)
                }
            })
        }
        return Promise.reject(error)
    })

export const get = (url, body = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            body
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const post = (url, body = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            body
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const put = (url, body = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'put',
            url,
            body
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}