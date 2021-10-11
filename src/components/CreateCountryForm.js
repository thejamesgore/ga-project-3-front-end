import React, { useState } from 'react'

export default function CreateCountryForm() {
  const [state, setState] = useState({
    data: {
      name: '',
      city: '',
      yearVisited: '',
      comments: {
        text: '',
        rating: '',
      },
    },
  })

  const handleChange = (e) => {
    const formData = {
      ...state.data,
      [e.taget.name]: e.target.value,
    }
    setState({ formData })
  }

  return (
    <div>
      <form className="form">
        <label className="label">Country</label>
        <input
          className="input"
          placeholder="Country"
          name="Country"
          value="Country"
          handleChange={handleChange}
        />
        <label className="label">City</label>
        <input
          className="input"
          placeholder="City"
          name="City"
          value="City"
          handleChange={handleChange}
        />
        <label className="label">Year Visited</label>
        <input
          className="input"
          placeholder="Year Visited"
          name="yearVisited"
          value="Year Visited"
          handleChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
