import React from 'react';
import '../style/Home.css';
const Home = () => {
  return (
    <div className="home">
      <img className="homeImage" src="https://i.postimg.cc/kXXSQpKb/bkpicture-1.png" alt="" />

      <div className="startTravel">
        <p>Start Travel</p>
        <button className="exploreBtn" >Explore the residences</button>
      </div>

      <div class="arrow bounce"></div>
    </div>

  );
}
 
export default Home;