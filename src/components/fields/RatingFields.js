import React from 'react'

const RatingFields = ({ comments, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Rating"
        name="comments"
        value={comments}
        onChange={handleChange}
      />
    </div>
  )
}

export default RatingFields
