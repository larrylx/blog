import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("token")
    ? jwt_decode(window.localStorage.getItem("token"))
    : {}

// JSON.parse(jwt_decode(window.localStorage.getItem("token")))

const setToken = respons => {
  let data = respons.data
  window.localStorage.setItem("token", data.token)
  window.localStorage.setItem("refresh_token", data.refresh_token)
}

export const handleLogin = async ({ username, password }) => {
  let statusCode = await axios.post('https://login.larrylx.com/auth/login', {
  "user_email": username,
  "password": password,
  })
  .then((response) => {
    if (response.status === 201) {
      setToken(response.data)
    }
    return response.status
    }).catch((error) => {
      console.log(error.response.data)
      return error.response.status
      })
  return statusCode
}

export const isLoggedIn = () => {
  const token = getUser()

  return !!token.user_name
}

export const logout = callback => {
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("refresh_token")
  callback()
}