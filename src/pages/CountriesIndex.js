import React, { useState, useEffect } from 'react'
import { getAllCountries } from '../lib/api.js'
import CountriesCard from '../components/CountriesCard.js'

export default function Countries() {
  const [countries, setCountries] = useState([])

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
      <div className="display-country-cards">
        {/* countries starts */}
        <div>
          {countries.map((country) => (
            <CountriesCard
              key={country._id}
              // _id={country._id}
              name={country.name}
              city={country.city}
              yearVisited={country.yearVisited}
              comments={country.comments}
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
