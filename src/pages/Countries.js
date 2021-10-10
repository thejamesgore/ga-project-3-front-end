import React, { useState, useEffect } from 'react'
import { getAllCountries } from '../api/Countries.js'
import Country from '../components/Country'

export default function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getAllCountries().then(function (response) {
      setCountries(response.data)
    })
  }, [])

  console.log(`THIS IS THE DATA >>>>>`, countries)

  return (
    <section>
      <div className="hero-body"></div>
      <div>
        <p className="title">Countries Page: </p>
      </div>
      {/* countries starts */}
      {countries.map((country) => (
        <Country key={country._id} {...country} />
      ))}

      {/* countries ends */}
      <footer className="footer">
        <div className="footer-container">
          <p>A BORING FOOTER</p>
        </div>
      </footer>
    </section>
  )
}
