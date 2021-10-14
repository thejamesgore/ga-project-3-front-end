import React from 'react'

const CountryNameField = ({ countryName, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Country Name"
        name="countryName"
        value={countryName}
        onChange={handleChange}
      />
    </div>
  )
}

export default CountryNameField
