import axios from 'axios'
const baseUrl = '/api'

// Authorization

export const registerUser = (formData) => {
    return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = (formData) => {
    return axios.post(`${baseUrl}/login`, formData)
}


export const isLoggedIn = () => {
  const token = getToken()
  if (!token) {
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    return false
  }

  return JSON.parse(atob(parts[1]))
}


// Token handling

export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const setToken = (token) => {
    window.localStorage.setItem('token', token)
}

