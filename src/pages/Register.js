import React, { useState } from 'react'
import { registerUser } from '../lib/auth.js'

export default function Register() {
  const [data, setData] = useState({
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const [isRegistered, setIsRegistered] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await registerUser(data.formData)
      if (res.status === 201) {
        console.log('User registration successful')
        setIsRegistered(true)
        console.log(`IS THE USER REGISTERED >>>>>`, isRegistered)
      }
    } catch (err) {
      console.error('Error registering user', err)
    }
  }

  const handleInput = (event) => {
    const formData = {
      ...data.formData,
      [event.target.name]: event.target.value,
    }
    setData({ formData })
  }

  return (
    <div>
      <div>
        <h1>This is the registration page</h1>
      </div>

      <div className="form">
        {/* everything to do with the form is below */}

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
            </div>

            <div>
              <input
                placeholder="Username"
                name="username"
                value={data.formData.username}
                onChange={handleInput}
              />
            </div>

            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                placeholder="Email"
                name="email"
                value={data.formData.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                placeholder="Password"
                name="password"
                type="password"
                value={data.formData.password}
                onChange={handleInput}
              />
            </div>

            <div>
              <label>Confirm Password</label>
            </div>
            <div>
              <input
                placeholder="Confirm Password"
                name="passwordConfirmation"
                type="password"
                value={data.formData.passwordConfirmation}
                onChange={handleInput}
              />
            </div>

            <div>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
        {/* everything to do with the form is above */}

        {isRegistered ? (
          <h3>Contratulations you're registered and can now login!</h3>
        ) : (
          <h3>To register fill out the form above</h3>
        )}
      </div>
    </div>
  )
}
