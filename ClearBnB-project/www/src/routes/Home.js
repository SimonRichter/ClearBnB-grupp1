import React, { useEffect, useContext, useState, useRef} from 'react';
import '../style/Home.css';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';


const Home = () => {

  const toSweden = { 
  pathname: "/residences", 
  country: "Sweden" 
  };

  const toDenmark = { 
  pathname: "/residences", 
  country: "Denmark" 
  };

  const toFinland = { 
  pathname: "/residences", 
  country: "Finland" 
  };

  const toIceland = { 
  pathname: "/residences", 
  country: "Iceland" 
  };


  const history = useHistory();
   const { setLoginToast, loginToast, setLogoutToast, logoutToast } = useContext(UserContext);
  
  
  const exploreHandler = () => {
    history.push("/residences")
  }

  const handleCloseLogin = (reason) => {
    if (reason === 'clickaway') { return; }
    setLoginToast(false);
  };

  const handleCloseLogout = (reason) => {
    if (reason === 'clickaway') { return; }
    setLogoutToast(false);
  };

  const vertical = 'top'
  const horizontal = 'right'

  return (
    <div className="homeWrapper">
      <Snackbar className="toast"
        anchorOrigin={{ vertical, horizontal }}
        open={loginToast} autoHideDuration={2000} onClose={handleCloseLogin}>
        <Alert onClose={handleCloseLogin} severity="success">
          Logged in.
        </Alert>
      </Snackbar>
      <Snackbar className="toast"
        anchorOrigin={{ vertical, horizontal }}
        open={logoutToast} autoHideDuration={2000} onClose={handleCloseLogout}>
        <Alert onClose={handleCloseLogout} severity="success">
          Logged out.
        </Alert>
      </Snackbar>

      <div className="home">
      <img className="homeImage" src="https://i.postimg.cc/kXXSQpKb/bkpicture-1.png" alt="" />

      <div className="startTravel">
        <div><p>Start Travel</p></div>
        <button onClick={exploreHandler}  className="exploreBtn" >Explore the residences</button>
      </div>
      <div class="arrow bounce"></div>
      </div>
      <p className="exploreText">EXPLORE THE WORLD</p>
      <div className="information">
        <p>FILTER RESIDENCES BY COUNTRY</p>
      </div>
      <div className="divImgs">
        <div>
          <Link to={toSweden}><img src="https://www.sweden.org.za/images/swedens-flag.jpg" alt="" /></Link>
          <p>SWEDEN</p>
        </div>
        <div>
          <Link to={toDenmark}><img src="https://c4.wallpaperflare.com/wallpaper/3/770/559/flags-flag-of-denmark-danish-flag-flag-hd-wallpaper-preview.jpg" alt="" /></Link>
          <p>DENMARK</p>
        </div>
        <div>
          <Link to={toFinland}><img src="https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png" alt="" /></Link>
          <p>FINLAND</p>
        </div>
        <div>
          <Link to={toIceland}><img src="https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png" alt="" /></Link>
          <p>ICELAND</p>
        </div>
        </div>
    </div>

  );
}
 
export default Home;