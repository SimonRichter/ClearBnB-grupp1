import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {

  const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  

  useEffect(() => {
    whoIsOnline();
  },[])

  return (
    <div className="nav-bar">
      <h4>ClearBnB</h4>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Link to="/Residences">Residences</Link>
      {whoAmI && <Link to="/addResidence">Host Residence</Link>} 
      {!whoAmI && <Link to="/login">Login</Link>}
      {!whoAmI && <Link to="/register">Register</Link>}
      {whoAmI && <Link to="/" onClick={() => logOut()}>Log out</Link>} 
      </div>
    </div>
  ); 
}

export default Nav;