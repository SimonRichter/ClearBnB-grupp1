import React from 'react'
import '../style/About.css'
import Person from '../components/Person'

const About = () => {

  const persons = [
    {
      name: "Oscar Gregorius",
      nr: "0728452302",
      email: "oscar@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821390241982054510/image0.png"
    },
    {
      name: "Ali Al-Mousawi",
      nr: "0728492303",
      email: "ali@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821391528063926282/IMG_20200817_132848_332.jpg"
    },
    {
      name: "Jonathan Persson",
      nr: "0728492304",
      email: "jonathan@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821393083659845692/IMG_20210316_153701.jpg"
    },
    {
      name: "Simon Richter",
      nr: "0728492305",
      email: "simon@clearbnb.se",
      img: "https://cdn.discordapp.com/attachments/815586876261531659/821391699459702804/1581419371598.jpg"
    }
  ];



  return (
    <div className="about">
      <div className="information">
          <p className="head">About ClearBnB</p>
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
      <div className="persons">
        {persons.map(p => (<Person person={p} />))}
      </div>  
  </div>
  );
}
 
export default About;