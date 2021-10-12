import React, { useState, useEffect } from 'react'
import CreateCountryForm from '../components/CreateCountryForm'
import VisistedPlaces from '../components/VisistedPlaces'
import { getAllCountries, getUser } from '../lib/api'
import Map from '../components/Map.js'

export default function MembersHome() {
  // function that sorts through that data and only adds countries to an array
  // Displays every country travelled to underneath map
  // functinon that passes each location from the array into map function and drops pin onto map
  const [userId, setUserId] = useState('')
  const [countries, setCountries] = useState([])
  const [userCountries, setUserCountries] = useState()

  useEffect(() => {
    getAllCountries().then(function (response) {
      setCountries(response.data)
    })
  }, [])
  // console.log(countries)

  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token).then((response) => setUserId(response))
  }, [])
  // console.log('User ID FROM API IS >> ', userId?.data._id)

  useEffect(() => {
    // console.log(`The user id is >>> `, userId)
    let visitedCountries = countries.filter(
      (country) => country.createdBy === userId.data._id
    )

    visitedCountries.map(({ name }) => {
      console.log(`Visisted countries are >>> `, { name })
    })
    // console.log(`PARSED VISITED COUNTRIES >>> `, parsedVisited)
    setUserCountries(visitedCountries)
  }, [userId])
  // console.log('countries created by logged in user  >>>', userCountries)

  return (
    <div className="members-home">
      <div className="main-members-container">
        {/* LEFT SIDE OF PAGE */}
        <div className="left-side">
          {/* MAP COMPONENET */}
          <Map />
        </div>

        {/* RIGHT SIDE OF PAGE */}

        <div className="right-side">
          <h1>Create New Trip</h1>
          {/* <CreateCountryForm /> */}
        </div>
      </div>
      <div className="visted-bar">
        <div>
          {userCountries?.map(({ name }) => (
            <VisistedPlaces key={name} name={name} />
          ))}
        </div>
        <h1>THIS IS WHERE THE TOTAL COUNTRIES VISITED BAR GOES</h1>
      </div>
    </div>
  )
}
