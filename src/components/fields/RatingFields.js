import React from 'react'

const RatingFields = ({ rating, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Rating"
        name="rating"
        value={rating}
        onChange={handleChange}
      />
    </div>
  )
}

export default RatingFields
