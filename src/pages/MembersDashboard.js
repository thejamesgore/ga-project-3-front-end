import React, { useState, useEffect } from 'react'
import CreateCountryForm from '../components/CreateCountryForm'
import { getAllCountries, getUser } from '../lib/api'

export default function MembersHome() {
  // function that automatically gets all countries for user based on id
  // function that sorts through that data and only adds countries to an array
  // Displays every country travelled to underneath map
  // functinon that passes each location from the array into map function and drops pin onto map
  const [userId, setUserId] = useState()
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getAllCountries().then(function (response) {
      setCountries(response.data)
    })
  }, [])

  console.log(countries)

  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token).then((response) => setUserId(response))
  }, [])
  console.log('User ID FROM API IS >> ', userId?.data._id)

  return (
    <div className="members-home">
      <div className="main-members-container">
        {/* LEFT SIDE OF PAGE */}
        <div className="left-side">
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
          <h1>THIS IS THE LEFT SIIIIIDE</h1>
        </div>

        {/* MAP COMPONENET */}

        {/* RIGHT SIDE OF PAGE */}

        <div className="right-side">
          <h1>Create New Trip</h1>
          {/* <CreateCountryForm /> */}
        </div>
      </div>
      <div className="visted-bar">
        <h1>THIS IS WHERE THE TOTAL COUNTRIES VISITED BAR GOES</h1>
      </div>
    </div>
  )
}
