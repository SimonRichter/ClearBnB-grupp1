import React from 'react';
import '../style/Home.css';
const Home = () => {
  return (
    <div className="home">
      <img className="homeImage" src="https://i.postimg.cc/kXXSQpKb/bkpicture-1.png" alt="" />

      <div className="startTravel">
        <h4>Start Travel</h4>
        <button>Explore the residences</button>
      </div>

      <div className="infoImages">
        <p>Experience the adventures</p>
      </div>
      <div class="arrow bounce"></div>
    </div>

  );
}
 
export default Home;