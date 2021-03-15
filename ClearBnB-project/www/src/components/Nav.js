import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import {Link} from 'react-router-dom'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap'


const Nav = () => {

  const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  

  useEffect(() => {
    whoIsOnline();
  }, [])
  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  

  return (
    <div className="nav-bar">
      <h4>ClearBnB</h4>
      <div as={NavItem} className="hamburger-menu-opened">
        <p className="hamburger-menu" onClick={handleToggle}>☰</p>
        <div className={isActive ? "display-none" : "flex-column"}>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Residences">Residences</Link>
          {!whoAmI && <Link to="/login">Login</Link>}
          {!whoAmI && <Link to="/register">Register</Link>}
          {whoAmI && <Link to="/" onClick={() => logOut()}>Log out</Link>}
        </div>
      </div>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Residences">Residences</Link>
      {!whoAmI && <Link to="/login">Login</Link>}
      {!whoAmI && <Link to="/register">Register</Link>}
        {whoAmI && <Link to="/myBookings">My bookings</Link>}
      {whoAmI && <Link to="/myRentals">My rentals</Link>}
      {whoAmI && <Link to="/" onClick={() => logOut()}>Log out</Link>}  
      </div>
    </div>
  ); 
}

export default Nav;