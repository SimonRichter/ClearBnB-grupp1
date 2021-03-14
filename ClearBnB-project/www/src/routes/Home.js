import React, { useEffect, useContext, useState, useRef} from 'react';
import '../style/Home.css';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';


const Home = () => {
  const history = useHistory();
   const { setLoginToast, loginToast } = useContext(UserContext);
  



  const exploreHandler = () => {
    history.push("/residences")
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setLoginToast(false);
  };
  

  return (
    <div className="homeWrapper">
      <Snackbar open={loginToast} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Login sucessfully
        </Alert>
      </Snackbar>

      <div className="home">
      <img className="homeImage" src="https://i.postimg.cc/kXXSQpKb/bkpicture-1.png" alt="" />

      <div className="startTravel">
        <p>Start Travel</p>
        <button onClick={exploreHandler}  className="exploreBtn" >Explore the residences</button>
      </div>
      <div class="arrow bounce"></div>
      </div>
       <p className="exploreText">EXPLORE THE WORLD</p>
      <div className="divImgs">
        <div>
        <img src="https://cdn.shopify.com/s/files/1/1824/2601/files/photo_2020-10-12_10-45-26_480x480.jpg?v=1602524781" alt="" />
        <p>Begin a adventure you've allways dreamed about.</p>
        </div>
        <div>
        <img src="https://cdn.shopify.com/s/files/1/1824/2601/files/photo_2020-10-12_10-45-26_480x480.jpg?v=1602524781" alt="" />
        <p>Begin a adventure you've allways dreamed about.</p>
        </div>
        <div>
        <img src="https://cdn.shopify.com/s/files/1/1824/2601/files/photo_2020-10-12_10-45-26_480x480.jpg?v=1602524781" alt="" />
        <p>Begin a adventure you've allways dreamed about.</p>
        </div>
        
        
        
        </div>
    </div>

  );
}
 
export default Home;