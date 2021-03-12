import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import {Link} from 'react-router-dom'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap'


const Nav = () => {

  const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  

  useEffect(() => {
    whoIsOnline();
  }, [])
  
  // const [isActive, setActive] = useState("false");

  // const handleToggle = () => {
  //   setActive(!isActive);
  // };
  

  return (
    <div className="nav-bar">
      <h4>ClearBnB</h4>
      <Dropdown as={NavItem} className="hamburger-menu-opened">
        <Dropdown.Toggle as={NavLink} className="hamburger-menu">☰</Dropdown.Toggle>
        <Dropdown.Menu className="flex-column">
          <Dropdown.Item><Link to="/" >Home</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about">About</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/Residences">Residences</Link></Dropdown.Item>
          <Dropdown.Item>{!whoAmI && <Link to="/login">Login</Link>}</Dropdown.Item>
          <Dropdown.Item>{!whoAmI && <Link to="/register">Register</Link>}</Dropdown.Item>
          <Dropdown.Item>{whoAmI && <Link to="/" onClick={() => logOut()}>Log out</Link>}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Residences">Residences</Link>
      {!whoAmI && <Link to="/login">Login</Link>}
      {!whoAmI && <Link to="/register">Register</Link>}
      {whoAmI && <Link to="/" onClick={() => logOut()}>Log out</Link>} 
      </div>
    </div>
  ); 
}

export default Nav;