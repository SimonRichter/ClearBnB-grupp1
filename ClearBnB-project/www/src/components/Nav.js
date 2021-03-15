import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import { Link } from 'react-router-dom'
import ProfileMenu from './ProfileMenu';
import { Dropdown, NavItem, NavLink } from 'react-bootstrap'


const Nav = () => {

const { whoAmI, whoIsOnline } = useContext(UserContext);
  
  useEffect(() => {
    whoIsOnline();
  }, [])
  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  

  return (
    <div className="nav-bar">
      <img className="logoImg" src="https://i.postimg.cc/020TTsWC/logo-transparent-2.png" alt=""/>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Link to="/Residences">Residences</Link>
      {!whoAmI && <Link to="/login">Login</Link>}
      {!whoAmI && <Link to="/register">Register</Link>} 
        <ProfileMenu/>
      </div>
    </div>
  ); 
}

export default Nav;