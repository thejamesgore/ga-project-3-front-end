import React, { useState, useEffect } from 'react'
import CreateCountryForm from '../components/CreateCountryForm'
import VisistedPlaces from '../components/VisistedPlaces'
import { getAllCountries, getUser } from '../lib/api'
import Map from '../components/Map.js'

export default function MembersHome() {
  const [userId, setUserId] = useState('')
  const [countries, setCountries] = useState([])
  const [userCountries, setUserCountries] = useState()

  useEffect(() => {
    getAllCountries().then(function (response) {
      // console.log(`Response from API`, response)
      setCountries(response.data)
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token).then((response) => setUserId(response))
  }, [])
  // console.log('User ID FROM API IS >> ', userId?.data._id)

  useEffect(() => {
    if (!userId || !countries) {
      return
    } else {
      const username = userId.data.username
      const countryKey = countries.filter((country) => country.createdBy)
      let mappedKey = countryKey.map((item) => ({
        name: item.name,
        createdBy: item.createdBy.username,
      }))
      let finalCountries = mappedKey.filter(
        (country) => country.createdBy == username
      )
      setUserCountries(finalCountries)
    }
  }, [userId, countries])

  return (
    <div className="members-home">
      <div className="main-members-container">
        {/* LEFT SIDE OF PAGE */}
        <div className="left-side">
          {/* MAP COMPONENET */}
          <Map props={userCountries} />
        </div>

        {/* RIGHT SIDE OF PAGE */}

        <div className="right-side">
          <h1>Create New Trip</h1>
          <CreateCountryForm />
        </div>
      </div>
      <div className="visted-bar">
        <div className="visited-countries">
          {userCountries?.map(({ name }) => (
            <VisistedPlaces key={name} name={name} />
          ))}
        </div>
      </div>
      <div className="progress-bar">
        <h1>THIS IS WHERE THE TOTAL COUNTRIES VISITED BAR GOES</h1>
      </div>
    </div>
  )
}
