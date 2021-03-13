import React from 'react';
import '../style/Home.css';
import {Link, useHistory} from 'react-router-dom'


const Home = () => {
  const history = useHistory();
  
  const exploreHandler = () => {
    console.log('works');
    history.push("/residences")
  }

  return (
    <div className="homeWrapper">
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