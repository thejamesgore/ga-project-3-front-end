import axios from 'axios'

const baseUrl = 'http://localhost:8001'

export const registerUser = (formData) => {
    return axios.post(`${baseUrl}/register`, formData)
}