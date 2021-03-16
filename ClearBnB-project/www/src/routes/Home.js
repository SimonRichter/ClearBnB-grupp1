import React, {useContext} from 'react';
import '../style/Home.css';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import Snackbar from '@material-ui/core/Snackbar';
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

  const toHouse = { 
  pathname: "/residences", 
  type: "House" 
  };
  
  const toApartment = { 
  pathname: "/residences", 
  type: "Apartment" 
  };
  
  const toTent = { 
  pathname: "/residences", 
  type: "Tent" 
  };
  
  const toTrailer = { 
  pathname: "/residences", 
  type: "Trailer" 
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
        <p>Start Travel</p>
        <button onClick={exploreHandler}  className="exploreBtn" >Explore the residences</button>
      </div>
      <div className="arrow bounce"></div>
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
       <div className="information2">
        <p>FILTER RESIDENCES BY TYPE</p>
      </div>
      <div className="typeImgs">
        <div>
          <Link to={toTent}><img src="https://image.freepik.com/free-vector/camping-travel-tent-equipment-cartoon_18591-53394.jpg" alt="" /></Link>
          <p>TENT</p>
        </div>
        <div>
          <Link to={toTrailer}><img src="https://previews.123rf.com/images/blamb/blamb1407/blamb140700941/29718891-a-retro-cartoon-steel-trailer-on-a-hill-.jpg" alt="" /></Link>
          <p>TRAILER</p>
        </div>
        <div>
          <Link to={toHouse}><img src="https://cdn2.vectorstock.com/i/1000x1000/83/06/funny-house-cartoon-vector-618306.jpg" alt="" /></Link>
          <p>HOUSE</p>
        </div>
        <div>
          <Link to={toApartment}><img src="https://as1.ftcdn.net/jpg/01/99/19/08/500_F_199190851_2trNihIOmqkfmUbJtjeKtATsYmE53gMw.jpg" alt="" /></Link>
          <p>APARTMENT</p>
        </div>
      </div>      
    </div>

  );
}
 
export default Home;