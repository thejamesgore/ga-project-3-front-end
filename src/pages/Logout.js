import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { removeToken } from '../lib/auth'

export default function Logout({ callback }) {
  const history = useHistory()
  useEffect(() => {
    removeToken()
    callback()
  })
  return <p>Logout</p>
}
