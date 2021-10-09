import React from 'react'
import { setToken } from '../../lib/auth'

export default function Login() {



  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await loginUser(data.formData)
      if (res.status === 200) {
        console.log('User login successful')
        setToken(res.data.token)
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
        <h1>This is the login page</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
          </div>

          <div>
            <input
              placeholder="Username"
              name="username"
            //   value={data.formData.username}
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
            //   value={data.formData.email}
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
            //   value={data.formData.password}
              onChange={handleInput}
            />
          </div>



          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}
