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
    countryName: '',
    city: '',
    yearVisited: '',
    comments: {
      text: '',
      rating: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await createCountry(state)
      console.log(result._id)
      history.push('/countries')
    } catch (err) {
      console.log('error pushing country', err)
    }
  }
  const handleChange = (e) => {
    const formData = {
      ...state,
    }
    console.log('this is formdata', formData)

    console.log('this is state', state)
    setState({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Country</label>
        <CountryNameField
          handleChange={handleChange}
          name={state.countryName}
        />
        <label className="label">City</label>
        <City handleChange={handleChange} name={state.city} />

        <label className="label">Year Visited</label>
        <YearVistiedField
          handleChange={handleChange}
          name={state.yearVisited}
        />
        <label className="label">Comments</label>
        <CommentsField handleChange={handleChange} name={state.comments.text} />
        <label className="label">Rating</label>
        <RatingFields
          handleChange={handleChange}
          name={state.comments.rating}
        />
        <br></br>
        <input type="submit" value={`add ${state.name}`} />
      </form>
    </div>
  )
}
