import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { setToken, loginUser } from '../lib/auth.js'


export default function Login() {
const history = useHistory()
const [data, setData] = useState({
  formData: {
    username: '',
    email: '',
    password: '',
  },
})

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await loginUser(data.formData)
      console.log(`response from api is >>>>>>`, res)
      if (res.status === 200) {
        console.log('User login successful')
        setToken(res.data.token)
        history.push
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
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}
