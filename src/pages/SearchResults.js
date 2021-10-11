import React from 'react'
import { useParams } from 'react-router-dom'

export default function SearchResults() {
  let id = useParams()
  console.log(id)
  return (
    <div>
      <h1>THIS SEARCH TERM IS {id.id} </h1>
    </div>
  )
}
