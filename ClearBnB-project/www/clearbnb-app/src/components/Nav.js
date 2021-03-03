import React from 'react'
import '../style/Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav-bar">
      <Link to="/">
      <h4>ClearBnB</h4>
      </Link>
    </div>
  ); 
}

export default Nav;