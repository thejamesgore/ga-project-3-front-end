import React, { useState, useEffect } from 'react'
import { getPhoto } from '../lib/api'

const CountriesCard = ({ name, city, yearVisited, comments, rating }) => {
  const [image, setImage] = useState()
  const placeImages = async () => {
    console.log(`HANDLE CLICKED!`)
    const imageUrl2 = await getPhoto(name)
    setImage(imageUrl2.data.photos[0].src.landscape)
  }

  useEffect(() => {
    placeImages()
  }, [name])


const CountriesCard = ({
  _id,
  username,
  name,
  city,
  yearVisited,
  comments,
  rating,
}) => {
  console.log(`THIS IS THE USERNAME`, username)
  let user = username?.username
  return (
    <div className="country-card-container">
      <div className="country-card">
        <h2>CREATED BY {user}</h2>

      </div>
      <div className="image-container">
        <img src={image} alt="picture of the country" />
      </div>
      <div className="country-card-content">
        <h3>Country: {name}</h3>
      </div>
      <div className="country-card-content">
        <p>Cities Visited: {city}</p>
      </div>

      <div className="country-card-content">
        <p>Year Visted: {yearVisited}</p>
      </div>
      <div className="country-card-content">
        <p>Comments: {comments}</p>
      </div>
      <div className="country-card-content">
        <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default CountriesCard
