import axios from 'axios'
import { getToken } from './auth'
const baseUrl = 'http://localhost:8001'

// All methods for interacting with the api

export const getAllCountries = async () => {
  const data = await axios.get(`${baseUrl}/api/countries`)

  // console.log('this is data returning from the API', data.data)

  return data
}

// getAllCountriesById
export const getAllCountriesById = async () => {
  const data = await axios.get(`${baseUrl}/api/countries/${id}`)
  console.log('This is our countries returning with Ids')
  return data
}

export const createCountry = (formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  }

  return axios.post(`${baseUrl}/api/countries`, formData, requestConfig)

  // console.log(`👀 This is the response form the CREATECOUNTRY api call`, data)
}

export const deleteCountry = (id) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  }

  return axios.delete(`${baseUrl}/countries/${id}`, requestConfig)
}

export const getUser = async (id) => {
  const user = await axios.get(`${baseUrl}/api/user/${id}`)
  // console.log(`This is the user data from getUser!`, user)
  return user
}


export const getPhoto = async (country) => {
let pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY2

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${pexelsApiKey}`,
    },
  }

  const photo = await axios.get(
    `https://api.pexels.com/v1/search?query=${country}&per_page=1`,
    requestConfig
  )
  // console.log(`RESULTS FROM PEXELS API >>> `, photo)
  return photo
}