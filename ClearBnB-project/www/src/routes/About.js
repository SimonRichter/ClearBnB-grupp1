import React from 'react'
import '../style/About.css'
import Person from '../components/Person'

const About = () => {

  const persons = [
    {
      name: "Oscar Gregorius",
      nr: "0728492302",
      email: "oscar@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821390241982054510/image0.png"
    },
    {
      name: "Ali Al-Mousawi",
      nr: "0728492302",
      email: "ali@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821391528063926282/IMG_20200817_132848_332.jpg"
    },
    {
      name: "Jonathan Persson",
      nr: "0728492302",
      email: "jonathan@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821393083659845692/IMG_20210316_153701.jpg"
    },
    {
      name: "Simon Richter",
      nr: "0728492302",
      email: "simon@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821391699459702804/1581419371598.jpg"
    }
  ];



  return (
    <div className="about">
      <div className="outerContainer">
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