import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import { Link } from 'react-router-dom'
import ProfileMenu from './ProfileMenu';
// import {NavItem} from 'react-bootstrap'


const Nav = () => {

const { whoAmI, whoIsOnline } = useContext(UserContext);
  
  useEffect(() => {
    whoIsOnline();
  },[])

  return (
    <div className={isActive ? "nav-bar shadow" : "nav-bar no-shadow"}>
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
    <div className="nav-bar">
     <Link to="/"><img className="logoImg" src="https://i.postimg.cc/020TTsWC/logo-transparent-2.png" alt=""/></Link>
      <div className="links">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
        <Link to="/Residences">RESIDENCES</Link>
      {!whoAmI && <Link to="/login">LOGIN</Link>}
      {!whoAmI && <Link to="/register">REGISTER</Link>} 
         <ProfileMenu/>
      </div>
      </div>
      </div>
  ); 
}

export default Nav;