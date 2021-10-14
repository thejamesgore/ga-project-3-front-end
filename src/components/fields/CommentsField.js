import React from 'react'

const CommentsField = ({ comments, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="Comments"
        name="comments"
        value={comments}
        onChange={handleChange}
      />
    </div>
  )
}

export default CommentsField
