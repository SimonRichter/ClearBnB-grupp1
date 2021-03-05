import React from 'react'
import '../style/Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav-bar">
      <h4>ClearBnB</h4>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Residences">Residences</Link>
      </div>
    </div>
  ); 
}

export default Nav;