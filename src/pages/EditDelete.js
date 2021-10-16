import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getAllCountries, getUser } from '../lib/api'

export default function EditDelete() {
  const [userId, setUserId] = useState('')
  const [countries, setCountries] = useState()
  const [toEdit, setToEdit] = useState()

  const { id } = useParams()
  const countryToEdit = capitalizeFirstLetter(id)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token).then((response) => setUserId(response))
  }, [])

  useEffect(() => {
    getAllCountries().then(function (response) {
      setCountries(response.data)
    })
  }, [])

  useEffect(() => {
    if (!countries || !userId || !countryToEdit) {
      return
    }
    const username = userId.data.username

    let userCountry = countries
      .filter((country) => country.createdBy)
      .map((item) => ({
        _id: item._id,
        name: item.name,
        createdBy: item.createdBy.username,
      }))
      .filter((country) => country.createdBy == username)
      .filter((country) => country.name == countryToEdit)
    setToEdit(userCountry[0])

    console.log(`USERCOUNTRY`, userCountry[0])
  }, [countries])

  return (
    <div>
      <h1>EDIT DELETE PAGE FOR {countryToEdit}</h1>
      <div>
        <h2>Mexico</h2>
        <h3>City</h3>
        <h3>Year Visited</h3>
        <h3>Comments</h3>
        <h3>Rating</h3>
      </div>
    </div>
  )
}
