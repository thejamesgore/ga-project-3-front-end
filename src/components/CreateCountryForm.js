import React, { useState } from 'react'
import CountryNameField from './fields/CountryNameField'
import YearVistiedField from './fields/YearVistiedField'
import CommentsField from './fields/CommentsField'
import RatingFields from './fields/RatingFields'
import { createCountry } from '../lib/api'
import { useHistory } from 'react-router'
import City from './fields/City'

export default function CreateCountryForm() {
  const history = useHistory()
  const [state, setState] = useState({
    formData: {
      name: '',
      city: '',
      yearVisited: '',
      comments: '',
      rating: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await createCountry(state.formData)
      history.push(`/members/`)
    } catch (err) {
      console.log('error pushing country', err)
    }
  }
  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }
    setState({ formData })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Country</label>
        <CountryNameField
          handleChange={handleChange}
          name={state.formData.name}
        />
        <label className="label">City</label>
        <City handleChange={handleChange} name={state.formData.city} />

        <label className="label">Year Visited</label>
        <YearVistiedField
          handleChange={handleChange}
          name={state.formData.yearVisited}
        />
        <label className="label">Comments</label>
        <CommentsField
          handleChange={handleChange}
          name={state.formData.comments.text}
        />
        <label className="label">Rating</label>
        <RatingFields
          handleChange={handleChange}
          name={state.formData.comments.rating}
        />
        <br></br>
        <input type="submit" value={`add ${state.formData.name}`} />
      </form>
    </div>
  )
}
