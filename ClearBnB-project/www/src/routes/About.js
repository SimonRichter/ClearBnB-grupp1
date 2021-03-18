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
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur aliquid ab excepturi possimus fugit animi porro et. Odit ipsam excepturi aspernatur tempora at quis et fuga expedita cupiditate voluptates.</div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque blanditiis maiores eveniet, in nesciunt porro rerum id facilis laborum ex iusto nemo quaerat? Cupiditate sequi a reprehenderit fugit blanditiis!</div>
          <div className="grid-item"></div>
        </div>
      </div>
    <div className="persons">
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821391699459702804/1581419371598.jpg" alt="" />
          <p>Simon Richter</p>
      </div>
        <div className="flip-card-back">
        <p><span>NAME: </span>Simon Richter</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>simon@clearbnb.se</p>
        </div>
    </div>
    </div>
      
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821390241982054510/image0.png" alt="" />
          <p>Oscar Gregorius</p>
      </div>
        <div className="flip-card-back">
        <p><span>NAME: </span>Oscar Gregorius</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>oscar@clearbnb.se</p>
        </div>
    </div>
    </div>
        
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821391528063926282/IMG_20200817_132848_332.jpg" alt="" />
          <p>Ali Al-Mousawi</p>
      </div>
        <div className="flip-card-back">
        <p><span>NAME: </span>Ali Al-Mousawi</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>ali@clearbnb.se</p>
        </div>
    </div>
        </div>
        
        <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821393083659845692/IMG_20210316_153701.jpg" alt="" />
          <p>Jonathan Persson</p>
      </div>
        <div className="flip-card-back">
        <p><span>NAME: </span>Jonathan Persson</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>jonathan@clearbnb.se</p>
        </div>
    </div>
  </div>  

        
      
  </div>  
  </div>
  );
}
 
export default About;