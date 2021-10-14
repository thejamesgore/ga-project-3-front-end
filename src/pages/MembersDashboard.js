import React, { useState, useEffect } from 'react'
import CreateCountryForm from '../components/CreateCountryForm'
import VisistedPlaces from '../components/VisistedPlaces'
import { getAllCountries, getUser } from '../lib/api'
import Map from '../components/Map.js'

import Geocode from 'react-geocode'
Geocode.setApiKey('AIzaSyBK6SzZbuxMjIHPxdoBk54ag5K23MLTss4')
Geocode.setLanguage('en')
Geocode.enableDebug()

export default function MembersHome() {
  const [userId, setUserId] = useState('')
  const [countries, setCountries] = useState([])
  const [userCountries, setUserCountries] = useState()
  const [coordinates, setCoordinates] = useState([
    {
      lat: 51,
      lng: 0,
    },
  ])
  const [countryCount, setCountryCount] = useState()
  let geocodedCountries = []

  useEffect(() => {
    if (!userCountries) {
      return
    }
    const array = userCountries
    for (let i = 0; i < array.length; i++) {
      getCoordinates(array[i].name)
    }
  }, [userCountries])

  const getCoordinates = async (location) => {
    Geocode.fromAddress(location).then(
      (response) => {
        geocodedCountries.push(response.results[0].geometry.location)
        console.log(`Data from function`, geocodedCountries)
        setCoordinates(geocodedCountries)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  useEffect(() => {
    getAllCountries().then(function (response) {
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
      <div className="progress-bar">
        <h1>THIS IS WHERE THE TOTAL COUNTRIES VISITED BAR GOES</h1>
      </div>
      <div className="main-members-container">
        {/* LEFT SIDE OF PAGE */}
        <div className="left-side">
          {/* MAP COMPONENET */}
          <Map props={coordinates} />
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
    </div>
  )
}
