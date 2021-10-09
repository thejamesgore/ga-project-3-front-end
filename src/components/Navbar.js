import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-items">
            <Link to="/" className="navbar-items">
              Home
            </Link>
            <Link to="/countries" className="navbar-items">
              Countries
            </Link>
            <Link to="/register" className="navbar-items">
              Register
            </Link>
            <Link to="/login" className="navbar-items">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
