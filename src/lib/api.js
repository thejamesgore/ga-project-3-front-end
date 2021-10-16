import axios from 'axios'
import { getToken } from './auth'
const baseUrl = 'http://localhost:8001/api'

// All methods for interacting with the api

export const getAllCountries = async () => {
  const data = await axios.get(`http://localhost:8001/api/countries`)

  // console.log('this is data returning from the API', data.data)

  return data
}

// getAllCountriesById
export const getAllCountriesById = async () => {
  const data = await axios.get(`http://localhost:8001/api/countries/${id}`)
  console.log('This is our countries returning with Ids')
  return data
}

export const createCountry = (formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  }

  return axios.post(`${baseUrl}/countries`, formData, requestConfig)

  // console.log(`👀 This is the response form the CREATECOUNTRY api call`, data)
}

export const deleteCountry = (id) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  }

  return axios.delete(`${baseUrl}/countries/${id}`, requestConfig)

  // console.log(`👀 This is the response form the CREATECOUNTRY api call`, data)
}

export const getUser = async (id) => {
  const user = await axios.get(`http://localhost:8001/api/user/${id}`)
  // console.log(`This is the user data from getUser!`, user)
  return user
}

export const getPhoto = async (country) => {
  const requestConfig = {
    headers: {
      Authorization: `Bearer 563492ad6f91700001000001fac695d561974d09ae75e93910d792ff`,
    },
  }

  const photo = await axios.get(
    `https://api.pexels.com/v1/search?query=${country}&per_page=1`,
    requestConfig
  )
  console.log(`RESULTS FROM PEXELS API >>> `, photo)
  return photo
}
