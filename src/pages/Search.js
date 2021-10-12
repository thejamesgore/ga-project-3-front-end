import { resolveConfigFile } from 'prettier'
import React, { useState, useEffect } from 'react'
import { getAllCountries } from '../api/Countries.js'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    console.log(searchTerm)
  }

  return (
    <section classname="section">
      <div className="container has-text-centered">
        <h1 className="title">Countries Search</h1>
        <div>
          <input
            type="text"
            placeholder="search for something"
            onChange={(event) => {
              setSearchTerm(event.target.value)
            }}
          />
          <button onClick={handleSearch}>SEARCH</button>
        </div>
      </div>
    </section>
  )
}
