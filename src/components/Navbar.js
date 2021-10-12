import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    history.push(`/countries/${searchTerm}`)
  }

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-items">
          <Link to="/" className="navbar-items">
            Home
          </Link>
          <Link to="/countries" className="navbar-items">
            Countries
          </Link>
          <div>
            <input
              type="text"
              placeholder="search"
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {/* NAVBAR conditional rendering if user is logged in show
             members Dashboard & Logout Link else show Register and login */}

          {isAuthenticated ? (
            <>
              <Link to="/members" className="navbar-items">
                Members Dashboard
              </Link>
              <Link to="/logout" className="navbar-items">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="navbar-items">
                Register
              </Link>
              <Link to="/login" className="navbar-items">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
