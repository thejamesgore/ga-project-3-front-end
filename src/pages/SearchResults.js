import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllCountries } from '../lib/api'
import { useEffect } from 'react/cjs/react.development'

export default function SearchResults() {
  let id = useParams()
  console.log(id)
  return (
    <div>
      <h1>THIS SEARCH TERM IS {id.id} </h1>
    </div>
  )
}
// const fetchData = async () => {
//   const countries = getAllCountries()
// }

// useEffect(() => {
//   fetchData()
// }, [])

// REST OF SEARCH BAR

// take id and pass into api call function
// get countries by id (postman)
// get cities by id (id.cities)
// console log countries and cities
// set the data to state to store on page
// use effect (if searching again)
// {responsive if have time}
