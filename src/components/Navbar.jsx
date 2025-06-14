import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jio_TV_logo.svg/1024px-Jio_TV_logo.svg.png"/>
            
        </div>
      <div className="nav1">
        <Link to="/">All</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/news">News</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/change">Change Password</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
