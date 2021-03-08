import React from 'react'
import '../style/About.css'

const About = () => {
  return (
    <div className="about">
      <div className="outerContainer">

        {/* <div className ="title">
          <h1>About page</h1>
        </div>

        <div className="upperDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta autem illo ullam sunt reprehenderit quisquam! Numquam eligendi recusandae natus repellat asperiores, excepturi adipisci veniam illo nesciunt cumque at ipsam a.
        </div>

        <div className="lowerDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam minima assumenda, pariatur at ab illo architecto cupiditate sit iure, explicabo ullam asperiores dolorem reiciendis reprehenderit nesciunt similique eaque quas dolor?
        </div> */}
        {/* ----------------------------------------Grid test */}
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item-text">About page</div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur aliquid ab excepturi possimus fugit animi porro et. Odit ipsam excepturi aspernatur tempora at quis et fuga expedita cupiditate voluptates.</div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque blanditiis maiores eveniet, in nesciunt porro rerum id facilis laborum ex iusto nemo quaerat? Cupiditate sequi a reprehenderit fugit blanditiis!</div>
          <div className="grid-item"></div>
        </div>
      </div>

    </div>
  );
}
 
export default About;