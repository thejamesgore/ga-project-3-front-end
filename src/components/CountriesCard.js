import React from 'react'

const CountriesCard = ({ _id, name, city, yearVisited, comments, rating }) => {
  return (
    <div className="country-card-container">
      <div className="country-card">
        <h2>CREATED BY @USERNAME</h2>
      </div>
      <div>
        <h3>Country: {name}</h3>
      </div>
      <div>
        <p>Cities Visited: {city}</p>
      </div>

      <div>
        <p>Year Visted: {yearVisited}</p>
      </div>
      <div>
        <p>Comments: {comments}</p>
      </div>
      <div>
        <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default CountriesCard
