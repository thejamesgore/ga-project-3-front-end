import axios from 'axios'

// All methods for interacting with the api

export const getAllCountries = async () => {
  const data = await axios.get(`http://localhost:8001/api/countries`)
  console.log('this is data returning from the API', data)

  return data
}

// getAllCountriesById
const getAllCountriesById = (async) => {
  const data = await axios.get('localhost:3000/api/countries/:id')
  console.log('This is our countries returning with Ids')
}
axios(getAllCountriesById)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
