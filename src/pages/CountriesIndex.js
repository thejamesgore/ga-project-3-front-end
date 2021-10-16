import React, { useState, useEffect } from 'react'
import { getAllCountries } from '../lib/api.js'
import CountriesCard from '../components/CountriesCard.js'
import CountriesSearchResults from '../components/CountriesSearchResults.js'

export default function Countries() {
  const [countries, setCountries] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const filterCountries = () => {
    return countries.filter((country) => {
      if (searchTerm.length === 0) {
        return countries
      } else {
        return countries.name.toLowerCase().includes(searchTerm.toLowerCase())
      }
    })
  }

  console.log('countries test', countries)

  useEffect(() => {
    getAllCountries().then(function (response) {
      setCountries(response.data)
    })
  }, [])

  return (
    <>
      <div>
        <p className="title">Countries Page: </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="search for something"
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        {/* <button onClick={filterCountries}>SEARCH</button> */}
      </div>
      <div className="display-country-cards">
        {/* countries starts */}
        <div>
          {filterCountries().map((country) => (
            <CountriesCard
              key={country._id}
              // _id={country._id}
              name={country.name}
              city={country.city}
              yearVisited={country.yearVisited}
              comments={country.comments}
              rating={country.rating}
            />
          ))}
        </div>

        {/* countries ends */}
        <footer className="footer">
          <div className="footer-container">
            <p>A BORING FOOTER</p>
          </div>
        </footer>
      </div>
    </>
  )
}
