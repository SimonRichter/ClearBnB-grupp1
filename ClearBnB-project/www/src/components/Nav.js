import React from 'react'
import '../style/Nav.css';
import {Link} from 'react-router-dom'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap'


const Nav = () => {

  return (
    <div className="nav-bar">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Hamburger Menu</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about">About</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/Residences">Residences</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/register">Register</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>;

      <h4>ClearBnB</h4>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Residences">Residences</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
    </div>
  ); 
}

export default Nav;