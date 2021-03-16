import React from 'react'
import '../style/About.css'

const About = () => {
  return (
    <div className="about">
      <div className="grid-container">
        <div className="grid-item">
          <h2>About ClearBnB</h2>
          <p>ClearBnB was created on 16:th November 2007 by two young university students in their garage.
            The company stands for equal rights and have enrolled a diverse staff that helps us to create an environment where everyone can feel welcome and included.
            We also compensate for our CO2 emissions to 100% by planting trees in Malaysia and help conserving freshwater usage by instead using salt water to cool our servers.</p>
          <p>We believe that everyone should have access to shelter; wether they are on travels, are fleeing a war or have had their homes destroyed by a natural disaster.
            Therefore we donate 15% of our earnings to the Safe Home Association that helps people in need with housing.</p>
          <p>
            We are a steadily growing company with shares on the stock market. We hope you have a good experience using our service, and would appreciate it very much if you
            refer us to your friends and family. 
          </p>
        </div>
      </div>
    <div className="persons">
    <div className="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821391699459702804/1581419371598.jpg" alt="" />
          <p>Simon Richter</p>
      </div>
        <div class="flip-card-back">
        <p><span>NAME: </span>Simon Richter</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>simon@clearbnb.se</p>
        </div>
    </div>
    </div>
      
    <div className="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821390241982054510/image0.png" alt="" />
          <p>Oscar Gregorius</p>
      </div>
        <div class="flip-card-back">
        <p><span>NAME: </span>Oscar Gregorius</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>oscar@clearbnb.se</p>
        </div>
    </div>
    </div>
        
    <div className="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821391528063926282/IMG_20200817_132848_332.jpg" alt="" />
          <p>Ali Al-Mousawi</p>
      </div>
        <div class="flip-card-back">
        <p><span>NAME: </span>Ali Al-Mousawi</p>
        <p><span>NR: </span>0728492302</p>
        <p><span>EMAIL: </span>ali@clearbnb.se</p>
        </div>
    </div>
        </div>
        
        <div className="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821393083659845692/IMG_20210316_153701.jpg" alt="" />
          <p>Jonathan Persson</p>
      </div>
        <div class="flip-card-back">
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