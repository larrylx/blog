import jwt_decode from 'jwt-decode'

const isBrowser = () => typeof window !== "undefined"

export const setToken = respons => {
    let data = respons.data
    window.localStorage.setItem("token", data.token)
    window.localStorage.setItem("refresh_token", data.refresh_token)}

export const getToken = () => 
    isBrowser() && window.localStorage.getItem("token")
    ? window.localStorage.getItem("token")
    : false

export const getRefresh = () => 
    isBrowser() && window.localStorage.getItem("refresh_token")
    ? window.localStorage.getItem("refresh_token")
    : false

export const getUser = () => 
    isBrowser() && window.localStorage.getItem("token")
    ? jwt_decode(window.localStorage.getItem("token"))
    : {}