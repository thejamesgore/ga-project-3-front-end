import React from 'react'

const CommentsField = ({ text, handleChange }) => {
  return (
    <div>
      <input
        className="input text-area"
        type="text"
        placeholder="Comments"
        name="text"
        value={text}
        max="300"
        onChange={handleChange}
      />
    </div>
  )
}

export default CommentsField
