import React from 'react'

const CommentsField = ({ text, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Comments"
        name="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}

export default CommentsField
