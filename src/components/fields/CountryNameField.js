import React from 'react'

const CountryNameField = ({ name, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>
  )
}

export default CountryNameField
